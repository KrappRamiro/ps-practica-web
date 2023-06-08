// Get the parent element
const progress = document.querySelector(".steps__progress");

// Get all the steps__step elements
const steps = progress.querySelectorAll(".steps__step");

const numberOfDots = 8;

// Loop through each step element except the last one
for (let i = 0; i < steps.length - 1; i++) {
  // Create the separator element
  let separator = document.createElement("div");
  separator.classList.add("steps__separator");

  // Create and insert the dot elements inside the separator
  for (let j = 0; j < numberOfDots; j++) {
    let dot = document.createElement("div");
    dot.classList.add("steps__dot");
    separator.appendChild(dot);
  }

  // Insert the separator element after the current step element
  steps[i].parentNode.insertBefore(separator, steps[i].nextSibling);
}
