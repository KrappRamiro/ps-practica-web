/**
 * Generates and replaces elements for placeholders with class "infoline-placeholder".
 */
// Get all elements with the class "infoline-placeholder"
const placeholders = document.querySelectorAll(".infoline-placeholder");

// Iterate over each placeholder element
placeholders.forEach((placeholder) => {
  // Create a document fragment to hold the generated elements
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 10; i++) {
    // Create a new div element with the class "modal-promocion__info-line"
    const div = document.createElement("div");
    div.classList.add("modal-promocion__infoline");

    // Create the span element for the tooltip
    const tooltipSpan = document.createElement("span");
    tooltipSpan.classList.add("tooltip");

    // Create the icon element inside the tooltip span
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-circle-info", "mr-5");
    icon.style.color = "#8d9096";
    tooltipSpan.appendChild(icon);

    // Create the tooltip text span inside the tooltip span
    const tooltipTextSpan = document.createElement("span");
    tooltipTextSpan.classList.add("tooltip-text", "tooltip-text--top");
    tooltipTextSpan.textContent = "Aca iría info";
    tooltipSpan.appendChild(tooltipTextSpan);

    // Create the span element for the text
    const textSpan = document.createElement("span");
    textSpan.textContent = "Robo Hurto/lncendio Total";

    // Append the tooltip span and text span to the div
    div.appendChild(tooltipSpan);
    div.appendChild(textSpan);

    // Append the generated div element to the document fragment
    fragment.appendChild(div);
  }

  // Replace the placeholder element with the generated elements
  placeholder.parentNode.replaceChild(fragment, placeholder);
});
