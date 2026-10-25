'use client';

import { usePathname } from 'next/navigation';

const CALENDLY = 'https://calendly.com/atharva-getcrux/30min';

/* Shared footer, pixel-identical block on all five pages — with two per-route
   quirks carried over from the static site: on the home page the privacy /
   trust links open in the same tab (no target/rel), and on /contact the
   Book a demo button goes straight to Calendly in a new tab. */
export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isContact = pathname === '/contact';

  return (
    <footer className="footer" data-nav="dark">
      <div className="footer-inner">
        <div className="footer-left">
          <h2>Creative OS for launching<br />high performing ads</h2>
          <a
            className="btn btn-outline"
            href={isContact ? CALENDLY : '/contact'}
            target={isContact ? '_blank' : undefined}
            rel={isContact ? 'noopener' : undefined}
          >
            Book a demo <svg className="icon"><use href="#i-arrow" /></svg>
          </a>
          <a className="preferred" href="https://www.google.com/preferences/source?q=getcrux.ai" target="_blank" rel="noopener">
            <img src="/assets/img/0pkl6T4kGWLTw2fbZsS0BhTV0M.png" alt="Google" />Add to Preferred Sources
          </a>
        </div>
        <div className="footer-links">
          <div>
            <a href="/team">Team</a>
            <a href="/case-studies">Case studies</a>
            <a href="/scan">Scan</a>
            <a href="https://getcrux.ai/discover" target="_blank" rel="noopener">Discover</a>
            <a href="https://getcrux.ai/blogs" target="_blank" rel="noopener">Blogs</a>
          </div>
          <div>
            <a href="/contact">Contact us</a>
            <a href="https://www.linkedin.com/company/getcrux" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://x.com/getcrux" target="_blank" rel="noopener">X</a>
            <a href="https://www.youtube.com/@getcrux" target="_blank" rel="noopener">YouTube</a>
          </div>
          <div>
            <a
              href="https://getcrux.ai/privacy-policy"
              target={isHome ? undefined : '_blank'}
              rel={isHome ? undefined : 'noopener'}
            >
              Privacy policy
            </a>
            <a
              href="https://getcrux.ai/trust-center"
              target={isHome ? undefined : '_blank'}
              rel={isHome ? undefined : 'noopener'}
            >
              Trust center
            </a>
            <span className="copyright">© <span>{new Date().getFullYear()}</span> Crux Technologies Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
