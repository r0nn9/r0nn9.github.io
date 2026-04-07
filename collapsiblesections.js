document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".collapsible");

  sections.forEach(section => {
    const button = section.querySelector(".toggle");

    button.addEventListener("click", () => {
      section.classList.toggle("active");

      // Toggle + / -
      if (section.classList.contains("active")) {
        button.textContent = button.textContent.replace("+", "-");
      } else {
        button.textContent = button.textContent.replace("-", "+");
      }
    });
  });
});