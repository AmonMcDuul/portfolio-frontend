const config1DarkSmall = {
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
        value: "#d18888"
      },
      links: {
        color: "#635353",
        distance: 200,
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
        value: 25
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
  
  export default config1DarkSmall;
  