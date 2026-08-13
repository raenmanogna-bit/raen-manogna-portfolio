// ==========================================
// RAEN MANOGNA — PORTFOLIO INTERACTIONS
// ==========================================


// ---------- DARK / LIGHT MODE ----------

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("portfolio-theme", "dark");
    }

});


// ---------- REMEMBER THEME ----------

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");
    themeButton.textContent = "☀️";

}


// ---------- CONTACT FORM ----------

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();
    const visitorEmail = document.getElementById("email").value.trim();
    const visitorMessage = document.getElementById("message").value.trim();

    if (!visitorName || !visitorEmail || !visitorMessage) {
        alert("Please fill in all the fields.");
        return;
    }

    const subject =
        encodeURIComponent(
            "Portfolio message from " + visitorName
        );

    const body =
        encodeURIComponent(
            "Name: " + visitorName +
            "\nEmail: " + visitorEmail +
            "\n\nMessage:\n" + visitorMessage
        );

    window.location.href =
        `mailto:raenmanogna@gmail.com?subject=${subject}&body=${body}`;

});


// ---------- ACTIVE NAVIGATION ----------

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "var(--accent)";
        }

    });

});


// ---------- SMALL PAGE-LOAD EFFECT ----------

window.addEventListener("load", () => {

    document.body.classList.add("page-ready");

});