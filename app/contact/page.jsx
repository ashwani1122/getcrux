export const metadata = {
  title: "Book a Demo | GetCrux",
  description: "Book a demo of GetCrux and see how your team can turn ad performance data into winning creatives, faster.",
};

export default function ContactPage() {
  return (
    <main data-nav="dark" className="cn-page">

      {/* HERO / FORM */}
      <section className="cn-hero" data-nav="dark">
        <div className="cn-grid">
          <div className="cn-left">
            <h1 className="reveal">“The best creative work deserves to be a real business. We built GetCrux because too many creators were great at their craft and blind to their numbers.</h1>
            <div className="cn-person reveal">
              <img src="/assets/img/i9i25kzm0NiV7Mpx7WhWWYLRffs.png" alt="Atharva Padhye, Co-founder, CBO" />
              <div><span>Atharva</span><small>Co-founder, CBO</small></div>
            </div>
            <div className="cn-brands reveal">
              <span className="cn-brands-label">Trusted by brands at</span>
              <div className="cn-brand-row">
                <img src="/assets/img/xhlADGAc8gxOyb2UtZrqq8IiAe0.png" alt="Jerry" />
                <img src="/assets/img/ql3a3zJFgaAt8DvV3GO0yLWQA.png" alt="Officely" />
                <img src="/assets/img/PRdQtD2IeitGfqvxXtDqjxS39XQ.png" alt="Rocket Money" />
                <img src="/assets/img/ZIBrLJBlEE8krR8smR1b8PRwyw.png" alt="Cloaked" />
              </div>
            </div>
          </div>

          {/* Front-end demo form: the live page posts to a form backend and books
               via Calendly; this static clone hands off to Calendly instead. */}
          <form className="cn-card reveal" id="demoForm">
            <h3>Contact Us</h3>
            <label><span>First Name</span><input type="text" name="firstname" autoComplete="given-name" /></label>
            <label><span>Last Name</span><input type="text" name="lastname" autoComplete="family-name" /></label>
            <label><span>Company Email</span><input type="email" name="email" autoComplete="email" required /></label>
            <label><span>Role</span><input type="text" name="role" autoComplete="organization-title" /></label>
            <label><span>Phone (optional)</span><input type="tel" name="phone" autoComplete="tel" /></label>
            <label><span>How did you hear about us?</span><textarea name="source" rows="3"></textarea></label>
            <a className="cn-submit" href="https://calendly.com/atharva-getcrux/30min" target="_blank" rel="noopener">Book a demo</a>
          </form>
        </div>

        <div className="cn-sphere" aria-hidden="true"></div>
      </section>

    </main>
  );
}
