// Function to apply uppercase transformation to options of select elements
function applyUppercase(selectElement) {
  try {
    let options = selectElement.options;

    for (let i = 0; i < options.length; i++) {
      let option = options[i];

      // Uncomment if wanted, remember to comment the toUpperCase() below
      // Skip applying uppercase if the option is disabled
      // if (!option.disabled) {
      //   option.textContent = option.textContent.toUpperCase();
      // }
      option.textContent = option.textContent.toUpperCase();
    }
  } catch (error) {
    // Log any errors that occur during the process
    console.error("An error occurred while applying uppercase:", error);
  }
}

// Execute the applyUppercase function for each select element with the class 'uppercase-options-on-load' when the page finishes loading
window.addEventListener("load", function () {
  // Retrieve all select elements with the class 'uppercase-options-on-load'
  let selectElements = document.getElementsByClassName(
    "uppercase-options-on-load"
  );

  // Loop through each select element and apply the uppercase transformation
  for (let i = 0; i < selectElements.length; i++) {
    let selectElement = selectElements[i];
    applyUppercase(selectElement);
  }
});
