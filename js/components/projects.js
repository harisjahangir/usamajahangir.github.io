// Load projects data and render projects
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
      .then(response => response.json())
      .then(projects => {
        const container = document.getElementById('projects-container');
        projects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';
          projectCard.dataset.category = project.category;
          projectCard.innerHTML = `
            <div class="project-border">
              <img src="${project.image}" alt="${project.title}" class="project-img"/>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-text">${project.description}</p>
            </div>
          `;
          projectCard.onclick = () => showProjectDetails(project.id);
          container.appendChild(projectCard);
        });
      });
  });
  
  function showProjectDetails(projectId) {
    // Load and display project details
  }