/* ============================================================
   VERTEX STUDIO — Hero Sine-Wave Animation (wave.js)
   Dekoratif: menggambar 6 lapisan gelombang sine di canvas hero.
   Aman: tidak menyentuh script.js / kontrak DOM lama.
   ============================================================ */
(function () {
  'use strict';

  var canvas = document.querySelector('.hero-waves');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var REDUCED_MOTION = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Warna slate/navy brand — disimpan sebagai array RGB agar mudah dibangun rgba() */
  var SLATE = [58, 69, 85];    /* #3A4555 */
  var NAVY = [42, 53, 80];     /* #2A3550 */
  var DEEP = [26, 32, 53];     /* #1A2035 */

  /* 6 gelombang: base = posisi vertikal (fraksi tinggi), dari bawah ke atas */
  var WAVES = [
    { rgb: SLATE, amp: 88, freq: 0.0042, speed: 0.28, phase: 0.0, opacity: 0.16, width: 1.2, base: 0.78 },
    { rgb: NAVY,  amp: 72, freq: 0.0062, speed: 0.44, phase: 1.2, opacity: 0.22, width: 1.4, base: 0.68 },
    { rgb: NAVY,  amp: 58, freq: 0.0084, speed: 0.58, phase: 2.4, opacity: 0.30, width: 1.6, base: 0.57 },
    { rgb: DEEP,  amp: 46, freq: 0.0108, speed: 0.74, phase: 3.6, opacity: 0.38, width: 1.8, base: 0.47 },
    { rgb: DEEP,  amp: 34, freq: 0.0132, speed: 0.90, phase: 4.8, opacity: 0.46, width: 2.0, base: 0.37 },
    { rgb: SLATE, amp: 22, freq: 0.0156, speed: 1.06, phase: 6.0, opacity: 0.55, width: 2.2, base: 0.27 }
  ];

  var width = 0;
  var height = 0;
  var gradients = [];
  var rafId = null;

  /* Gradien horizontal per gelombang: transparan → warna → transparan (fade tepi) */
  function buildGradients() {
    gradients = WAVES.map(function (w) {
      var fade = Math.min(0.18, 90 / Math.max(width, 1));
      var g = ctx.createLinearGradient(0, 0, width, 0);
      g.addColorStop(0, 'rgba(' + w.rgb.join(',') + ',0)');
      g.addColorStop(fade, 'rgba(' + w.rgb.join(',') + ',' + w.opacity + ')');
      g.addColorStop(1 - fade, 'rgba(' + w.rgb.join(',') + ',' + w.opacity + ')');
      g.addColorStop(1, 'rgba(' + w.rgb.join(',') + ',0)');
      return g;
    });
  }

  function draw(time) {
    if (width < 2 || height < 2) return;
    ctx.clearRect(0, 0, width, height);

    var t = time / 1000;
    var i, x, y;

    for (i = 0; i < WAVES.length; i++) {
      var w = WAVES[i];
      var baseY = height * w.base;

      ctx.strokeStyle = gradients[i];
      ctx.lineWidth = w.width;
      ctx.beginPath();

      for (x = 0; x <= width; x += 4) {
        y = baseY + Math.sin(x * w.freq + w.phase + t * w.speed) * w.amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
    }
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = rect.width;
    height = rect.height;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    buildGradients();

    /* reduced motion: cukup satu frame statis */
    if (REDUCED_MOTION) draw(0);
  }

  function frame(now) {
    draw(now);
    rafId = requestAnimationFrame(frame);
  }

  function start() {
    if (rafId !== null || document.hidden) return;
    rafId = requestAnimationFrame(frame);
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  window.addEventListener('resize', resize);

  /* pause saat tab disembunyikan, lanjut saat kembali terlihat */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop();
    else if (!REDUCED_MOTION) start();
  });

  resize();
  if (!REDUCED_MOTION) start();
})();
