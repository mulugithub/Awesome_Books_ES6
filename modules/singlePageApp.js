import {
    navLinks,
    contentSections
} from './navLinks.js';

// Add click event listeners to the navigation links
const singlePageApp = () => {navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      // Prevent the default link behavior
      event.preventDefault();
  
      // Get the ID of the clicked link
      const sectionId = event.target.getAttribute('href');
  
      // Remove the "active" class from all links and content sections
      navLinks.forEach((link) => link.classList.remove('active'));
      contentSections.forEach((section) => section.classList.add('hidden'));
  
      // Add the "active" class to the clicked link
      event.target.classList.add('active');
  
      // Show the corresponding content section
      document.querySelector(sectionId).classList.remove('hidden');
    });
  });
};

export default singlePageApp;