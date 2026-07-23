(function () {
  'use strict';

  const config = window.VERTEX_ANALYTICS || {};
  const isConfigured = (value, placeholder) => typeof value === 'string' && value.trim() && value !== placeholder;
  const gaMeasurementId = config.gaMeasurementId;
  const clarityProjectId = config.clarityProjectId;

  function loadScript(src) {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  if (isConfigured(gaMeasurementId, 'G-XXXXXXXXXX')) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaMeasurementId, { send_page_view: true });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`);
  }

  if (isConfigured(clarityProjectId, 'XXXXXXXXXX')) {
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    loadScript(`https://www.clarity.ms/tag/${encodeURIComponent(clarityProjectId)}`);
  }

  window.trackEvent = function (eventName, parameters) {
    const eventParameters = parameters || {};

    if (typeof window.gtag === 'function' && isConfigured(gaMeasurementId, 'G-XXXXXXXXXX')) {
      window.gtag('event', eventName, eventParameters);
    }

    if (typeof window.clarity === 'function' && isConfigured(clarityProjectId, 'XXXXXXXXXX')) {
      window.clarity('event', eventName);
    }
  };

  document.addEventListener('click', function (event) {
    const element = event.target.closest('a, button');
    if (!element) return;

    const trackName = element.dataset.track;
    if (trackName) {
      window.trackEvent(trackName, {
        location: element.dataset.trackLocation || 'unspecified',
        portfolio_name: element.dataset.portfolioName || undefined
      });
      return;
    }

    if (element.matches('a[href*="wa.me/"]')) {
      window.trackEvent('whatsapp_click', {
        location: element.className || 'unspecified'
      });
    }
  });
}());
