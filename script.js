document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    // Save the theme preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        this.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        this.textContent = "🌙 Dark Mode";
    }
});

// Load the saved theme
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle").textContent = "☀️ Light Mode";
    }
};
