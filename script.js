function toggleAccordion(id) {
    const item = document.getElementById(id);
    const isOpen = item.classList.contains('open');
    const toggleBtn = item.querySelector('.toggle');
    if (isOpen) {
        item.classList.remove('open');
        toggleBtn.textContent = '+';
    }
    else {
        item.classList.add('open');
        toggleBtn.textContent = '−';
    }
}

let currentSlide = 0;

function updateSlider() {
  const track = document.getElementById('testimonial-track');
  const slideWidth = document.querySelector('.testimonial-card').offsetWidth + 40; // card + margin
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  const total = document.querySelectorAll('.testimonial-card').length;
  currentSlide = (currentSlide + 1) % total;
  updateSlider();
}

function prevSlide() {
  const total = document.querySelectorAll('.testimonial-card').length;
  currentSlide = (currentSlide - 1 + total) % total;
  updateSlider();
}
