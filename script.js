// ============================
// 0. SHARED FLAGS
// ============================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// ============================
// 0b. SMOOTH SCROLL (Lenis)
// ============================
let lenis = null;

if (!prefersReducedMotion && window.Lenis) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// In-page anchors: eased scroll via Lenis when active, native otherwise.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -78 });
    } else {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  });
});

// ============================
// 1. NAVBAR SCROLL EFFECT
// ============================
const navbar = document.getElementById('navbar');

if (navbar) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
      ticking = false;
    });
  });
}

// ============================
// 2. SCROLL-TRIGGERED REVEAL
// ============================
// Every top-level section other than the hero (which has its own load-in
// sequence). Galleries add their own staggered child animation on top,
// keyed off the same .in-view class (see style.css).
const revealTargets = document.querySelectorAll('body > section:not(#hero)');

if (window.IntersectionObserver && revealTargets.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
} else {
  revealTargets.forEach((el) => el.classList.add('in-view'));
}

// ============================
// 3. MOBILE MENU TOGGLE
// ============================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  const setMenu = (open) => {
    menuToggle.classList.toggle('open', open);
    navLinks.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  };

  menuToggle.addEventListener('click', () => {
    setMenu(!menuToggle.classList.contains('open'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
}

// ============================
// 4. HERO VIDEO — play safely, pause when off-screen
// ============================
const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
  if (prefersReducedMotion) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  } else {
    heroVideo.muted = true;
    heroVideo.setAttribute('muted', '');

    const startPlayback = () => {
      const attempt = heroVideo.play();
      if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
    };

    startPlayback();
    heroVideo.addEventListener('loadeddata', startPlayback, { once: true });
    heroVideo.addEventListener('canplay', startPlayback, { once: true });

    const onFirstInteraction = () => {
      startPlayback();
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('scroll', onFirstInteraction);
    };
    window.addEventListener('pointerdown', onFirstInteraction, { passive: true });
    window.addEventListener('scroll', onFirstInteraction, { passive: true });

    if (window.IntersectionObserver) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startPlayback();
          else heroVideo.pause();
        });
      }, { threshold: 0.1 });
      videoObserver.observe(heroVideo);
    }
  }
}

// ============================
// 5. SCROLL-SPY NAV — highlight the section you're looking at
// ============================
const navMap = new Map();
document.querySelectorAll('.nav-links a[href^="#"]').forEach((a) => {
  navMap.set(a.getAttribute('href').slice(1), a);
});
const spySections = Array.from(navMap.keys())
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (window.IntersectionObserver && spySections.length) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navMap.forEach((a) => a.classList.remove('is-current'));
      const active = navMap.get(entry.target.id);
      if (active) active.classList.add('is-current');
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  spySections.forEach((s) => spyObserver.observe(s));
}

// ============================
// 6. LOCAL TIME (footer)
// ============================
const footerTime = document.getElementById('footer-time');
const localTimeConfig = window.SITE_CONTENT && window.SITE_CONTENT.footer && window.SITE_CONTENT.footer.localTime;

if (footerTime && localTimeConfig && localTimeConfig.enabled) {
  const tick = () => {
    try {
      const t = new Date().toLocaleTimeString('en-GB', {
        timeZone: localTimeConfig.timezone,
        hour: '2-digit',
        minute: '2-digit',
      });
      footerTime.textContent = localTimeConfig.label + ' ' + t;
    } catch (e) {
      footerTime.textContent = localTimeConfig.label;
    }
  };
  tick();
  setInterval(tick, 30000);
}

// ============================
// 7. CUSTOM CURSOR (fine pointers, motion allowed)
// ============================
const cursorDot = document.querySelector('.cursor-dot');

if (cursorDot && finePointer && !prefersReducedMotion) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursorDot.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorDot.classList.remove('hovering'));
  });
} else if (cursorDot) {
  cursorDot.style.display = 'none';
}

// ============================
// 8. MAGNETIC BUTTONS (subtle, fine pointers, motion allowed)
// ============================
if (finePointer && !prefersReducedMotion) {
  document.querySelectorAll('.btn').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.12;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}
