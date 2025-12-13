/* ========= SELECTORS ========= */
const navLinksBtns = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".gallery-card");

const darkToggle = document.getElementById("dark-toggle");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

/* ========= TABS GALERI ========= */
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.dataset.target;

        cards.forEach(card => {
            card.classList.toggle("hide", !card.classList.contains(target));
        });
    });
});

/* ========= SMOOTH SCROLL ========= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;

        e.preventDefault();

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });

        navLinks.classList.remove("active");
    });
});

/* ========= NAV ACTIVE ========= */
navLinksBtns.forEach(link => {
    link.addEventListener("click", () => {
        navLinksBtns.forEach(n => n.classList.remove("active"));
        link.classList.add("active");
    });
});

/* ========= SCROLL SPY ========= */
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (pageYOffset >= top && pageYOffset < top + height) {
            current = section.id;
        }
    });

    navLinksBtns.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});

/* ========= DARK MODE ========= */
darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = darkToggle.querySelector("i");
    icon.classList.toggle("bx-moon");
    icon.classList.toggle("bx-sun");
});

/* ========= HAMBURGER ========= */
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
