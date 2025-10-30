// Sticky navbar efekti
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Form gönderim bildirimi
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mesajınız başarıyla gönderildi!");
});

// Navbar kayarken opaklaştırma
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Smooth scroll
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});