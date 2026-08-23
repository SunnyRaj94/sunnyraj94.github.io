/**
 * Main JavaScript File for Sunny Raj Portfolio
 * Configurable Resume PDF path, Smooth ScrollSpy, Mobile Navigation & Theme Switcher
 */

// ==========================================
// 1. CONFIGURATION (Easy PDF Resume Update)
// ==========================================
const CONFIG = {
  // Update this filename whenever you upload a new PDF resume to the root folder
  RESUME_PDF_PATH: 'SunnyRaj_MLE_DS_6+YOE.pdf'
};

document.addEventListener('DOMContentLoaded', () => {
  // Bind Resume PDF buttons
  bindResumeLinks();
  
  // Initialize Smooth Scroll & Active Nav Spy
  initScrollSpy();
  
  // Mobile Nav Toggle
  initMobileNav();
  
  // Theme Switcher Setup (Dark/Light mode)
  initThemeSwitcher();
});

/**
 * Automatically binds all resume download buttons/links to the CONFIG path
 */
function bindResumeLinks() {
  const resumeTargets = document.querySelectorAll('.js-resume-link');
  resumeTargets.forEach(link => {
    link.href = CONFIG.RESUME_PDF_PATH;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

/**
 * Highlights active navbar links when scrolling through sections
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
}

/**
 * Handles mobile hamburger menu toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/**
 * Theme switcher supporting light and dark mode with localStorage persistence
 */
function initThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlEl.classList.toggle('dark', savedTheme === 'dark');
  } else {
    // Default to dark theme for modern tech look
    htmlEl.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = htmlEl.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}
