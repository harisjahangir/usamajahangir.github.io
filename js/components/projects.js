
function filterProjects(category) {
  const buttons = document.querySelectorAll('.project-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category) || 
        (category === 'all' && btn.textContent.toLowerCase().includes('all'))) {
      btn.classList.add('active');
    }
  });
  
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.opacity = '0';
      project.style.transform = 'translateY(20px)';
      setTimeout(() => {
        project.style.display = 'block';
        setTimeout(() => {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, 50);
      }, 100);
    } else {
      project.style.opacity = '0';
      project.style.transform = 'translateY(20px)';
      setTimeout(() => {
        project.style.display = 'none';
      }, 300);
    }
  });
}