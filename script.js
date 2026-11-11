(() => {
  "use strict";

  const menuToggle = document.querySelector("#menuToggle");
  const navMenu = document.querySelector("#navMenu");

  if (menuToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
      navMenu.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  // Rastro discreto de setas que acompanha o ponteiro em desktops.
  // O efeito é omitido em telas touch e para quem prefere movimento reduzido.
  const canUsePointerTrail = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
  ).matches;

  if (canUsePointerTrail) {
    let lastX = 0;
    let lastY = 0;
    let lastSpawn = 0;

    document.addEventListener("pointermove", (event) => {
      const now = performance.now();
      const deltaX = event.clientX - lastX;
      const deltaY = event.clientY - lastY;
      const distance = Math.hypot(deltaX, deltaY);

      // Evita criar elementos em excesso quando o mouse se move muito rápido.
      if (distance < 34 || now - lastSpawn < 38) return;

      const arrow = document.createElement("span");
      arrow.className = "pointer-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "➤";
      arrow.style.left = `${event.clientX}px`;
      arrow.style.top = `${event.clientY}px`;
      arrow.style.setProperty("--arrow-angle", `${Math.atan2(deltaY, deltaX) * (180 / Math.PI)}deg`);
      document.body.appendChild(arrow);
      arrow.addEventListener("animationend", () => arrow.remove(), { once: true });

      lastX = event.clientX;
      lastY = event.clientY;
      lastSpawn = now;
    }, { passive: true });

    document.addEventListener("pointerleave", () => {
      document.querySelectorAll(".pointer-arrow").forEach((arrow) => arrow.remove());
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

    revealItems.forEach((item) => revealObserver.observe(item));
  }
})();
