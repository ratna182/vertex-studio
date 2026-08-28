// Vertex Studio Service Content Details
const servicesData = {
  services: {
    title: "4 Layanan Utama VERTEX STUDIO",
    body: `
      <p>VERTEX STUDIO menyediakan 4 layanan visual dan digital untuk memperkuat cara bisnis Anda dilihat:</p>
      <ul>
        <li><strong>01. Design 3D & Render Booth/Interior:</strong> Render produk photorealistic, interior, eksterior, hingga booth pameran.</li>
        <li><strong>02. Design Landing Page FULL SEO:</strong> Halaman promosi tunggal berkonversi tinggi, terintegrasi WhatsApp, dioptimalkan untuk SEO.</li>
        <li><strong>03. Design Web Portofolio FULL SEO:</strong> Website portofolio profesional multi-halaman, cepat, responsif, dan dioptimalkan untuk SEO.</li>
        <li><strong>04. Design Grafis:</strong> Logo vector, identitas brand, packaging produk, hingga media promosi yang konsisten.</li>
      </ul>
    `,
    waText:
      "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20layanan%20kalian.",
  },
  service1: {
    title: "01. Design 3D & Render Booth/Interior",
    body: `
      <p>Render produk photorealistic, interior, eksterior, hingga booth pameran dengan visualisasi yang menakjubkan.</p>
      <ul>
        <li>Desain 3D interior dan eksterior</li>
        <li>Render booth pameran</li>
        <li>Visualisasi arsitektur</li>
        <li>Render produk</li>
        <li>Photorealistic visualization</li>
      </ul>
    `,
    waText:
      "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Design%203D%20%26%20Render%20Booth%2FInterior.",
  },
  service2: {
    title: "02. Design Landing Page FULL SEO",
    body: `
      <p>Halaman promosi tunggal berkonversi tinggi, terintegrasi WhatsApp, dioptimalkan untuk SEO.</p>
      <ul>
        <li>Desain responsif</li>
        <li>Optimasi SEO</li>
        <li>Integrasi WhatsApp</li>
        <li>Halaman promosi berkonversi</li>
        <li>Struktur konten siap indeks</li>
      </ul>
    `,
    waText:
      "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Design%20Landing%20Page%20FULL%20SEO.",
  },
  service3: {
    title: "03. Design Web Portofolio FULL SEO",
    body: `
      <p>Website portofolio profesional multi-halaman, cepat, responsif, dan dioptimalkan untuk SEO.</p>
      <ul>
        <li>Desain portofolio kustom</li>
        <li>Optimasi SEO lanjutan</li>
        <li>Struktur multi-halaman</li>
        <li>Kinerja cepat</li>
        <li>Responsif di semua perangkat</li>
      </ul>
    `,
    waText:
      "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Design%20Web%20Portofolio%20FULL%20SEO.",
  },
  service4: {
    title: "04. Design Grafis",
    body: `
      <p>Logo vector, identitas brand, packaging produk, hingga media promosi yang konsisten.</p>
      <ul>
        <li>Desain logo vector</li>
        <li>Identitas brand</li>
        <li>Packaging produk</li>
        <li>Media promosi</li>
        <li>Sistem brand yang konsisten</li>
      </ul>
    `,
    waText:
      "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Design%20Grafis.",
  },
};

let lastFocused = null;

// Open Modal Dialog
function openModal(type) {
  const modal = document.getElementById("infoModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");
  const waBtn = document.getElementById("modalWaBtn");

  const data = servicesData[type] || servicesData.services;

  title.innerText = data.title;
  body.innerHTML = data.body;
  waBtn.href = `https://wa.me/6287889527901?text=${data.waText}`;

  lastFocused = document.activeElement;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  document.getElementById("modalWaBtn").focus();
}

function closeModal(event) {
  if (event.target.id === "infoModal") {
    closeModalDirect();
  }
}

function closeModalDirect() {
  const modal = document.getElementById("infoModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
  if (lastFocused && typeof lastFocused.focus === "function") {
    lastFocused.focus();
  }
}

// Keyboard access: Enter/Space on a service row opens its modal
document.querySelectorAll(".service-row").forEach((box) => {
  box.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      box.click();
    }
  });
});

// Newsletter Form Submission
function handleSubscribe(event) {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const toast = document.getElementById("toastMsg");

  if (emailInput.value) {
    if (typeof window.trackEvent === "function") {
      window.trackEvent("newsletter_submit", { form_id: "subscribeForm" });
    }
    toast.innerText = `Terima kasih! Email (${emailInput.value}) telah terdaftar. Tim kami akan segera menghubungi Anda.`;
    toast.classList.add("show");
    emailInput.value = "";

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }
}

// ============================================================
// ANIMATION & INTERACTION LAYER (transform + opacity only)
// ============================================================
(function () {
  "use strict";

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  /* ---- Reveal on scroll + staggered entrances ---- */
  const revealEls = document.querySelectorAll(".reveal");

  function activateAll() {
    revealEls.forEach((el) => el.classList.add("active"));
  }

  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const group = el.closest("[data-stagger]");
            if (group) {
              const items = group.querySelectorAll(".reveal");
              const index = Array.prototype.indexOf.call(items, el);
              el.style.transitionDelay = `${Math.min(index * 60, 360)}ms`;
            }
            el.classList.add("active");
            // release GPU layer after the entrance completes
            setTimeout(() => {
              el.style.willChange = "auto";
            }, 700);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    activateAll();
  }

  /* ---- Keyboard ESC closes modal ---- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModalDirect();
    }
  });
})();
