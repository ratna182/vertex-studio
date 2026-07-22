// Vertex Studio Service Content Details
const servicesData = {
  services: {
    title: "6 Layanan Utama VERTEX STUDIO",
    body: `
      <p>VERTEX STUDIO menyediakan 6 layanan visual & digital arsitektural pilihan untuk memperkuat daya saing bisnis Anda:</p>
      <ul>
        <li><strong>01. Desain Grafis & Branding:</strong> Logo vector, identitas brand, kemasan produk & media promosi.</li>
        <li><strong>02. Desain 3D & Render Visual:</strong> Product render photorealistic, interior/eksterior & booth exhibition.</li>
        <li><strong>03. Desain Web Custom:</strong> Website company profile, katalog produk, ultra-fast & SEO friendly.</li>
        <li><strong>04. Desain Landing Page:</strong> Single page promosi high-converting terintegrasi WhatsApp.</li>
        <li><strong>05. Undangan Digital:</strong> Web undangan interaktif dengan RSVP, galeri foto & audio player.</li>
        <li><strong>06. Aplikasi Kasir (POS):</strong> Sistem kasir modern berbasis web, manajemen stok & struk WA.</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20layanan%20kalian."
  },
  service1: {
    title: "01. Desain Grafis & Branding",
    body: `
      <p>Membangun identitas visual berkelas tinggi untuk memperkuat brand equity bisnis Anda.</p>
      <ul>
        <li>✓ Logo Vector High-Resolution & Source File</li>
        <li>✓ Brand Guideline & Color Palette</li>
        <li>✓ Desain Feed Instagram & Banner Promosi</li>
        <li>✓ Packaging & Label Produk Eksklusif</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Desain%20Grafis%20%26%20Branding."
  },
  service2: {
    title: "02. Desain 3D & Render Visual",
    body: `
      <p>Visualisasi 3D photorealistic tingkat tinggi untuk presentasi produk dan arsitektur.</p>
      <ul>
        <li>✓ 3D Product Rendering Photorealism</li>
        <li>✓ Booth Exhibition & Display Stand Design</li>
        <li>✓ Visualisasi Interior & Arsitektural</li>
        <li>✓ 3D Modeling High-Detail (OBJ/FBX/GLTF)</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Desain%203D%20%26%20Render."
  },
  service3: {
    title: "03. Desain Web Custom",
    body: `
      <p>Website perusahaan multi-halaman berkelas tinggi dengan arsitektur web modern.</p>
      <ul>
        <li>✓ Website Company Profile & Business Agency</li>
        <li>✓ Web Katalog Produk & Portofolio Interaktif</li>
        <li>✓ Responsif Sempurna di HP, Tablet & PC</li>
        <li>✓ Bebas Biaya Server & Optimasi Kecepatan</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Desain%20Web%20Custom."
  },
  service4: {
    title: "04. Desain Landing Page",
    body: `
      <p>Halaman promosi tunggal berkonversi tinggi untuk memaksimalkan ROI kampanye iklan Anda.</p>
      <ul>
        <li>✓ High-Converting Copywriting & Layout</li>
        <li>✓ Integrasi Tombol Chat WhatsApp Direct</li>
        <li>✓ Pengerjaan Cepat (1-2 Hari Kerja)</li>
        <li>✓ Tanpa Biaya Server Bulanan</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Desain%20Landing%20Page."
  },
  service5: {
    title: "05. Undangan Digital",
    body: `
      <p>Web undangan digital modern untuk acara pernikahan, pertunangan, dan event eksklusif.</p>
      <ul>
        <li>✓ Fitur Konfirmasi RSVP & Ucapan Selamat</li>
        <li>✓ Navigasi Google Maps & Galeri Foto HD</li>
        <li>✓ Background Music Custom & Countdown Timer</li>
        <li>✓ Custom Nama Tamu Tanpa Batas</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Jasa%20Undangan%20Digital."
  },
  service6: {
    title: "06. Aplikasi Kasir (POS) Modern",
    body: `
      <p>Sistem Kasir Point-of-Sale (POS) berbasis web ringan untuk operasional toko & cafe.</p>
      <ul>
        <li>✓ Manajemen Produk, Kategori & Stok</li>
        <li>✓ Pencatatan Transaksi & Laporan Penjualan</li>
        <li>✓ Fitur Cetak Struk / Kirim Struk Digital via WhatsApp</li>
        <li>✓ Tanpa Perlu Install Aplikasi Rumit (Cloud Web)</li>
      </ul>
    `,
    waText: "Halo%20VERTEX%20STUDIO,%20saya%20tertarik%20dengan%20Aplikasi%20Kasir%20POS."
  }
};

// Open Modal Dialog
function openModal(type) {
  const modal = document.getElementById('infoModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const waBtn = document.getElementById('modalWaBtn');

  const data = servicesData[type] || servicesData.services;

  title.innerText = data.title;
  body.innerHTML = data.body;
  waBtn.href = `https://wa.me/6287889527901?text=${data.waText}`;

  modal.classList.add('active');
}

function closeModal(event) {
  if (event.target.id === 'infoModal') {
    document.getElementById('infoModal').classList.remove('active');
  }
}

function closeModalDirect() {
  document.getElementById('infoModal').classList.remove('active');
}

// Newsletter Form Submission
function handleSubscribe(event) {
  event.preventDefault();
  const emailInput = document.getElementById('emailInput');
  const toast = document.getElementById('toastMsg');

  if (emailInput.value) {
    toast.innerText = `Terima kasih! Email (${emailInput.value}) telah terdaftar. Tim kami akan segera menghubungi Anda.`;
    toast.classList.add('show');
    emailInput.value = '';

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

// --- LUXURY ANIMATIONS & INTERACTION ENHANCEMENTS ---

// 1. Reveal On Scroll Observer
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

  // 2. Navbar Background Scroll State
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. 3D Tilt Effect on Image Wrappers
  const imageWrappers = document.querySelectorAll('.image-wrapper');
  imageWrappers.forEach(wrapper => {
    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    wrapper.addEventListener('mouseleave', () => {
      wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});

// Keyboard ESC to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModalDirect();
  }
});
