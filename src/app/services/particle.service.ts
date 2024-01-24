import { Injectable } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import config1Light from '../particle-configs/config1-light';
import config2Light from '../particle-configs/config2-light';
import config1Dark from '../particle-configs/config1-dark';
import config2Dark from '../particle-configs/config2-dark';
import config3 from '../particle-configs/config3';

@Injectable({
 providedIn: 'root'
})

export class ParticleService {
  private particleConfigs: any[] = [config2Light, config1Light];
  private currentConfigIndex = 0;

  async initParticles(config: any): Promise<void> {
      await loadSlim(tsParticles);
      await tsParticles.load({ id: 'tsparticles', options: config });
  }

  reloadParticles(light: boolean){
    if(light){
      this.particleConfigs = [config2Light, config1Light];
    }
    else{
      this.particleConfigs = [config1Dark, config2Dark];
    }
    this.loadParticles();
  }

  async loadParticles(): Promise<void> {
    const currentConfig = this.particleConfigs[this.currentConfigIndex];
    await this.initParticles(currentConfig);
    this.currentConfigIndex = (this.currentConfigIndex + 1) % this.particleConfigs.length;
 }
}
