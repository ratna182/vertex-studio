// VERTEX STUDIO — Avant-Garde Avant-Art Interactive Engine

let selectedServicePrice = 500000;
let selectedServiceName = "Desain Grafis & Branding";
let currentWhatsAppNumber = "6287889527901";

// Animate Price Count-Up
function animateValue(element, start, end, duration) {
  if (!element) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.innerText = "Rp " + current.toLocaleString('id-ID');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function calculateTotal() {
  const selectedRadio = document.querySelector('input[name="service_type"]:checked');
  if (selectedRadio) {
    selectedServicePrice = parseInt(selectedRadio.value);
    const radioCard = selectedRadio.closest('.radio-card');
    
    document.querySelectorAll('.radio-card').forEach(card => card.classList.remove('active'));
    if (radioCard) radioCard.classList.add('active');

    const titleEl = radioCard ? radioCard.querySelector('.title') : null;
    if (titleEl) selectedServiceName = titleEl.innerText;
  }

  let addonsTotal = 0;
  let addonNames = [];

  const seoAddon = document.getElementById('addon_seo');
  const domainAddon = document.getElementById('addon_domain');
  const expressAddon = document.getElementById('addon_express');

  if (seoAddon && seoAddon.checked) {
    addonsTotal += parseInt(seoAddon.value);
    addonNames.push("Optimasi SEO Google");
  }

  if (domainAddon && domainAddon.checked) {
    addonsTotal += parseInt(domainAddon.value);
    addonNames.push("Domain .COM Kustom");
  }

  if (expressAddon && expressAddon.checked) {
    addonsTotal += parseInt(expressAddon.value);
    addonNames.push("Priority Delivery 24 Jam");
  }

  const grandTotal = selectedServicePrice + addonsTotal;

  const mainNameEl = document.getElementById('summary-main-name');
  const addonsEl = document.getElementById('summary-addons');
  const totalPriceEl = document.getElementById('total-price-display');

  if (mainNameEl) mainNameEl.innerText = selectedServiceName;
  if (addonsEl) addonsEl.innerText = addonNames.length > 0 ? addonNames.join(", ") : "Tanpa Add-on";

  let oldPrice = 500000;
  if (totalPriceEl && totalPriceEl.innerText) {
    const rawNum = totalPriceEl.innerText.replace(/[^0-9]/g, '');
    if (rawNum) oldPrice = parseInt(rawNum);
  }

  animateValue(totalPriceEl, oldPrice, grandTotal, 400);
}

function orderViaWhatsApp() {
  const selectedRadio = document.querySelector('input[name="service_type"]:checked');
  let serviceName = "Desain Grafis & Branding";
  if (selectedRadio) {
    const titleEl = selectedRadio.closest('.radio-card').querySelector('.title');
    if (titleEl) serviceName = titleEl.innerText;
  }

  let addonNames = [];
  const seoAddon = document.getElementById('addon_seo');
  const domainAddon = document.getElementById('addon_domain');
  const expressAddon = document.getElementById('addon_express');

  if (seoAddon && seoAddon.checked) addonNames.push("Optimasi SEO Google (+500rb)");
  if (domainAddon && domainAddon.checked) addonNames.push("Domain .COM (+200rb)");
  if (expressAddon && expressAddon.checked) addonNames.push("Priority Delivery 24 Jam (+300rb)");

  const totalPriceEl = document.getElementById('total-price-display');
  const totalPriceText = totalPriceEl ? totalPriceEl.innerText : "Rp 500.000";

  const message = `Halo VERTEX STUDIO! Saya ingin berkonsultasi & memesan project berikut:

📌 *Layanan:* ${serviceName}
➕ *Add-on:* ${addonNames.length > 0 ? addonNames.join(", ") : "Tidak Ada"}
💰 *Estimasi Investasi:* ${totalPriceText}

Mohon informasi alur pengerjaan awal. Terima kasih!`;

  const waUrl = `https://wa.me/${currentWhatsAppNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// Toggle FAQ Accordion
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// Scroll Reveal Observer
function setupScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// 3D Parallax Card Tilt & Ambient Cursor Spotlight
function setup3DTiltAndSpotlight() {
  const cards = document.querySelectorAll('.service-card, .featured-project-card, .glass-mockup');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Interactive Architectural Particle Grid Canvas
function setupArchitecturalCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 35), 45);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // Mouse proximity interaction
      const mdx = particles[i].x - mouseX;
      const mdy = particles[i].y - mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 160) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 * (1 - mdist / 160)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Custom Magnetic Follower Cursor
function setupMagneticCursor() {
  const cursorRing = document.createElement('div');
  cursorRing.className = 'custom-cursor-ring';
  document.body.appendChild(cursorRing);

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;

    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover scale trigger
  document.querySelectorAll('a, button, input, label, .service-card, .featured-project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-active'));
  });
}

// Modal Receipt Functions
function openReceiptModal() {
  const modal = document.getElementById('receiptModal');
  if (modal) modal.classList.add('active');
}

function closeReceiptModal(e) {
  if (!e || e.target.id === 'receiptModal' || e.target.classList.contains('receipt-close')) {
    const modal = document.getElementById('receiptModal');
    if (modal) modal.classList.remove('active');
  }
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  calculateTotal();
  setupScrollReveal();
  setup3DTiltAndSpotlight();
  setupArchitecturalCanvas();
  setupMagneticCursor();
});

