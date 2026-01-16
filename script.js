/* =========================
   Smooth Scroll for Nav
========================= */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault(); // only block internal page jump
            document.querySelector(href).scrollIntoView({ behavior: "smooth" });
        }
        // external links work normally
    });
});


/* =========================
   Highlight Active Section
========================= */
window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* =========================
   Header Shadow on Scroll
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

/* =========================
   Button Click Example
========================= */
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});
