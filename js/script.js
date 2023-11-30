//Open Navbar menu
function openNavmenu() {
  document.querySelector(".navbar-menu").classList.toggle("navbar-menu-active");
  document.querySelector(".toggle").classList.toggle("toggle-active");
  document.querySelector(".bi").classList.toggle("bi-brightness-high");
}
// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    var toggleIcon = document.querySelector(".toggle-icon");
    // Toggle between the two icons
    if (toggleIcon.classList.contains("bi-moon")) {
        toggleIcon.classList.remove("bi-moon");
        toggleIcon.classList.add("bi-brightness-high");
    } else {
        toggleIcon.classList.remove("bi-brightness-high");
        toggleIcon.classList.add("bi-moon");
    }
}

// var toggleThemeIcon = document.querySelector(".toggle-icon").innerHTML;
//   console.log(toggleThemeIcon);