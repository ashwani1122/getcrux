'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/case-studies', label: 'Case studies' },
  { href: '/team', label: 'Team' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/scan', label: 'Scan' },
];

/* Quirk carried over from the static site: on /contact both CTAs point
   straight at Calendly in a new tab instead of routing to the contact page. */
const CALENDLY = 'https://calendly.com/atharva-getcrux/30min';

/* Floating pill header. Owns the mobile menu (state, body scroll lock,
   Escape, >=900px auto-close); the light/dark theme toggle lives in Behaviors. */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Route change closes the menu, same as a fresh page load in the static clone.
  useEffect(() => { setOpen(false); }, [pathname]);

  // Body scroll lock while the menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  // Escape closes; matching the static 900px breakpoint closes on desktop resize.
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    const mq = window.matchMedia('(min-width: 900px)');
    const onChange = (e) => { if (e.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <header className="site-header" id="siteHeader">
      <nav className="nav-pill" aria-label="Main navigation">
        <a className="nav-logo" href={pathname === '/' ? '#top' : '/'} aria-label="GetCrux home">
          <img className="logo-light" src="/assets/img/jgY4E0azHO4gJp4Z4TwPNW3T7A.png" alt="GetCrux" />
          <img className="logo-dark" src="/assets/img/logo-white.png" alt="GetCrux" />
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="nav-link"
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          className="nav-cta"
          href={pathname === '/contact' ? CALENDLY : '/contact'}
          target={pathname === '/contact' ? '_blank' : undefined}
          rel={pathname === '/contact' ? 'noopener' : undefined}
        >
          Book a demo <svg className="icon"><use href="#i-arrow" /></svg>
        </a>
        <button
          type="button"
          className={'nav-toggle' + (open ? ' active' : '')}
          id="navToggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
        </button>
      </nav>
      <div
        className={'mobile-menu' + (open ? ' open' : '')}
        id="mobileMenu"
        onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
        <a
          className="btn btn-dark"
          href={pathname === '/contact' ? CALENDLY : '/contact'}
          target={pathname === '/contact' ? '_blank' : undefined}
          rel={pathname === '/contact' ? 'noopener' : undefined}
        >
          Book a demo <svg className="icon"><use href="#i-arrow" /></svg>
        </a>
      </div>
    </header>
  );
}
