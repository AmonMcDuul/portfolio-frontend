import { Component, HostListener, OnInit } from '@angular/core';
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
  themeBool: boolean = false;
  smallScreen: boolean = false;
  faGear = faGear;
  faCircleHalfStroke = faCircleHalfStroke;
  
  constructor(private particleService: ParticleService, protected themeService: ThemeService) {}
  
  ngOnInit(): void {
    const storedThemeBool = localStorage.getItem('themeBool');
    this.themeBool = storedThemeBool ? JSON.parse(storedThemeBool) : false;
    if(this.themeBool){
      this.themeService.set('light');
    }
    else{
      this.themeService.set('dark');
    }
    this.checkWindowSize();  
    this.selectedItem = "home";
  }
  selectItem(item: string): void {
      this.selectedItem = item;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    console.log("resizio");
    console.log(this.smallScreen);
    this.checkWindowSize();
  }

  changeConfig(){
    this.particleService.loadParticles();
  }

  setThemeReloadParticles(){
    this.themeBool = !this.themeBool;
    localStorage.setItem('themeBool', JSON.stringify(this.themeBool));
    this.themeService.change();
    this.particleService.reloadParticles(this.themeBool, this.smallScreen);
  }

  checkWindowSize(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
    this.particleService.reloadParticles(this.themeBool, this.smallScreen);
  }
}