import { Injectable } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import config1 from '../particle-configs/config1';
import config2 from '../particle-configs/config2';

@Injectable({
 providedIn: 'root'
})

export class ParticleService {
  private particleConfigs: any[] = [config2, config1];
  private currentConfigIndex = 0;

  async initParticles(config: any): Promise<void> {
      await loadSlim(tsParticles);
      await tsParticles.load({ id: 'tsparticles', options: config });
  }

  async loadParticles(): Promise<void> {
    const currentConfig = this.particleConfigs[this.currentConfigIndex];
    await this.initParticles(currentConfig);
    this.currentConfigIndex = (this.currentConfigIndex + 1) % this.particleConfigs.length;
 }
}
