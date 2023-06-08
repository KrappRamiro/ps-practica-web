// fileReader.js

function readHTMLFile(filePath, sectionId) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch file: ${response.status} ${response.statusText}`
        );
      }
      return response.text();
    })
    .then((fileContent) => {
      const section = document.getElementById(sectionId);
      section.innerHTML = fileContent;
    })
    .catch((error) => {
      console.error(`Error reading ${filePath}:`, error);
    });
}
