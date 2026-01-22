// Hue-shifting overlay
const overlay = document.getElementById('color-overlay');
let hue = 0;

function animateBackground() {
  hue = (hue + 0.2) % 360; // slow cinematic glow
  overlay.style.backgroundColor = `hsla(${hue}, 50%, 10%, 0.3)`; // semi-transparent
  requestAnimationFrame(animateBackground);
}
animateBackground();

// Magnetic hover effect
const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.link-btn');

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

// Easter Egg: show secret 🔥 if 'B' is pressed
const secret = document.getElementById('secret');
document.addEventListener('keydown', (e) => {
  if(e.key.toLowerCase() === 'b'){
    secret.style.display = secret.style.display === 'none' ? 'block' : 'none';
  }
});
