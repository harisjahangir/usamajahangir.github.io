// Main application script
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  const themeIconMobile = document.getElementById('theme-icon-mobile');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.src = './assets/moon.png';
    if (themeIconMobile) themeIconMobile.src = './assets/moon.png';
  }

  // Initialize components
  loadHeader();
  loadFooter();
});

// Theme toggle function
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const themeIconMobile = document.getElementById('theme-icon-mobile');
  
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    if (themeIcon) themeIcon.src = './assets/moon.png';
    if (themeIconMobile) themeIconMobile.src = './assets/moon.png';
    localStorage.setItem('theme', 'dark');
  } else {
    if (themeIcon) themeIcon.src = './assets/sun.png';
    if (themeIconMobile) themeIconMobile.src = './assets/sun.png';
    localStorage.setItem('theme', 'light');
  }
}

// Menu toggle function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Load header component
function loadHeader() {
  fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById('header-container');
      if (container) container.innerHTML = data;
    });
}

// Load footer component
function loadFooter() {
  fetch('templates/footer.html')
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById('footer-container');
      if (container) container.innerHTML = data;
    });
}

// Prevent default Ctrl+R behavior and scroll to top
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'r') {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Bubble animation
function createBubbles() {
  const container = document.querySelector(".bubbles-container");
  if (!container) return;

  const bubbleCount = 30;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
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

// Initialize on load
window.onload = () => {
  createBubbles();
};

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  
  // Save preference to localStorage
  const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  
  // Update ARIA labels
  updateThemeButtonLabels();
}

function updateThemeButtonLabels() {
  const isDark = document.body.classList.contains('dark-theme');
  const buttons = document.querySelectorAll('.theme-toggle-btn');
  
  buttons.forEach(button => {
    if (isDark) {
      button.setAttribute('aria-label', 'Switch to light mode');
      button.setAttribute('title', 'Switch to light mode');
    } else {
      button.setAttribute('aria-label', 'Switch to dark mode');
      button.setAttribute('title', 'Switch to dark mode');
    }
  });
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  // Set initial button labels
  updateThemeButtonLabels();
});