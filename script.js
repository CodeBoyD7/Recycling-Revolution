// Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Chart.js Integration
const ctx = document.getElementById('recyclingChart').getContext('2d');
const recyclingChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Plastic Bottles', 'Bags', 'Wrappers', 'Containers', 'Miscellaneous'],
    datasets: [{
      label: 'Recycled Plastic (tons)',
      data: [200, 150, 100, 75, 50],git 
      backgroundColor: [
        'rgba(82, 20, 123, 0.7)',
        'rgba(99, 14, 173, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)'
      ],
      borderColor: [
        'rgba(82, 20, 123, 1)',
        'rgba(99, 14, 173, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    }
  }
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us!');
});
