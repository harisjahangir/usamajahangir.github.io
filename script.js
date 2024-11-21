function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// event listener for CTRL + R key press
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'r') {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

function filterProjects(category) {
  const projects = document.querySelectorAll(".details-container");
  const buttons = document.querySelectorAll(".project-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.project-btn[onclick*="${category}"]`)
    .classList.add("active");

  projects.forEach((project) => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "flex"; 
    } else {
      project.style.display = "none";
    }
  });
}

window.onload = () => filterProjects("all");
