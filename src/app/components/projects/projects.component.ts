import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit {
  faGithub: any;
  faGlobe: any;

  projects: Project[] = [ 
    {
      id: "1",
      img: 'https://via.placeholder.com/150',
      title: 'Inventory management system',
      tags: 'C#, .Net Core, Blazor.',
      description: 'CRUD application to manage an inventory.',
      url: 'https://github.com/AmonMcDuul/InventoryManagementSolution',
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
      url: 'https://github.com/AmonMcDuul/InstantBingo',
      url2: 'https://amonmcduul.github.io/InstantBingo/'
    },
    {
      id: "5",
      img: 'https://via.placeholder.com/150',
      title: 'SenWGames',
      tags: 'C#, .Net Core, Angular.',
      description: 'CRUD, Websocket, SignalR, NGRX Store. Onion layered. Playable multiplayer useless box game.',
      url: 'https://github.com/AmonMcDuul/SenWGames',
      url2git: 'https://github.com/Subtracting/SenWFront'
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
  
  ngOnInit() {
    this.projects = this.shuffleArray(this.projects);
    this.faGithub = faGithub;
    this.faGlobe = faGlobe;
  }

  private shuffleArray(array: Project[]): Project[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}