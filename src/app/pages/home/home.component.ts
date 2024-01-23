import { Component, OnInit } from '@angular/core';
import { ParticleService } from '../../services/particle.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';
import { InfoComponent } from '../../components/info/info.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ThemeService } from '../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent, InfoComponent, ProjectsComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  selectedItem: string | null = null;
  themes: any;
  themeBool: boolean = true;
  faGear = faGear;
  faCircleHalfStroke = faCircleHalfStroke;
  
  constructor(private particleService: ParticleService, protected themeService: ThemeService) {}
  
  ngOnInit(): void {
    this.themeService.set('light');
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