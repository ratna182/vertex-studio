// VERTEX STUDIO — Ultra-Minimalist & Interactive Script

let selectedServicePrice = 500000;
let selectedServiceName = "Desain Grafis & Branding";
let currentWhatsAppNumber = "6287889527901"; // Nomor WhatsApp VERTEX STUDIO

// Animate Price Number Count Up
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

  // Parse old price string integer if present
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

// Scroll Reveal Observer Animation
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

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  calculateTotal();
  setupScrollReveal();
});
