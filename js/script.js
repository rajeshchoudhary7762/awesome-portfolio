//Open Navbar menu
function openNavmenu() {
  document.querySelector(".navbar-menu").classList.toggle("navbar-menu-active");
  document.querySelector(".toggle").classList.toggle("toggle-active");
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    //Set Current Theme On Local Stroge
    const currentTheme = body.className;
    localStorage.setItem('current-theme', currentTheme);
    
}

//set theme function
function setTheme() {
    const currentTheme = localStorage.getItem("current-theme");

    if (currentTheme !== null) {
        let body = document.body;

        if(currentTheme !== "light-mode") {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeToggleIcon();
        }
    }
}
setTheme();

//change theme toggle icon
function themeToggleIcon() {
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
