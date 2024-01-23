import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule],

  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
    public projects: Project[] = [ 
    {
      id: "1",
      img: 'https://via.placeholder.com/150',
      title: 'Inventory management system',
      tags: 'C#, .Net Core, Blazor.',
      description: 'CRUD application to manage an inventory.',
      url: 'https://github.com/AmonMcDuul/InventoryManagementSolution'
   },
   {
    id: "2",
    img: 'https://via.placeholder.com/150',
    title: 'SignalR stress tester',
    tags: 'Python',
    description: 'Program for stress/performance testing a signalR hub using multithreading.',
    url: 'https://github.com/AmonMcDuul/SignalRStressTest'
  },
  {
    id: "3",
    img: 'https://via.placeholder.com/150',
    title: 'Email scheduler',
    tags: 'Rust',
    description: 'Backend for scheduling an email. Send a message to an emailaddress at any given date/time.',
    url: 'https://github.com/AmonMcDuul/email-scheduler'
  },
  {
    id: "4",
    img: 'https://via.placeholder.com/150',
    title: 'Instant bingo',
    tags: 'HTML5 game.',
    description: 'Generate bingo cards, the game plays itself til there is a winning card.',
    url: 'https://github.com/AmonMcDuul/InstantBingo'
  },
  {
    id: "5",
    img: 'https://via.placeholder.com/150',
    title: 'SenWGames',
    tags: 'C#, .Net Core, Angular.',
    description: 'CRUD, Websocket, SignalR, NGRX Store. Onion layered. Playable multiplayer useless box game.',
    url: 'https://github.com/AmonMcDuul/SenWGames'
  },
  {
    id: "6",
    img: 'https://via.placeholder.com/150',
    title: 'Portfolio Django',
    tags: 'Python, Django',
    description: 'Website made with Django. Contains login, manage personal projects, make a blog and messaging functionalities.',
    url: 'https://github.com/AmonMcDuul/PortfolioSiteDjango'
  },
  {
    id: "7",
    img: 'https://via.placeholder.com/150',
    title: 'Socket and Client',
    tags: 'Rust, Java',
    description: 'Implemented an custom made transfer protocol. Transfer files to the server.',
    url: 'https://github.com/AmonMcDuul/SocketClient'
  },
  {
    id: "8",
    img: 'https://via.placeholder.com/150',
    title: 'Note app',
    tags: 'React',
    description: 'Simple note app. Create, read, update and delete notes.',
    url: 'https://github.com/AmonMcDuul/notes_app_react'
  },
  {
    id: "9",
    img: 'https://via.placeholder.com/150',
    title: 'Notification (re)scheduler',
    tags: 'Python, sql',
    description: 'Query a database and email the results to recipient at a specified interval.',
    url: 'https://github.com/AmonMcDuul/NotificatieApplicatie'
  },
  {
    id: "10",
    img: 'https://via.placeholder.com/150',
    title: 'Portfolio',
    tags: 'Angular',
    description: 'This portfolio website.',
    url: 'https://github.com/AmonMcDuul/portfolio-frontend'
  },
  {
    id: "11",
    img: 'https://via.placeholder.com/150',
    title: 'Professionaly',
    tags: 'C#, .Net, Angular, Python, Sql, Docker, Metabase, Azure',
    description: 'I Work at Xfakt. We design and develop custom digital products. Our expertise guarantees robust, user-friendly and safe solutions.',
    url: 'https://xfakt.nl'
  },
  ];
  
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