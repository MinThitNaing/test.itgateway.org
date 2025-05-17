const menuButton = document.querySelectorAll(".menu-button");
const ScreenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");
const loginButton = document.querySelector(".login-button");

// Initialize dark mode based on local storage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("uil-moon", "uil-sun");
} else {
    themeButton.classList.replace("uil-sun", "uil-moon");
}

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light-mode");
    localStorage.setItem("lightMode", isLightMode ? "enabled" : "disabled");
    themeButton.classList.toggle("uil-moon", isLightMode);
    themeButton.classList.toggle("uil-sun", !isLightMode);
});

// Toggle sidebar visibility when menu buttons are clicked
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

// Toggle sidebar visibility when screen overlay is clicked
ScreenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden")
})

// Show Side Bar on Large Screen by Default
if(window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden")
}
