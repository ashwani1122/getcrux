export const metadata = {
  title: "Pricing | GetCrux",
  description: "GetCrux pricing: Starter at $1,500/month, custom Professional and Enterprise plans. Unlimited seats on every plan. Book a demo to find the right fit.",
};

export default function PricingPage() {
  return (
    <main data-nav="light" className="p-page">

      {/* HERO */}
      <section className="p-hero" data-nav="light">
        <div className="p-hero-inner">
          <span className="eyebrow reveal">pricing</span>
          <h1 className="reveal">Simple pricing.</h1>
          <p className="p-sub reveal">Creative insights, competitor intel and ad generation in one Creative OS.</p>
          <span className="p-pill reveal">Unlimited team members on every plan</span>
        </div>

        <div className="p-plans">
          <article className="p-plan reveal">
            <h4>Starter</h4>
            <div className="p-price">$1,500 <span>/ month</span></div>
            <p className="p-spend">Ad spend up to $100K / month</p>
            <a className="btn" href="/contact">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
            <div className="p-div"></div>
            <span className="p-inc">Includes</span>
            <ul>
              <li>Copilot</li>
              <li>Creative Insights</li>
              <li>AI Tagging</li>
              <li>Competitor Insights</li>
              <li>Ad Inspiration</li>
              <li className="dim">Organic Social Trends</li>
              <li className="dim">Creative Generation</li>
            </ul>
          </article>

          <article className="p-plan pro reveal">
            <h4>Professional</h4>
            <div className="p-price">Custom</div>
            <p className="p-spend">Ad spend $100K – $1M / month</p>
            <a className="btn" href="/contact">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
            <div className="p-div"></div>
            <span className="p-inc">Everything in Starter, plus</span>
            <ul>
              <li>MCP</li>
              <li>Slack Integration</li>
              <li>Automated Workflows</li>
              <li>Custom Brand Kit</li>
              <li className="dim">Creative Pre-Flight Testing</li>
            </ul>
          </article>

          <article className="p-plan reveal">
            <h4>Enterprise</h4>
            <div className="p-price">Custom</div>
            <p className="p-spend">Ad spend $1M+ / month</p>
            <a className="btn" href="/contact">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
            <div className="p-div"></div>
            <span className="p-inc">Everything in Professional, plus</span>
            <ul>
              <li>Custom Workflows</li>
              <li>Figma &amp; DAM Integrations</li>
              <li className="dim">API Support</li>
            </ul>
          </article>
        </div>
      </section>

      {/* COMPARE PLANS */}
      <section className="p-compare" data-nav="light">
        <div className="section-head reveal">
          <span className="eyebrow">compare</span>
          <h2>Compare plans</h2>
        </div>

        <div className="p-table reveal">
          <div className="p-thead">
            <span></span><h6>Starter</h6><h6>Professional</h6><h6>Enterprise</h6>
          </div>

          <span className="p-group">Usage</span>
          <div className="p-tr">
            <span className="p-feat">Monthly ad spend</span>
            <span>Up to $100K</span>
            <span>$100K – $1M</span>
            <span>$1M+</span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Ad accounts</span>
            <span>Up to 2</span>
            <span>Custom</span>
            <span>Custom</span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Creative generation credits</span>
            <span>1,000</span>
            <span>Custom</span>
            <span>Custom</span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Ad platforms</span>
            <span>Meta, Google, TikTok, LinkedIn</span>
            <span>Meta, Google, TikTok, LinkedIn, X, Reddit, Pinterest, Snapchat, Taboola, Microsoft, AppLovin, DV360</span>
            <span>Custom</span>
          </div>

          <span className="p-group">Setup &amp; integrations</span>
          <div className="p-tr">
            <span className="p-feat">Custom integrations (MMP, attribution, 1st &amp; 3rd-party, internal data)</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Export options</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
          <div className="p-tr">
            <span className="p-feat">On-premise deployment</span>
            <span className="p-no">–</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>

          <span className="p-group">Security</span>
          <div className="p-tr">
            <span className="p-feat">SOC 2 compliant execution</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Single sign-on</span>
            <span className="p-no">–</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Admin roles</span>
            <span className="p-no">–</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>

          <span className="p-group">LLMs</span>
          <div className="p-tr">
            <span className="p-feat">Choice of LLMs</span>
            <span>GPT, Claude, Llama, Gemini</span>
            <span>+ Privately-hosted LLMs</span>
            <span>Privately-hosted fine-tuned LLMs</span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Custom instructions</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Fine-tuning on 1st-party data</span>
            <span className="p-no">–</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
          <div className="p-tr">
            <span className="p-feat">Client-specific contextual training</span>
            <span className="p-no">–</span>
            <span className="p-no">–</span>
            <span className="p-yes"><svg className="icon"><use href="#i-check"/></svg></span>
          </div>
        </div>
      </section>

      {/* DARK BANNER */}
      <section className="p-cta" data-nav="dark">
        <div className="p-cta-panel reveal">
          <div className="p-cta-copy">
            <h2>Not sure which plan fits?</h2>
            <p>30-min call with the founders. We map it to your spend and team.</p>
            <a className="btn btn-light" href="/contact">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" data-nav="light">
        <div className="section-head reveal">
          <span className="eyebrow">faq</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list reveal">
          <div className="faq-item open">
            <button className="faq-q" aria-expanded="true">How does GetCrux pricing work?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Plans are based on your monthly ad spend. Starter is $1,500 per month for teams spending up to $100K a month on ads. Professional ($100K–$1M) and Enterprise ($1M+) are priced to your scale and scope. Every plan includes unlimited team members.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">Which plan is right for me?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Starter fits teams on up to 2 ad accounts across Meta, Google, TikTok and LinkedIn. Professional adds 12 ad platforms, custom data integrations, MCP, Slack and automated workflows. Enterprise adds custom workflows, Figma and DAM integrations, API access, SSO and privately-hosted fine-tuned LLMs.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">Which ad platforms does GetCrux support?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Starter supports Meta, Google, TikTok and LinkedIn. Professional adds X, Reddit, Pinterest, Snapchat, Taboola, Microsoft, AppLovin and DV360. Enterprise supports any platform you need.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">What are creative generation credits?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Credits are used when GetCrux generates new ad creatives. Starter includes 1,000 credits. Professional and Enterprise credit limits are set to your volume.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">Can I connect my own data sources?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Yes, on Professional and Enterprise. Connect your MMP, attribution data, 1st and 3rd-party sources and internal data so insights reflect your real performance.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">Can GetCrux's output be trusted to take actions?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Yes. We have checks in place so you only get accurate information. GetCrux is used by some of the largest performance marketing teams in the world, on ad accounts with 7–8 figure spends. It is still early days for LLMs, so if you spot an error, tell us.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">Is it safe to connect my ad accounts to GetCrux?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>GetCrux is SOC 2 compliant, uses only trusted LLM providers and never stores your data without permission. You can remove your account at any time.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">How can I start using GetCrux?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Book a 30-minute intro call with the founders. Every growth team needs a different setup depending on scale, speed of growth and constraints, so we learn your requirements first, then share access to the platform.</p></div>
          </div>
        </div>
      </section>

    </main>
  );
}
