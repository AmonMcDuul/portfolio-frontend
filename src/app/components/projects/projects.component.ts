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
      tags: 'C#, .Net Core, Blazor',
      description: 'A comprehensive web application built using C#, .NET Core, and Blazor for efficient inventory management.',
      url: 'https://github.com/AmonMcDuul/InventoryManagementSolution',
    },
    {
      id: "2",
      img: 'https://via.placeholder.com/150',
      title: 'SignalR stress tester',
      tags: 'Python',
      description: 'A Python program designed for stress and performance testing of SignalR hubs using multithreading.',
      url: 'https://github.com/AmonMcDuul/SignalRStressTest'
    },
    {
      id: "3",
      img: 'https://via.placeholder.com/150',
      title: 'Email scheduler',
      tags: 'Rust',
      description: 'Backend made with rust. A system for scheduling emails, allowing messages to be sent at specified dates and times.',
      url: 'https://github.com/AmonMcDuul/email-scheduler'
    },
    {
      id: "4",
      img: 'https://via.placeholder.com/150',
      title: 'Instant bingo',
      tags: 'HTML5 game',
      description: 'An HTML5 game for generating an x number of bingo cards, then playing them automaticly until a winning card is achieved.',
      url: 'https://github.com/AmonMcDuul/InstantBingo',
      url2: 'https://amonmcduul.github.io/InstantBingo/'
    },
    {
      id: "5",
      img: 'https://via.placeholder.com/150',
      title: 'SenWGames',
      tags: 'C#, .Net Core, Angular',
      description: 'A webapp to play multiplayer games. Incorporates CRUD, SignalR, and NGRX. Create and joing groups, search groups location based.',
      url: 'https://github.com/AmonMcDuul/SenWGames',
      url2git: 'https://github.com/Subtracting/SenWFront'
    },
    {
      id: "6",
      img: 'https://via.placeholder.com/150',
      title: 'Project management network',
      tags: 'Python, Django',
      description: 'Used as a portfolio website, create and manage projects and showcase them. Includes functionalities such as login, blogging, and messaging.',
      url: 'https://github.com/AmonMcDuul/PortfolioSiteDjango'
    },
    {
      id: "7",
      img: 'https://via.placeholder.com/150',
      title: 'File transfer app',
      tags: 'Rust, Java',
      description: 'Implemented a custom transfer protocol using Rust and Java for efficient file transfer between server and client.',
      url: 'https://github.com/AmonMcDuul/SocketClient'
    },
    {
      id: "8",
      img: 'https://via.placeholder.com/150',
      title: 'Note app',
      tags: 'React',
      description: 'Made with React, a simple note-taking application that allows users to create, read, update, and delete notes.',
      url: 'https://github.com/AmonMcDuul/notes_app_react'
    },
    {
      id: "9",
      img: 'https://via.placeholder.com/150',
      title: 'Notification (re)scheduler',
      tags: 'Python',
      description: 'Developed in Python, this desktop application queries a database and sends email notifications at specified intervals.',
      url: 'https://github.com/AmonMcDuul/NotificatieApplicatie'
    },
    {
      id: "10",
      img: 'https://via.placeholder.com/150',
      title: 'Portfolio',
      tags: 'Angular',
      description: 'The website you are currently viewing, built using Angular.',
      url: 'https://github.com/AmonMcDuul/portfolio-frontend'
    },
    {
      id: "11",
      img: 'https://via.placeholder.com/150',
      title: 'Space trader',
      tags: 'Angular, Game',
      description: 'A trading game where you have to go to different places in the solar system and trade your way to the top.',
      url: 'https://github.com/AmonMcDuul/space-trader',
      url2: 'https://amonmcduul.github.io/space-trader/'
    },
    {
      id: "12",
      img: 'https://via.placeholder.com/150',
      title: 'Style manager CE',
      tags: 'Chrome extension',
      description: 'Chrome extension to view all styles on a webpage and see the boxes of all css elements',
      url: 'https://github.com/AmonMcDuul/style-manager-ce',
    },
    {
      id: "13",
      img: 'https://via.placeholder.com/150',
      title: 'Routes!$#',
      tags: 'Leaflet, OSRM, Angular, maps & routes',
      description: 'Routes!$# is a web application designed to plan, create, save, and manage walking and running routes.',
      url: 'https://github.com/AmonMcDuul/run-planner',
      url2: 'https://amonmcduul.github.io/run-planner'
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