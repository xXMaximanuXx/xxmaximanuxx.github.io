document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Dark mode toggle based on system settings
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-mode");
  }
});
