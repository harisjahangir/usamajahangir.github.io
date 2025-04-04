// Projects module
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  initializeFilterButtons();
});

function loadProjects() {
  fetch('data/projects.json')
    .then(response => response.json())
    .then(projects => {
      renderProjects(projects);
    })
    .catch(error => console.error('Error loading projects:', error));
}

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-border">
        <img src="${project.image}" alt="${project.title}" class="project-img"/>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-text">${project.description}</p>
        <div class="project-buttons">
          <button class="btn btn-color-1" onclick="showProjectDetails('${project.id}')">Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function initializeFilterButtons() {
  const filterButtons = document.querySelectorAll('.project-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('onclick').match(/'([^']+)'/)[1];
      filterProjects(category);
    });
  });
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.project-btn');
  
  // Update active button
  buttons.forEach(button => {
    button.classList.toggle('active', 
      button.getAttribute('onclick').includes(`'${category}'`) || 
      (category === 'all' && button.textContent === 'All')
    );
  });

  // Filter projects
  projects.forEach(project => {
    const show = category === 'all' || project.dataset.category === category;
    project.style.display = show ? 'block' : 'none';
  });
}

function showProjectDetails(projectId) {
  // Implementation for showing project details
  console.log('Showing details for project:', projectId);
}