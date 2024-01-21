import { Component } from '@angular/core';
import { ParticleService } from '../../services/particle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private particleService: ParticleService) {}

  ngOnInit(): void {
     this.particleService.loadParticles().then(() => console.log('Particles initialized'));
  }
 }