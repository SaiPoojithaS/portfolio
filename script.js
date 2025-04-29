// ParticlesJS configuration
particlesJS("particles-js", {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#0a0a23" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "distance": 150, "color": "#0a0a23", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 3, "out_mode": "out" }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
  });
  
  // Modal functionality
  function openModal(title, description) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Scroll To Top Button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  window.onscroll = function() {
    scrollFunction();
    animateHeaders();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Dark Mode Toggle
  const modeToggle = document.getElementById("modeToggle");
  
  modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  });
  
  // Animate Section Headers on Scroll
  function animateHeaders() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        section.classList.add('h2-visible');
      }
    });
  }
  