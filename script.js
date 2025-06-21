document.addEventListener("DOMContentLoaded", () => {
  // For all carousels on the page
  document.querySelectorAll(".carousel-container").forEach((carousel) => {
    const cards = carousel.querySelectorAll(".carousel-card");
    const leftBtn = carousel.querySelector(".carousel-arrow.left");
    const rightBtn = carousel.querySelector(".carousel-arrow.right");
    let current = 0;

    function showCard(idx, direction = 0) {
      cards.forEach((card, i) => {
        card.classList.remove("active", "to-left", "to-right");
        if (i === idx) {
          card.classList.add("active");
        } else if (
          i ===
          (direction === -1
            ? (idx + 1) % cards.length
            : (idx - 1 + cards.length) % cards.length)
        ) {
          card.classList.add(direction === -1 ? "to-right" : "to-left");
        }
      });
    }

    leftBtn.addEventListener("click", () => {
      current = (current - 1 + cards.length) % cards.length;
      showCard(current, -1);
    });

    rightBtn.addEventListener("click", () => {
      current = (current + 1) % cards.length;
      showCard(current, 1);
    });

    showCard(current);
  });

  // Intersection Observer for fade-in slides
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        } else {
          entry.target.classList.remove("appear");
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(
      ".slide, .fade-in, .fade-up, .fade-left, .fade-in-up, .scale-in, .zoom-in, .slide-down, .about"
    )
    .forEach((el) => observer.observe(el));
});

// Opening animation: fade out loader after 1.6s
document.body.classList.add("loading");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("site-loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("site-loader").style.display = "none";
      document.body.classList.remove("loading");
    }, 800); // match transition
  }, 1600); // loader visible for 1.6s
});

// Opening animation: fade out loader after 1.6s
document.body.classList.add("loading");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("site-loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("site-loader").style.display = "none";
      document.body.classList.remove("loading");
    }, 800); // match transition
  }, 1600); // loader visible for 1.6s
});

// Existing Intersection Observer code...
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(
      ".fade-in, .fade-up, .fade-left, .fade-in-up, .scale-in, .zoom-in, .slide-down, .about"
    )
    .forEach((el) => observer.observe(el));
});
