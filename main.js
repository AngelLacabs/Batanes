document.addEventListener('DOMContentLoaded', function () {
  const exploreBtn = document.getElementById('exploreBtn');
  const backBtn = document.getElementById('backBtn');
  const bannerSection = document.getElementById('bannerSection');
  const mainHomeSection = document.getElementById('mainHomeSection');

  // Enhanced explore button functionality
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function () {
      // Add fade out animation to banner
      bannerSection.style.opacity = '0';
      
      setTimeout(() => {
        bannerSection.classList.add('d-none');
        mainHomeSection.classList.remove('d-none');
        // Scroll to top of main section
        window.scrollTo(0, 0);
      }, 500);
    });
  }
  
  // Enhanced back button functionality
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      // Add fade out animation to main section
      mainHomeSection.style.opacity = '0';
      
      setTimeout(() => {
        mainHomeSection.classList.add('d-none');
        bannerSection.classList.remove('d-none');
        bannerSection.style.opacity = '1';
      }, 500);
    });
  }
  
  // Add scroll indicator functionality
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
    });
  }
  
  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});