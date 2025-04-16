const projects = document.querySelector('#projects-scroll');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function goToSlide(index) {
  const width = slides[0].offsetWidth;
  projects.style.transform = `translateX(-${index * width}px)`;
  currentIndex = index;
  updateDots(index);
}

function scrollProjects(direction) {
  const total = slides.length;
  currentIndex = (currentIndex + direction + total) % total;
  goToSlide(currentIndex);
}

document.querySelector('.arrow-left').addEventListener('click', () => scrollProjects(-1));
document.querySelector('.arrow-right').addEventListener('click', () => scrollProjects(1));

const sections = document.querySelectorAll('.section, .about-text');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));


ymaps.ready(init);
    
function init() {
    const map = new ymaps.Map("map", {
        center: [50.3968296, 30.4828696], // Координати маркера
        zoom: 14,
        controls: ['zoomControl']
    });

    const placemark = new ymaps.Placemark([50.3968296, 30.4828696], {
        hintContent: 'Dark Glue',
        balloonContent: 'Dark Glue'
    });

    map.geoObjects.add(placemark);
}