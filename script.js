// ======================
// Custom JavaScript
// ======================

// ======================
// Theme Toggle (Navbar + Sidebar)
// ======================
const body = document.body;

// Navbar toggle (if exists)
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");



// Utility function to apply theme
function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");

    if (themeIcon) themeIcon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
    if (themeIconSidebar) themeIconSidebar.classList.replace("bi-sun-fill", "bi-moon-stars-fill");

    if (themeToggle) themeToggle.checked = true;
    if (themeToggleSidebar) themeToggleSidebar.checked = true;
  } else {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");

    if (themeIcon) themeIcon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
    if (themeToggle) themeToggle.checked = false;
  }
}

// Load saved theme
applyTheme(localStorage.getItem("theme") || "light");

// Event listeners
if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    applyTheme(themeToggle.checked ? "dark" : "light");
  });
}

// ======================
// Footer Year auto update
// ======================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ======================
// Contact Form Validation (basic)
// ======================
const form = document.querySelector("#contact form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      form.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
}
