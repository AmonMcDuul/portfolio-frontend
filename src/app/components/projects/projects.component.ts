import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects: Project[] = [ 
  {
    id: "1",
    img: 'https://via.placeholder.com/150',
    title: 'Project 1',
    description: 'This is a description of project 1.',
    url: 'https://github.com/username/project1'
 },
 {
    id: "2",
    img: 'https://via.placeholder.com/150',
    title: 'Project 2',
    description: 'This is a description of project 2.',
    url: 'https://github.com/username/project2'
 },
 {
    id: "3",
    img: 'https://via.placeholder.com/150',
    title: 'Project 3',
    description: 'This is a description of project 3.',
    url: 'https://github.com/username/project3'
 },];

 carouselOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 400,
  nav: true,
  navText: ['<', '>'],
  center: false,
  startPosition: 0,
  items: 2.3,
  };
}