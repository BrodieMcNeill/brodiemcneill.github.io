// Smooth background glow
const body = document.body;
let hue = 0;

// Magnetic hover effect
const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.link-btn');

function animateBackground() {
  hue = (hue + 0.3) % 360;
  body.style.backgroundColor = `hsl(${hue}, 50%, 10%)`;
  requestAnimationFrame(animateBackground);
}

function magneticHover(element) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    element.style.transform = `rotateX(${-y/10}deg) rotateY(${x/10}deg) scale(1.05)`;
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
}

cards.forEach(magneticHover);
links.forEach(magneticHover);

animateBackground();
