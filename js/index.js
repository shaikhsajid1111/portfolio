$(document).ready(function () {
  var options = ['horizontal', 'vertical'];
  $('#pagepiling').pagepiling({

    direction: screen.width < 400 ? 'vertical' : options[Math.floor(Math.random() * options.length)],
    verticalCentered: true,

    scrollingSpeed: 50,
    easing: 'swing',
    loopBottom: true,
    loopTop: true,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#fff',
      'position': 'right',
      'tooltips': ['Home', 'About','Experience', 'Skills','Projects', 'Contact']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,
  });

});

particlesJS('home', {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4.872463273808071,
        "size_min": 17.86569867062959,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 15,
      "direction": "top-left",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1042.21783956259
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 300,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 121.81158184520176,
        "size": 8.120772123013452,
        "duration": 5.114885114885115,
        "opacity": 0.42228015039669947,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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
  "retina_detect": true
}
);
