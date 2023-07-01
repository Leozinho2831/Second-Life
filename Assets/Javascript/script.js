const changeThemeBtn = document.querySelector("#chk");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("light");
}
function loadTheme() {
  const darkMode = localStorage.getItem("light");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();
  
  localStorage.removeItem("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("light", 1);
  }
});