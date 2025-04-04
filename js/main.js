// Main application script
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  // Initialize components
  loadHeader();
  loadFooter();
  createBubbles();
  updateThemeButtonLabels();
});

// Menu toggle function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  // Optional: Close menu when clicking on a link
  if (menu.classList.contains("open")) {
    document.querySelectorAll(".menu-links a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        icon.classList.remove("open");
      });
    });
  }
}

// Theme management
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  
  // Save preference to localStorage
  const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  
  // Update UI elements
  updateThemeButtonLabels();
}

function updateThemeButtonLabels() {
  const isDark = document.body.classList.contains('dark-theme');
  const buttons = document.querySelectorAll('.theme-toggle-btn');
  
  buttons.forEach(button => {
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

// Bubble animation
function createBubbles() {
  const container = document.querySelector(".bubbles-container");
  if (!container) return;

  const bubbleCount = 30;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    
    // Randomize bubble properties
    const size = Math.random() * 30 + 10;
    const leftPosition = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * (7 - 5) + 5;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${leftPosition}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;
    
    container.appendChild(bubble);
  }
}