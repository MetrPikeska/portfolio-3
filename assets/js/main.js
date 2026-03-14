document.addEventListener('DOMContentLoaded', function () {
  // Hero typing animation
  new Typed('.typing', {
    strings: ['Web GIS Developer', 'Spatial Data Engineer', 'Computer Vision', 'PostGIS & Remote Sensing'],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
  });

  // ScrollSpy via IntersectionObserver — highlights active nav link
  const navLinks = document.querySelectorAll('.side-nav a[href^="#"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );
  document.querySelectorAll('.scrollspy').forEach((s) => observer.observe(s));

  // Mobile SideNav — vanilla replacement for Materialize $.sideNav()
  const hamburger = document.querySelector('.button-collapse');
  const slideOut = document.getElementById('slide-out');
  let overlay = null;

  function openNav() {
    slideOut.style.transform = 'translateX(0)';
    overlay = document.createElement('div');
    overlay.style.cssText =
      'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:997;';
    overlay.addEventListener('click', closeNav);
    document.body.appendChild(overlay);
  }

  function closeNav() {
    slideOut.style.transform = '';
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
  }

  if (hamburger && slideOut) {
    hamburger.addEventListener('click', (e) => {
      e.preventDefault();
      openNav();
    });
    slideOut.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  }
});
