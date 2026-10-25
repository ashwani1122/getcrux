'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* Port of every static-site interaction from js/main.js, except the mobile
   menu (owned by Header) and the footer year (owned by Footer). Re-runs per
   route; all listeners/observers/animation frames are cleaned up. */
export default function Behaviors() {
  const pathname = usePathname();

  useEffect(() => {
    const offs = [];
    const on = (t, ev, fn, opt) => {
      if (!t) return;
      t.addEventListener(ev, fn, opt);
      offs.push(() => t.removeEventListener(ev, fn, opt));
    };
    let io = null;
    let raf = 0;

    /* ---------- Mirror hero ticker into the right lane (different phase) ---------- */
    const mirror = document.querySelector('[data-ticker-mirror]');
    const source = document.querySelector('.ticker-lane .ticker-set');
    if (mirror && source && !mirror.dataset.mirrored) {
      mirror.appendChild(source.cloneNode(true));
      mirror.setAttribute('aria-hidden', 'true');
      mirror.setAttribute('data-duplicate', '');
      mirror.dataset.mirrored = '1';
    }

    /* ---------- Duplicate marquee content for seamless loops ---------- */
    document.querySelectorAll('[data-duplicate]').forEach((track) => {
      if (track.dataset.done) return;
      const first = track.firstElementChild;
      if (!first) return;
      const clone = first.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('[data-video]').forEach((v) => v.setAttribute('tabindex', '-1'));
      track.appendChild(clone);
      track.dataset.done = '1';
    });

    /* ---------- Statement float-card scroll parallax ----------
       Each card drifts along its own diagonal up to ±200px while the statement
       section passes through the viewport, progress over ~1.33 viewport heights,
       then clamps: instacart ↙(-x,+y) · nu ↖(-x,-y) · hoka ↗(+x,-y) · oura ↘(+x,+y) */
    const statement = document.querySelector('.statement');
    if (statement && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const floats = [
        [statement.querySelector('.fc-instacart'), -200, 200],
        [statement.querySelector('.fc-nu'), -200, -200],
        [statement.querySelector('.fc-hoka'), 200, -200],
        [statement.querySelector('.fc-oura'), 200, 200],
      ].filter((f) => f[0]);
      let cur = 0;
      const step = () => {
        raf = 0;
        const rect = statement.getBoundingClientRect();
        const vh = window.innerHeight || 900;
        if (rect.top > vh * 2 || rect.bottom < -vh) return; // far outside — pause loop
        const p = Math.min(1, Math.max(0, (vh * 0.53 - rect.top) / (vh * 1.33)));
        cur += (p - cur) * 0.16; // light smoothing, spring-like settle
        if (Math.abs(p - cur) < 0.001) cur = p;
        for (const [el, dx, dy] of floats) {
          el.style.transform =
            'translate3d(' + (dx * cur).toFixed(2) + 'px,' + (dy * cur).toFixed(2) + 'px,0)';
        }
        raf = requestAnimationFrame(step);
      };
      const kick = () => { if (!raf) raf = requestAnimationFrame(step); };
      on(window, 'scroll', kick, { passive: true });
      on(window, 'resize', kick);
      kick();
    }

    /* ---------- Header theme (light / dark) ---------- */
    const header = document.getElementById('siteHeader');
    const HEADER_Y = 63; // vertical centre of the floating pill (35px top + 56px / 2)
    const themeSections = Array.from(document.querySelectorAll('[data-nav]'));
    let themeTick = false;
    const updateTheme = () => {
      themeTick = false;
      let theme = 'light';
      for (const section of themeSections) {
        const r = section.getBoundingClientRect();
        if (r.top <= HEADER_Y && r.bottom > HEADER_Y) {
          theme = section.dataset.nav;
          break;
        }
      }
      if (header) header.classList.toggle('is-dark', theme === 'dark');
    };
    const themeScroll = () => {
      if (!themeTick) {
        themeTick = true;
        requestAnimationFrame(updateTheme);
      }
    };
    on(window, 'scroll', themeScroll, { passive: true });
    on(window, 'resize', updateTheme);
    updateTheme();

    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
      );
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('in'));
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll('.faq-item').forEach((item) => {
      const btn = item.querySelector('.faq-q');
      if (!btn) return;
      on(btn, 'click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach((openItem) => {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    /* ---------- Case-study tabs ---------- */
    const caseTabs = Array.from(document.querySelectorAll('.case-tab'));
    const casePanels = Array.from(document.querySelectorAll('.case-slide'));
    caseTabs.forEach((tab) => {
      on(tab, 'click', () => {
        const key = tab.dataset.case;
        caseTabs.forEach((t) => {
          const sel = t === tab;
          t.classList.toggle('active', sel);
          t.setAttribute('aria-selected', String(sel));
        });
        casePanels.forEach((panel) => {
          const show = panel.dataset.casePanel === key;
          panel.hidden = !show;
          panel.classList.toggle('active', show);
        });
      });
    });

    /* ---------- Insights tabs (case studies / blogs) ---------- */
    const insightTabs = Array.from(document.querySelectorAll('.insight-tab'));
    const articleSets = Array.from(document.querySelectorAll('.article-grid'));
    insightTabs.forEach((tab) => {
      on(tab, 'click', () => {
        const key = tab.dataset.insights;
        insightTabs.forEach((t) => {
          const sel = t === tab;
          t.classList.toggle('active', sel);
          t.setAttribute('aria-selected', String(sel));
        });
        articleSets.forEach((set) => {
          set.hidden = set.dataset.articles !== key;
        });
      });
    });

    /* ---------- Video lightbox (home) ---------- */
    const modal = document.getElementById('videoModal');
    const mount = document.getElementById('videoMount');
    let lastFocus = null;
    const openVideo = (id) => {
      if (!modal || !mount || !id) return;
      lastFocus = document.activeElement;
      mount.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' +
        id +
        '?autoplay=1&rel=0&modestbranding=1" title="Customer story video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      modal.querySelector('.video-close')?.focus();
    };
    const closeVideo = () => {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      mount.innerHTML = '';
      document.body.style.overflow = '';
      lastFocus?.focus?.();
    };
    document.querySelectorAll('[data-video]').forEach((card) => {
      on(card, 'click', () => openVideo(card.dataset.video));
    });
    document.querySelectorAll('[data-close-video]').forEach((el) => {
      on(el, 'click', closeVideo);
    });
    on(window, 'keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('open')) closeVideo();
    });

    return () => {
      offs.forEach((f) => f());
      if (io) io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
  }, [pathname]);

  return null;
}
