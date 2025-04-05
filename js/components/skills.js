// Skill category toggle functionality
document.querySelectorAll('.skill-category-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and skill groups
      document.querySelectorAll('.skill-category-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.skill-group').forEach(group => group.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show corresponding skill group
      const category = button.getAttribute('data-category');
      document.getElementById(`${category}-skills`).classList.add('active');
    });
  });