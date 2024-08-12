particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 900, // Increased particle count
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#00fffc", "#fc00ff", "#fffc00"] // Randomized particle colors
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true, // Random opacity for variation
        "anim": {
          "enable": true, // Enable opacity animation
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true, // Enable size animation
          "speed": 10,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120, // Decreased distance for tighter connections
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 1.5
      },
      "move": {
        "enable": true,
        "speed": 4, // Slightly slower movement for a smoother effect
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true, // Enable attraction effect
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": ["grab", "bubble", "repulse"] // Enable multiple modes on hover
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 300,
          "size": 8,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 150,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#1a2a6c", // Gradient start color
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover",
      "background_gradient": {
        "type": "radial", // Radial gradient effect
        "colors": ["#1a2a6c", "#b21f1f", "#fdbb2d"], // Gradient colors
        "direction": "center" // Gradient direction
      }
    }
  }

);
