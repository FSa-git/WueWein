// JavaScript für den Slider mit Pfeilen

// Elemente auswählen
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

// Anfangswerte festlegen
let currentIndex = 0;

// Funktion zum Anzeigen des aktuellen Slides
function showSlide(index) {
  // Überprüfen, ob der angegebene Index im gültigen Bereich liegt
  if (index >= 0 && index < slides.length) {
    // Alle Slides ausblenden
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    // Aktuellen Slide anzeigen
    slides[index].style.display = 'block';
    currentIndex = index;
  }
}

// Funktion zum Wechseln zur vorherigen Slide
function prevSlide() {
  const newIndex = currentIndex - 1;
  showSlide(newIndex);
}

// Funktion zum Wechseln zur nächsten Slide
function nextSlide() {
  const newIndex = currentIndex + 1;
  showSlide(newIndex);
}

// Vorherigen-Button und nächsten-Button mit den entsprechenden Funktionen verknüpfen
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Anfangs den ersten Slide anzeigen
showSlide(0);
