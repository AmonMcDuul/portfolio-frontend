import { Injectable } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Injectable({
 providedIn: 'root'
})

export class ParticleService {
 async initParticles(config: any): Promise<void> {
    await loadSlim(tsParticles);
    await tsParticles.load({ id: 'tsparticles', options: config });
 }

 async loadParticles(): Promise<void> {
 const config = {
    // background: {
    //    color: "#333",
    //    opacity: 0.5,
    // },
    fpsLimit: 120,
    interactivity: {
       events: {
         onClick: {
           enable: true,
           mode: "push"
         },
         onHover: {
           enable: true,
           mode: "repulse"
         }
       },
       modes: {
         push: {
           quantity: 4
         },
         repulse: {
           distance: 200,
           duration: 0.4
         }
       }
    },
    fullScreen: { enable: false },
    particles: {
       color: {
         value: "#333"
       },
       links: {
         color: "#640000",
         distance: 150,
         enable: true,
         opacity: 0.5,
         width: 1
       },
       move: {
         direction: "none",
         enable: true,
         outModes: {
           default: "bounce",
         },
         random: false,
         speed: 2,
         straight: false
       },
       number: {
         density: {
           enable: true,
           area: 800
         },
         value: 80
       },
       opacity: {
         value: 0.5
       },
       shape: {
         type: "circle"
       },
       size: {
         value: {
           min: 1,
           max: 6
         }
       },

    },
    detectRetina: true
   };
   
    await this.initParticles(config);
 }
}
