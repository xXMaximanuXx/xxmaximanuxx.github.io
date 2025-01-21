document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  // Menü öffnen/schließen
  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  // Dark Mode basierend auf den Systemeinstellungen
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-mode");
  }

  // Optional: Dark Mode manuell aktivieren/deaktivieren (falls gewünscht)
  // const toggleDarkMode = document.querySelector(".dark-mode-toggle");
  // toggleDarkMode.addEventListener("click", () => {
  //   document.body.classList.toggle("dark-mode");
  // });
});
