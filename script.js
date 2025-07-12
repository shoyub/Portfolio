document.addEventListener("DOMContentLoaded", () => {
  // Carousel functionality
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

  // Intersection Observer for animations
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
      ".slide, .fade-in, .fade-up, .fade-left, .fade-in-up, .scale-in, .zoom-in, .slide-down, .about"
    )
    .forEach((el) => observer.observe(el));

  // Contact form submission with Formspree
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          status.textContent = "✅ Message sent successfully!";
          status.style.color = "green";
          form.reset();
        } else {
          status.textContent = "❌ Error sending message. Please try again.";
          status.style.color = "red";
        }
      } catch (error) {
        status.textContent = "⚠️ Network error. Please try again later.";
        status.style.color = "red";
      }
    });
  }
});

// Loader animation
document.body.classList.add("loading");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("site-loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("site-loader").style.display = "none";
      document.body.classList.remove("loading");
    }, 800);
  }, 1600);
});
