// ParticlesJS Configuration
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#00fffc", "#fc00ff", "#fffc00"]
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
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 1.5
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
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
          "mode": ["grab", "bubble", "repulse"]
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
      "background_color": "#1a2a6c",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover",
      "background_gradient": {
        "type": "radial",
        "colors": ["#1a2a6c", "#b21f1f", "#fdbb2d"],
        "direction": "center"
      }
    }
  }
);

// Cursor-following dot implementation
const cursorDot = document.createElement("div");
cursorDot.style.position = "fixed";
cursorDot.style.width = "10px";
cursorDot.style.height = "10px";
cursorDot.style.backgroundColor = "black";
cursorDot.style.borderRadius = "50%";
cursorDot.style.pointerEvents = "none";
cursorDot.style.zIndex = "1000";
cursorDot.style.transition = "transform 0.1s ease";
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0;

// Smooth motion effect
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Animation loop for smooth motion
function animateDot() {
  cursorDot.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
  requestAnimationFrame(animateDot);
}
animateDot();
