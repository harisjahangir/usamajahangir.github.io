function loadHeader() {
  fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById('header-container');
      if (container) {
        container.innerHTML = data;
        // Initialize active link highlighting
        setActiveLink();
      }
    });
}

function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a, .menu-links a');
  
  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Add to your existing dark theme toggle function
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  // Update theme icon
  updateThemeIcon();
  // Save preference
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

function updateThemeIcon() {
  const isDark = document.body.classList.contains('dark-theme');
  const icons = document.querySelectorAll('.theme-icon');
  
  icons.forEach(icon => {
    icon.src = isDark ? './assets/icons/moon.png' : './assets/icons/sun.png';
  });
}