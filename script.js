// Toggle additional content visibility
function toggleContent() {
    const extraContent = document.getElementById('extraContent');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
    } else {
        extraContent.style.display = 'none';
    }
}

// Highlight active link based on the current page
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateDots();
}

// Move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-slide'));
        showSlide(currentSlide);
    });
});

function updateDots() {
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
}

// Initialize carousel
showSlide(currentSlide);


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

let autoPlayInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000); // Change slide every 3 seconds

// Pause auto-play on mouse over and resume on mouse out
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoPlayInterval);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);
});


document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-slide'));
        showSlide(currentSlide);
        updateDots();
    });
});

function updateDots() {
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    document.querySelector(`.dot[data-slide="${currentSlide}"]`).classList.add('active');
}

// Update the dots whenever the slide changes
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    updateDots();
}

const fadeElements = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Run on page load

// Apply fade-in class to sections in HTML
document.querySelectorAll('.fade-in').forEach((element) => {
    element.classList.add('visible');
});
