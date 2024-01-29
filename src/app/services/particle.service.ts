import { Injectable } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import config1Light from '../particle-configs/config1-light';
import config2Light from '../particle-configs/config2-light';
import config1Dark from '../particle-configs/config1-dark';
import config2Dark from '../particle-configs/config2-dark';
import config1LightSmall from '../particle-configs/config1-light-small';
import config2LightSmall from '../particle-configs/config2-light-small';
import config2DarkSmall from '../particle-configs/config2-dark-small';
import config1DarkSmall from '../particle-configs/config1-dark-small';

@Injectable({
 providedIn: 'root'
})

export class ParticleService {
  private particleConfigs: any[] = [config1Light, config2Light];
  private currentConfigIndex = 0;

  async initParticles(config: any): Promise<void> {
      await loadSlim(tsParticles);
      await tsParticles.load({ id: 'tsparticles', options: config });
  }

  reloadParticles(light: boolean, smallScreen: boolean){
    if(light){
      if(smallScreen){
        this.particleConfigs = [config1LightSmall, config2LightSmall];
      }
      else{
        this.particleConfigs = [config2Light, config1Light];
      }
    }
    else{
      if(smallScreen){
        this.particleConfigs = [config2DarkSmall, config1DarkSmall];
      }
      else{
        this.particleConfigs = [config1Dark, config2Dark];
      }
    }
    this.loadParticles();
  }

  async loadParticles(): Promise<void> {
    const currentConfig = this.particleConfigs[this.currentConfigIndex];
    await this.initParticles(currentConfig);
    this.currentConfigIndex = (this.currentConfigIndex + 1) % this.particleConfigs.length;
 }
}
