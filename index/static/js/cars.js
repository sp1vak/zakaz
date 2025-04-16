const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

const moveToSlide = (index) => {
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
};

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  moveToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  moveToSlide(currentIndex);
});

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', (e) => {
    currentIndex = parseInt(e.target.dataset.index, 10);
    moveToSlide(currentIndex);
  });
});