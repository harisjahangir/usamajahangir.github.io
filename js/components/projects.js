function filterProjects(category) {
  // Update active button states (unchanged)
  const buttons = document.querySelectorAll('.project-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(category) || 
        (category === 'all' && btn.textContent.toLowerCase().includes('all'))) {
      btn.classList.add('active');
    }
  });
  
  // Filter projects with multi-category support
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    const projectCategories = project.dataset.category.split(' '); // Split into array
    
    // Check if project matches category (or 'all')
    const shouldShow = category === 'all' || projectCategories.includes(category);
    
    // Animation logic (unchanged)
    if (shouldShow) {
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