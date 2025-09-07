// Toggle mobile menu
const menuBtn = document.querySelector(".mobile-btn");
const navMenu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Toggle icon
  const icon = menuBtn.querySelector("ion-icon");
  if (navMenu.classList.contains("active")) {
    icon.setAttribute("name", "close-outline");
  } else {
    icon.setAttribute("name", "grid"); // default mobile icon in your HTML
  }
});

// Close menu when clicking nav links
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.querySelector("ion-icon").setAttribute("name", "grid");
  });
});

// Highlight active link on scroll
const sections = document.querySelectorAll("header, .section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // adjust offset for fixed navbar
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});
