document.addEventListener('DOMContentLoaded', function() {
  });

  fetch('templates/footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer-container').innerHTML = html;
      });