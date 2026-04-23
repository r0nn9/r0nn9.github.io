// Wait until the page fully loads before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Select all collapsible sections on the page
  const sections = document.querySelectorAll(".collapsible");

  // Loop through each section
  sections.forEach(section => {

    // Get the button inside the section
    const button = section.querySelector(".toggle");

    // Add a click event to the button
    button.addEventListener("click", () => {

      // Toggle the "active" class to show/hide content
      section.classList.toggle("active");

      // Change button text from + to - when opened, and back when closed
      if (section.classList.contains("active")) {
        button.textContent = button.textContent.replace("+", "-");
      } else {
        button.textContent = button.textContent.replace("-", "+");
      }

    });

  });

});