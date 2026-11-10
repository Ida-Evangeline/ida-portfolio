
// Generate glowing stars
const stars = document.getElementById("stars");

for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  stars.appendChild(star);
}

// Reveal sections while scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// Subtle 3D mouse movement
const visual = document.querySelector(".hero-visual");

if (visual && window.matchMedia("(pointer: fine)").matches) {
  visual.addEventListener("mousemove", (event) => {
    const rect = visual.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    visual.style.transform =
      `rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
  });

  visual.addEventListener("mouseleave", () => {
    visual.style.transform = "rotateY(0) rotateX(0)";
  });
}
