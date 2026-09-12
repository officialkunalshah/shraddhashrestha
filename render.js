/* ============================================================
   RENDER — builds the page from window.SITE_CONTENT (content.js).
   You should not normally need to edit this file: change content.js
   instead. This file just knows how to turn that data into HTML.
   ============================================================ */

(function () {
  const DATA = window.SITE_CONTENT;
  if (!DATA) return;

  // ---------- small helpers ----------
  const $ = (id) => document.getElementById(id);
  const setHTML = (id, html) => { const node = $(id); if (node) node.innerHTML = html == null ? '' : html; };
  const setText = (id, text) => { const node = $(id); if (node) node.textContent = text == null ? '' : text; };
  const isEnabled = (id) => {
    const s = (DATA.sections || []).find((s) => s.id === id);
    return !!(s && s.enabled);
  };
  const btnHTML = (b) => `<a href="${b.href}" class="btn ${b.style === 'secondary' ? 'btn-secondary' : 'btn-primary'}"${/^https?:\/\//.test(b.href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${b.label}</a>`;
  const starsHTML = (n) => '★'.repeat(Math.max(0, Math.min(5, n))) + '☆'.repeat(5 - Math.max(0, Math.min(5, n)));

  // ---------- 1. Remove disabled sections up front ----------
  (DATA.sections || []).forEach((s) => {
    if (!s.enabled) {
      const node = document.getElementById(s.id);
      if (node) node.remove();
    }
  });

  // ---------- 2. Navigation ----------
  setText('nav-logo', (DATA.person && DATA.person.name) || '');

  const navHTML = (DATA.sections || [])
    .filter((s) => s.enabled && s.navLabel)
    .map((s) => `<a href="#${s.id}">${s.navLabel}</a>`)
    .join('');
  setHTML('nav-links', navHTML);

  const navCta = $('nav-cta');
  if (navCta && DATA.nav) {
    navCta.textContent = DATA.nav.ctaLabel || '';
    navCta.setAttribute('href', DATA.nav.ctaHref || '#contact');
  }

  // ---------- 3. Hero ----------
  if (document.getElementById('hero')) {
    const hero = DATA.hero || {};
    setHTML('hero-eyebrow', hero.eyebrow);
    setHTML('hero-headline', (hero.headlineLines || []).join('<br>'));
    setText('hero-subheadline', hero.subheadline);
    setHTML('hero-meta', (hero.meta || []).map((m) => `<span>${m}</span>`).join(''));
    setHTML('hero-buttons', (hero.buttons || []).map(btnHTML).join(''));

    const video = $('hero-video');
    const bg = hero.background || {};
    if (video) {
      if (bg.type === 'video' && bg.video) {
        video.poster = bg.poster || '';
        video.innerHTML = `<source src="${bg.video}" type="video/mp4">
          <img src="${bg.poster || ''}" alt="${bg.posterAlt || ''}">`;
      } else {
        const img = document.createElement('img');
        img.className = 'hero-still';
        img.src = bg.poster || bg.image || '';
        img.alt = bg.posterAlt || '';
        video.replaceWith(img);
      }
    }
  }

  // ---------- 4. About / The Artist ----------
  if (isEnabled('about')) {
    const about = DATA.about || {};
    setText('about-heading', about.heading);
    setHTML('about-lead', about.lead);
    setHTML('about-paragraphs', (about.paragraphs || []).map((p) => `<p>${p}</p>`).join(''));

    const img = $('about-image');
    if (img && about.image) {
      img.src = about.image.src || '';
      img.alt = about.image.alt || '';
    }
  }

  // ---------- 5. Stats / Experience ----------
  if (isEnabled('stats')) {
    const s = DATA.stats || {};
    setText('stats-number', s.number);
    setText('stats-number-label', s.numberLabel);
    setHTML('stats-details', (s.details || []).map((d) => `<li>${d}</li>`).join(''));
    setHTML('stats-statement', s.statement);
    const img = $('stats-image');
    if (img && s.image) {
      img.src = s.image.src || '';
      img.alt = s.image.alt || '';
    } else if (img) {
      img.closest('.stats-image').remove();
    }
  }

  // ---------- 6. Selected Work (editorial gallery) ----------
  if (isEnabled('work')) {
    const w = DATA.work || {};
    setText('work-heading', w.heading);
    setHTML('work-intro', w.intro);

    const galleryHTML = (w.items || [])
      .map((it) => `<figure class="work-figure work-figure--${it.size || 'small'}">
        <img src="${it.image}" alt="${it.alt || ''}" loading="lazy">
      </figure>`)
      .join('');
    setHTML('work-gallery', galleryHTML);
  }

  // ---------- 7. Behind the Glam ----------
  if (isEnabled('glam')) {
    const g = DATA.glam || {};
    setText('glam-heading', g.heading);
    setHTML('glam-statement', g.statement);
    const galleryHTML = (g.items || [])
      .map((it) => `<figure class="glam-figure">
        <img src="${it.image}" alt="${it.alt || ''}" loading="lazy">
      </figure>`)
      .join('');
    setHTML('glam-gallery', galleryHTML);
  }

  // ---------- 8. Expertise / The Art of Detail ----------
  if (isEnabled('expertise')) {
    const e = DATA.expertise || {};
    setText('expertise-heading', e.heading);
    setHTML('expertise-intro', e.intro);
    const itemsHTML = (e.items || [])
      .map((it, i) => `<div class="expertise-item" style="--i:${i}">
        <span class="expertise-index">${String(i + 1).padStart(2, '0')}</span>
        <h3>${it.title}</h3>
        <p>${it.desc}</p>
      </div>`)
      .join('');
    setHTML('expertise-items', itemsHTML);
  }

  // ---------- 9. Services ----------
  if (isEnabled('services')) {
    const sv = DATA.services || {};
    setText('services-heading', sv.heading);
    setHTML('services-intro', sv.intro);
    setHTML('services-items', (sv.items || [])
      .map((it) => `<div class="service-card"><h3>${it.title}</h3><p>${it.description}</p></div>`)
      .join(''));
  }

  // ---------- 9b. Testimonials (sample/demo content) ----------
  if (isEnabled('testimonials')) {
    const t = DATA.testimonials || {};
    setText('testimonials-heading', t.heading);
    setHTML('testimonials-intro', t.intro);
    setText('testimonials-rating-number', (t.overallRating || 5).toFixed(1));
    setHTML('testimonials-rating-stars', `<span class="stars">${starsHTML(5)}</span>`);
    setText('testimonials-rating-label', t.sampleLabel || 'Sample Client Feedback');

    const itemsHTML = (t.items || [])
      .map((it) => `<figure class="testimonial-card">
        <span class="stars">${starsHTML(it.rating)}</span>
        <blockquote>${it.quote}</blockquote>
        <figcaption>${it.name}</figcaption>
      </figure>`)
      .join('');
    setHTML('testimonials-items', itemsHTML);
  }

  // ---------- 10. Professional Training ----------
  if (isEnabled('training')) {
    const t = DATA.training || {};
    setText('training-heading', t.heading);
    setText('training-qualification', t.qualification);
    setText('training-institution', t.institution);
    setHTML('training-paragraph', t.paragraph);
  }

  // ---------- 11. Makeup Consultation ----------
  if (isEnabled('consultation')) {
    const c = DATA.consultation || {};
    setHTML('consultation-heading', (c.headingLines || []).join('<br>'));
    setHTML('consultation-paragraph', c.paragraph);
    const cta = $('consultation-cta');
    if (cta && c.cta) {
      cta.textContent = c.cta.label || '';
      cta.setAttribute('href', c.cta.href || '#contact');
    }
    const img = $('consultation-image');
    if (img && c.image) {
      img.src = c.image.src || '';
      img.alt = c.image.alt || '';
    }
  }

  // ---------- 12. Available for Bookings / Travel ----------
  if (isEnabled('travel')) {
    const t = DATA.travel || {};
    setText('travel-heading', t.heading);
    setHTML('travel-paragraph', t.paragraph);
    setHTML('travel-tags', (t.tags || []).map((tag) => `<span>${tag}</span>`).join(''));
  }

  // ---------- 13. Final CTA ----------
  if (isEnabled('finalCta')) {
    const f = DATA.finalCta || {};
    setText('final-cta-heading', f.heading);
    setHTML('final-cta-paragraph', f.paragraph);
    setHTML('final-cta-buttons', (f.buttons || []).map(btnHTML).join(''));
    const img = $('final-cta-image');
    if (img && f.image) {
      img.src = f.image.src || '';
      img.alt = f.image.alt || '';
    }
  }

  // ---------- 14. Contact ----------
  if (isEnabled('contact')) {
    const c = DATA.contact || {};
    setText('contact-heading', c.heading);
    setHTML('contact-intro', c.intro);
    const emailLink = $('contact-email');
    if (emailLink) {
      emailLink.href = `mailto:${c.email}`;
      emailLink.textContent = c.email;
    }
    const socialLinksHTML = (c.socialLinks || [])
      .map((s) => `<a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.label}</a>`)
      .join('');
    setHTML('contact-social', socialLinksHTML);
    const metaParts = [c.location, c.availability].filter(Boolean);
    setText('contact-meta', metaParts.join(' · '));
  }

  // ---------- 15. Footer ----------
  const footer = DATA.footer || {};
  setHTML('footer-tagline', footer.tagline);
  const footerEmail = $('footer-email');
  if (footerEmail) {
    footerEmail.href = `mailto:${footer.email}`;
    footerEmail.textContent = footer.email;
  }
  const footerTime = $('footer-time');
  if (footerTime) {
    if (footer.localTime && footer.localTime.enabled) {
      footerTime.setAttribute('aria-label', `Local time in ${footer.localTime.label}`);
    } else {
      footerTime.remove();
    }
  }
  setHTML('footer-legal', `&copy; ${footer.year} ${footer.legalName}. All rights reserved.`);
})();
