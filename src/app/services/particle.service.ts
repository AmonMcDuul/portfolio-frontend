import { Injectable } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import config1Light from '../particle-configs/config1-light';
import config2Light from '../particle-configs/config2-light';
import config1Dark from '../particle-configs/config1-dark';
import config2Dark from '../particle-configs/config2-dark';

@Injectable({
 providedIn: 'root'
})

export class ParticleService {
  private particleConfigs: any[] = [config1Light, config2Light];
  private currentConfigIndex = 0;

  async setInitConfig() {
    const storedThemeBool = localStorage.getItem('themeBool');
    let themeBool = storedThemeBool ? JSON.parse(storedThemeBool) : false;
    if(themeBool){
      this.particleConfigs = [config1Light, config2Light];
    }
    else{
      this.particleConfigs = [config2Dark, config1Dark];
    }
  }

  async initParticles(config: any): Promise<void> {
      await loadSlim(tsParticles);
      await tsParticles.load({ id: 'tsparticles', options: config });
  }

  reloadParticles(light: boolean){
    if(light){
      this.particleConfigs = [config1Light, config2Light];
    }
    else{
      this.particleConfigs = [config2Dark, config1Dark];
    }
    this.loadParticles();
  }

  async loadParticles(): Promise<void> {
    const currentConfig = this.particleConfigs[this.currentConfigIndex];
    await this.initParticles(currentConfig);
    this.currentConfigIndex = (this.currentConfigIndex + 1) % this.particleConfigs.length;
 }
}
