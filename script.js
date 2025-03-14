// Mengambil elemen hamburger, menu, dan overlay
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Toggle menu saat hamburger diklik
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
});

document.querySelector(".overlay").addEventListener("click", function() {
    document.querySelector(".menu").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 50, // Muncul dari bawah
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%", // Animasi dimulai saat elemen hampir masuk viewport
            toggleActions: "play none none reset" // Reset animasi saat keluar viewport
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".portfolio-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
});

