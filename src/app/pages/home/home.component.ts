import { Component, OnInit } from '@angular/core';
import { ParticleService } from '../../services/particle.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';
import { InfoComponent } from '../../components/info/info.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent, InfoComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  selectedItem: string | null = null;

  constructor(private particleService: ParticleService) {}
  
  ngOnInit(): void {
    this.selectedItem = "home";
    this.particleService.loadParticles();
  }
  selectItem(item: string): void {
      this.selectedItem = item;
  }

  changeConfig(){
    this.particleService.loadParticles();
  }
}