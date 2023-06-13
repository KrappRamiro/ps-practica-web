// Function to initialize the card slider
function initializeCardSlider() {
  console.log("Reloading cardSlider");
  // Select necessary elements
  var cardSlider = document.querySelector(".card-slider"); // Get the card slider container element
  var cardsContainer = cardSlider.querySelector(".cards"); // Get the cards container element
  var cards = cardsContainer.querySelectorAll(".card"); // Get all the individual card elements
  var cardWidth = cards[0].offsetWidth; // Calculate the width of a single card
  var currentIndex = 1; // Index of the starting card

  // Set initial position of cards container
  cardsContainer.style.transform =
    "translateX(" + -cardWidth * (currentIndex - 1) + "px)"; // Apply initial transformation to center the starting card

  // Function to slide to a specific card
  function slideToCard(index) {
    cardsContainer.style.transform =
      "translateX(" + -cardWidth * (index - 1) + "px)"; // Translate the cards container to show the desired card
  }

  // Function to slide to the next card
  function nextCard() {
    currentIndex = currentIndex + 1 > cards.length ? 1 : currentIndex + 1; // Update the index, wrapping around to the first card if necessary
    slideToCard(currentIndex); // Slide to the next card
  }

  // Function to slide to the previous card
  function prevCard() {
    currentIndex = currentIndex - 1 < 1 ? cards.length : currentIndex - 1; // Update the index, wrapping around to the last card if necessary
    slideToCard(currentIndex); // Slide to the previous card
  }

  // Initial slide to the second card
  slideToCard(currentIndex);

  // Event listeners for button clicks
  var prevButton = document.querySelector(".prev"); // Get the previous button element
  prevButton.addEventListener("click", prevCard); // Add event listener for the previous button

  var nextButton = document.querySelector(".next"); // Get the next button element
  nextButton.addEventListener("click", nextCard); // Add event listener for the next button
}

// Function to handle screen width changes
function handleScreenWidthChange() {
  initializeCardSlider(); // Reload the card slider function
}

// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", function () {
  initializeCardSlider(); // Initialize the card slider

  // Event listener for screen width changes
  window.addEventListener("resize", handleScreenWidthChange);
});
