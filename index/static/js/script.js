const slidesData = [
  {
    image: 'https://static.tildacdn.one/tild3333-3235-4939-b336-663364616663/___4.png',
    text: 'ПРОФЕСІЙНА СТАЙЛІНГ СТУДІЯ'
  },
  {
    image: 'https://static.tildacdn.one/tild6463-3537-4431-b062-346339366536/49ec4ff4-ec3b-47aa-9.jpg',
    text: 'ЧИП-ТЮНІНГ І ДЕТЕЙЛІНГ'
  },
  {
    image: 'https://static.tildacdn.one/tild3836-3366-4439-b530-346230353630/71da4f1a-0687-4e27-a.jpg',
    text: 'ОБКЛЕЮВАННЯ АВТО ПЛІВКОЮ'
  }
];

let currentIndex = 0;
const projects = document.getElementById('projects-scroll');

const oldSlides = projects.querySelectorAll('.slide');
oldSlides.forEach(slide => slide.remove());

let overlay = projects.querySelector('.overlay');
let slideText = projects.querySelector('.slide-text');

if (!overlay) {
  overlay = document.createElement('div');
  overlay.classList.add('overlay');
  projects.appendChild(overlay);
}

if (!slideText) {
  slideText = document.createElement('div');
  slideText.classList.add('slide-text');
  projects.appendChild(slideText);
}

function showSlide(index) {
  const slide = slidesData[index];
  updateDots();

  projects.style.backgroundImage = `url('${slide.image}')`;

  slideText.classList.remove('visible');
  setTimeout(() => {
    slideText.textContent = slide.text;
    slideText.classList.add('visible');
  }, 100);
}

const dotsContainer = document.getElementById('dots');

slidesData.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    updateDots();
  });
  dotsContainer.appendChild(dot);
});

function updateDots() {
  const allDots = dotsContainer.querySelectorAll('.dot');
  allDots.forEach(dot => dot.classList.remove('active'));
  allDots[currentIndex].classList.add('active');
}


document.querySelector('.arrow-left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  showSlide(currentIndex);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slidesData.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);


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
    center: [50.3968296, 30.4828696],
    zoom: 14,
    controls: ['zoomControl']
  });

  const placemark = new ymaps.Placemark([50.3968296, 30.4828696], {
    hintContent: 'Dark Glue',
    balloonContent: 'Dark Glue'
  });

  map.geoObjects.add(placemark);
}
