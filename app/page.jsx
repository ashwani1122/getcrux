export const metadata = {
  title: "GetCrux | Creative OS for launching high performing ads",
  description: "A self-improving system for performance creatives. GetCrux connects ad data, competitor insight and your brand kit to go from insight to creative in minutes.",
};

export default function HomePage() {
  return (
    <>
    <main>

      {/* HERO */}
      <section className="hero" data-nav="light">
        <div className="hero-inner">
          <div className="yc reveal">
            <span>Backed by</span>
            <img src="/assets/img/mvuga753JeoGULGBNm1RpqN4L4c.png" alt="Y Combinator" />
          </div>
          <h1 className="reveal">Creative OS for launching<br />high performing ads</h1>
          <p className="hero-sub reveal">Research, analyse, create and scale<br />winning ads across multiple channels</p>
        </div>

        <div className="hero-ticker" aria-label="GetCrux creative workflow preview">
          {/* band paint: layers live here so the alpha fade mask never touches the cards */}
          <div className="ticker-band" aria-hidden="true"></div>
          <div className="ticker-lane lane-left">
            <div className="ticker-track" data-duplicate>
              <div className="ticker-set">

                <div className="tool-stack">
                  <div className="tool-card brandkit">
                    <div className="tool-head"><span>Using your <b>Brand Kit</b></span><span className="ok-dot"><svg className="icon"><use href="#i-check"/></svg></span></div>
                    <ul className="tool-list">
                      <li><span className="tiny-ico"><svg className="icon"><use href="#i-chat"/></svg></span>Messaging</li>
                      <li><span className="tiny-ico">Aa</span>Logo Use</li>
                      <li><span className="tiny-ico">◐</span>Color Palette</li>
                      <li><span className="tiny-ico">▧</span>Photography</li>
                      <li><span className="tiny-ico">◇</span>Illustrations</li>
                    </ul>
                  </div>
                  <div className="tool-card library">
                    <div className="tool-head"><span>Repurposing<br /><b>Content Library</b></span><span className="ok-dot"><svg className="icon"><use href="#i-check"/></svg></span></div>
                    <div className="library-icons"><span>△<small>Drive</small></span><span>❖<small>Dropbox</small></span><span>▤<small>Storage</small></span></div>
                  </div>
                </div>

                <div className="tool-card social">
                  <div className="tool-head"><span>Listening to<br /><b>Social Sentiment</b></span><span className="ok-dot"><svg className="icon"><use href="#i-check"/></svg></span></div>
                  <div className="social-photo">
                    <img src="/assets/img/El6kR9QRM2wAZvaO51EASERfw.jpg" alt="Spotify billboard creative" />
                  </div>
                  <div className="social-comments">
                    <img src="/assets/img/XehDOa0J6GLNTWcchO4QgrNBZo.png" alt="Instagram comments on the creative" />
                  </div>
                </div>

                <div className="tool-card trending">
                  <div className="tool-head"><span><b>Trending Formats</b></span><span className="ok-dot"><svg className="icon"><use href="#i-check"/></svg></span></div>
                  <div className="trend-cols">
                    <div className="trend-cell">
                      <img src="/assets/img/8oNnyZa9ks8Bm3lZI0nfRFnvPmQ.jpg" alt="Day in the life UGC example" />
                      <span className="trend-tag">Trending #1</span>
                      <div className="trend-info">
                        <strong>Day-in-the-Life UGC</strong>
                        <div className="trend-meta"><span>100K+ reels</span><span>5M+ views in 24H</span></div>
                      </div>
                    </div>
                    <div className="trend-cell">
                      <img src="/assets/img/uFDI7cV7OLb089H2sUsf5dWzY.jpg" alt="Street interview UGC example" />
                      <span className="trend-tag">Trending #2</span>
                      <div className="trend-info">
                        <strong>Street Interview</strong>
                        <div className="trend-meta"><span>90K+ reels</span><span>4M+ views in 24H</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tool-card competitors">
                  <div className="tool-head"><span><b>Monitoring Competitors</b></span><span className="ok-dot"><svg className="icon"><use href="#i-check"/></svg></span></div>
                  <div className="comp-card"><img src="/assets/img/OEgdUtUv5NwE3q5AOtkv98u8Av8.png" alt="Spotify competitor ad" /><span className="comp-dot">Spotify</span></div>
                  <div className="comp-card"><img src="/assets/img/7lIkPz2yX7OPXXLeficOVMj2E.png" alt="DoorDash competitor ad" /><span className="comp-dot">DoorDash</span></div>
                </div>

                <div className="tool-card analysing">
                  <div className="tool-head"><span><b>Analysing Creatives</b></span><span className="ok-dot"><svg className="icon"><use href="#i-check"/></svg></span></div>
                  <div className="analyse-photo">
                    <img src="/assets/img/wy2ji2r7x9mwXdNvQ2onIuW0sU.jpg" alt="Airbnb ad creative" />
                    <span className="tag tag-left">Messaging</span>
                    <span className="tag tag-left bottom">No CTA</span>
                    <span className="tag tag-right top">Graphics</span>
                    <span className="tag tag-right bottom">Colours</span>
                  </div>
                </div>

                <figure className="ad-card alo"><img src="/assets/img/RiaFTFnoWFSs6S2ZGb2ZhN7ZrTk.jpg" alt="Alo leggings ad" /></figure>
                <figure className="ad-card duolingo"><img src="/assets/img/krslNxF9VXAoOTqYL6zjBLcHo.png" alt="Duolingo ad" /><span className="published">Published</span></figure>
                <figure className="ad-card nb"><img src="/assets/img/ZsAEABggcj8cV0nEtjTQxNCZw4.jpg" alt="New Balance ad" /></figure>
                <figure className="ad-card headspace"><img src="/assets/img/eugr73diMVVUkmKvi45pFco7XCY.png" alt="Headspace ad" /><span className="published">Published</span></figure>
              </div>
            </div>
          </div>
          <div className="ticker-lane lane-right">
            <div className="ticker-track lane-track-offset" data-ticker-mirror></div>
          </div>
          <div className="floating-agent" aria-hidden="true">
            <span className="agent-mark">✳</span>
            <span className="agent-word">getcrux.</span>
            <span className="agent-state">Analysing</span>
            <span className="agent-cursor"></span>
          </div>
        </div>

        <div className="logo-wall reveal">
          <img src="/assets/img/e6nLHATpQrSR9cWUq4g8TyCiB6I.png" alt="Rappi" />
          <img src="/assets/img/O7aCLtaY2ZlRSmOa96pyWCtVNI.png" alt="Channel Factory" />
          <img src="/assets/img/bNnlowoL5MKY1rNVMWtgaecbsl4.png" alt="Noom" />
          <img src="/assets/img/OqPWA6tNn7Xds4IVOooDtpx68.png" alt="Rocket Money" />
          <img src="/assets/img/RJQMbWd7TXWJ4I0toub0GHLfYA.png" alt="Cloaked" />
          <img src="/assets/img/q0nKWeBgeRNudmzBIBrv5ApQdqY.png" alt="Ethos" />
          <img src="/assets/img/liFurctRNz7U2KCIeqjs2GierWc.png" alt="Spellbook" />
          <img src="/assets/img/1A3HX8RvGk7NCDsRBEjJ4BTZQBI.png" alt="Jerry" />
          <img src="/assets/img/I2nhMZ1KhZlHqC4CbwOqycPZi4.png" alt="SoFi" />
          <img src="/assets/img/JqFnImnOe1KOQI7DEUEpWcTbEus.png" alt="Malka" />
          <img src="/assets/img/LaFE3TlKeMRhxoFXKcCLvL48E68.png" alt="QuinStreet" />
          <img src="/assets/img/SC07hFX8POLAucJeo1zl5pzEOE.png" alt="Moodi" />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement" data-nav="light">
        <div className="statement-inner reveal">
          <h2>The self-improving<br />system for<br />performance creatives</h2>
          <a className="btn btn-dark" href="/contact">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
        </div>
        <figure className="float-card fc-nu"><img src="/assets/img/ueELDZ87Mw86vziz7O8CjkApw3s.jpg" alt="Nu bank ad" /></figure>
        <figure className="float-card fc-oura"><img src="/assets/img/xFURqGsXUN6toDv4jOB2Qn5p0w.jpg" alt="Oura ring ad" /></figure>
        <figure className="float-card fc-hoka"><img src="/assets/img/tTnrq0ahEABdotKxakXoErrnbrs.jpg" alt="Hoka running ad" /></figure>
        <figure className="float-card fc-instacart"><img src="/assets/img/iVChT0YNC0tC43Pu9rHc6i9YWE.jpg" alt="Instacart grocery ad" /></figure>
      </section>

      {/* PROBLEM */}
      <section className="problem" data-nav="dark">
        <div className="section-head reveal">
          <span className="eyebrow">Problem</span>
          <h2>You don’t just need “more ads”.<br />You need a tighter feedback loop.</h2>
        </div>

        <div className="insight-marquee">
          <div className="insight-track" data-duplicate>
            <div className="marquee-set">
            <article className="insight-card" style={{ backgroundImage: "url('/assets/img/WrSTsL9gQjSGD6COsCdPPzDkc0.png')" }}>
              <h3>What Kind Of Content My Audience Relate With?</h3>
              <div className="insight-panel">
                <div className="panel-title"><span className="tiny-ico"><svg className="icon"><use href="#i-instagram"/></svg></span>Organic Content</div>
                <div className="creator-row"><img src="/assets/img/yk6PqHzeljnwnTOIfqVwbZTOp2E.jpg" alt="" /><b>Thabie Makojane</b><img src="/assets/img/1tnb0SpDCmtNEMZr1V97Qs9vT6s.jpg" alt="" /><b>Nikki Watson</b></div>
                <div className="creator-grid">
                  <img src="/assets/img/NbSebJDZCFdlHP0XmJC7uYLwQss.jpg" alt="Creator filming a selfie video" />
                  <img src="/assets/img/muGkKaW2qwmFwcjhZEhQgScr95I.jpg" alt="Creator taking a photo" />
                  <img src="/assets/img/3FaWAk9t5MxTxQfcynrHHoWV3vo.jpg" alt="Creator walking down a city street" />
                  <img src="/assets/img/manlpeVylvW1R7hlVdQirfEmE8.jpg" alt="Creator on a city sidewalk" />
                </div>
                <span className="more-chip">+23</span>
              </div>
            </article>

            <article className="insight-card" style={{ backgroundImage: "url('/assets/img/4UaJrfQOXRflih0qys9LhNs5Cg.png')" }}>
              <h3>What Does My Audience Say About<br />My Brand?</h3>
              <div className="insight-panel compact">
                <div className="panel-title"><span className="tiny-ico">✎</span>Comments</div>
                <div className="comment-row"><img src="/assets/img/yk6PqHzeljnwnTOIfqVwbZTOp2E.jpg" alt="" /><div><b>Thabie Makojane</b><p>Wow! I love the new one.</p><small>6w &nbsp; Like &nbsp; Reply</small></div></div>
                <div className="panel-title second"><span className="tiny-ico"><svg className="icon"><use href="#i-star"/></svg></span>Reviews</div>
                <div className="comment-row"><img src="/assets/img/1tnb0SpDCmtNEMZr1V97Qs9vT6s.jpg" alt="" /><div><b>Nikki Watson</b><p>Really Tasty Food, Smoky, Saucy, Spicy.</p><small>Updated 3 days ago &nbsp; 20 Upvotes</small></div></div>
              </div>
            </article>

            <article className="insight-card" style={{ backgroundImage: "url('/assets/img/y6kVYz0pYR1n07vNhMMpXxJYnQ.png')" }}>
              <h3>Why Did One Version Of This Creative Work But The Other Didn’t?</h3>
              <div className="ad-compare">
                <div><span className="mini-label"><svg className="icon"><use href="#i-star"/></svg> Ad 1</span><img src="/assets/img/eugr73diMVVUkmKvi45pFco7XCY.png" alt="Headspace ad one" /><small>Better CTR</small></div>
                <div><span className="mini-label"><svg className="icon"><use href="#i-star"/></svg> Ad 2</span><img src="/assets/img/ZAye9pfNeVixXUH5cQsAwbNKZWc.jpg" alt="Headspace ad two" /><small>Lower CTR</small></div>
              </div>
            </article>

            <article className="insight-card" style={{ backgroundImage: "url('/assets/img/FKYCT85q63O7pdFSxGRLbzZ2o.png')" }}>
              <h3>What Should We Launch Next?</h3>
              <div className="options">
                <div><span className="opt-ico">▣</span>UGC Monologue vs Street Interview vs Skit</div>
                <div><span className="opt-ico"><svg className="icon"><use href="#i-clock"/></svg></span>10 sec video vs 1 min video</div>
                <div><span className="opt-ico"><svg className="icon"><use href="#i-lock"/></svg></span>Product plug in first 3 seconds or mid-way?</div>
                <div><span className="opt-ico"><svg className="icon"><use href="#i-pin"/></svg></span>Outdoor location vs indoor location?</div>
              </div>
            </article>

            <article className="insight-card" style={{ backgroundImage: "url('/assets/img/Spn2l74jL0DY1MtYR5PqVqszs.png')" }}>
              <h3>Which Influencers Build The Most Trust?</h3>
              <div className="influencer">
                <img src="/assets/img/OiTAdfWJhzRK0SskJDwclbC3cM.jpg" alt="Three people thinking beside platform icons" />
                <div className="influencer-rows">
                  <span><b>Gender</b><em>Female</em><em>Male</em></span>
                  <span><b>Age</b><em>21–25</em><em>26–30</em></span>
                  <span><b>Language</b><em>English</em><em>Spanish</em></span>
                </div>
                <img className="rank" src="/assets/img/aczqpTOuyIvZrznVYqIo6RatA.png" alt="Top creators ranked" />
              </div>
            </article>

            <article className="insight-card" style={{ backgroundImage: "url('/assets/img/oBYtkqo7S5O9Aoa06DQpRntmqfs.png')" }}>
              <h3>How Come This Format Works For Our Competitors?</h3>
              <div className="competitor-compare">
                <div><span className="mini-label">Our Ad</span><img src="/assets/img/ueELDZ87Mw86vziz7O8CjkApw3s.jpg" alt="Nu ad" /></div>
                <div><span className="mini-label">Competitor</span><img src="/assets/img/N6cl7Kw64yAMBoo8EmPYbrZR1aU.jpg" alt="Uber ad" /></div>
              </div>
            </article>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" data-nav="dark">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>From insights to creatives in mins<br />with a team of AI agents</h2>
        </div>

        <div className="feature-stack">
          <article className="feature reveal">
            <div className="feature-visual visual-command">
              <div className="command-orb"></div>
              <div className="ask-bar"><svg className="icon"><use href="#i-search"/></svg><span>Ask anything…</span><i className="ask-cursor"></i></div>
              <div className="mini-agent"><span>✳</span> getcrux.</div>
            </div>
            <div className="feature-copy">
              <span className="chip chip-green">Copilot</span>
              <h3>The Command Centre</h3>
              <p className="feature-sub">Run your entire paid media workflow from one place</p>
              <ul className="feature-list">
                <li className="active"><b>Analyse</b><span>Bring data together from all platforms in one place to have a combined view on what’s working</span></li>
                <li><b>Research</b></li>
                <li><b>Create &amp; iterate</b></li>
                <li><b>Publish</b></li>
              </ul>
            </div>
          </article>

          <article className="feature reveal">
            <div className="feature-visual visual-strategist">
              <div className="platforms">
                <span className="platform"><img src="/assets/img/0pkl6T4kGWLTw2fbZsS0BhTV0M.png" alt="Google" /><small>Google</small></span>
                <span className="platform"><img src="/assets/img/nMUe0IJ69xvNV1AbDOXtzvzEuEw.png" alt="Meta" /><small>Meta</small></span>
                <span className="platform"><img src="/assets/img/mlw2CVuXqYM1pC6vIRmMoZzQHc.png" alt="TikTok" /><small>TikTok</small></span>
              </div>
            </div>
            <div className="feature-copy">
              <span className="chip chip-orange">Analyse</span>
              <h3>The Creative Strategist</h3>
              <p className="feature-sub">Know exactly what’s working for your ads and why</p>
              <ul className="feature-list">
                <li className="active"><b>Cross-platform reporting</b><span>Bring data together from all platforms in one place to have a combined view on what’s working</span></li>
                <li><b>AI tagging</b></li>
                <li><b>Creative fatigue detection</b></li>
                <li><b>Creative deep-dive</b></li>
              </ul>
            </div>
          </article>

          <article className="feature reveal">
            <div className="feature-visual visual-researcher">
              <div className="research-grid">
                <div className="research-tile"><span>Competitors Ads</span><img src="/assets/img/El6kR9QRM2wAZvaO51EASERfw.jpg" alt="Competitor ad" /></div>
                <div className="research-tile"><span>Organic trends</span><img src="/assets/img/8oNnyZa9ks8Bm3lZI0nfRFnvPmQ.jpg" alt="Organic trend" /></div>
                <div className="research-tile"><span>Curated collections</span><img src="/assets/img/uFDI7cV7OLb089H2sUsf5dWzY.jpg" alt="Curated ad collection" /></div>
              </div>
              <div className="monitor-bar"><span className="pulse"></span>Competitors Ads monitoring…</div>
            </div>
            <div className="feature-copy">
              <span className="chip chip-blue">Research</span>
              <h3>The Market Researcher</h3>
              <p className="feature-sub">Keeps an eye on other brands and social trends to find inspiration</p>
              <ul className="feature-list">
                <li className="active"><b>Competitor insights</b><span>Monitors competitor ads and helps you dive deeper into competitor’s creative strategy to figure out gaps and understand what we can do better</span></li>
                <li><b>Social listening</b></li>
                <li><b>Organic trends</b></li>
                <li><b>Curated collections</b></li>
              </ul>
            </div>
          </article>

          <article className="feature reveal">
            <div className="feature-visual visual-producer">
              <div className="brandkit-bar"><span>Brand Kit</span><span className="analysing-state"><i></i>analysing…</span></div>
              <div className="swatches"><i></i><i></i><i></i><i></i><i></i></div>
              <div className="producer-frame"><span></span><span></span><span></span></div>
            </div>
            <div className="feature-copy">
              <span className="chip chip-pink">Create</span>
              <h3>The Creative Producer</h3>
              <p className="feature-sub">Go from ideas to on-brand creatives in minutes</p>
              <ul className="feature-list">
                <li className="active"><b>Understands brand guidelines</b><span>Our AI understands your brand kit and stores that as context for all creative generation</span></li>
                <li><b>Winner iterations</b></li>
                <li><b>Repurposing content library</b></li>
                <li><b>Fresh concepts from scratch</b></li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* SPEED */}
      <section className="speed" data-nav="dark">
        <div className="speed-panel reveal">
          <span className="eyebrow">Inputs &gt; outputs</span>
          <h2>From 4 weeks to<br />4 minutes per ad</h2>
          <a className="btn btn-light" href="https://calendly.com/atharva-getcrux/30min" target="_blank" rel="noopener">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>

          <div className="speed-collage" aria-hidden="true">
            <div className="speed-col">
              <div className="skeleton"><i></i><i></i><i></i><i></i></div>
              <div className="skeleton"><i></i><i></i><i></i></div>
            </div>
            <div className="speed-card step-card"><span>Analysing your ads and<br />Performance Data…</span><i></i><i></i><i></i><i></i></div>
            <div className="speed-card brand-card"><span>Reading your<br />Brand Kit…</span><i></i><i></i><i></i><i></i></div>
            <div className="speed-card competitor-card"><span>Tracking your<br />Competitors…</span><i></i><i></i><i></i></div>
            <figure className="coke one"><img src="/assets/img/s6GJNHteUZG7zV2nz4yVJdPZiA.png" alt="Coca-Cola 100 ad" /><span className="published">Published</span></figure>
            <figure className="coke two"><img src="/assets/img/disFghj1AAFUV7vbD3eY2FisUE.jpg" alt="Coca-Cola Open for Happiness ad" /></figure>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="cases" data-nav="dark">
        <div className="section-head reveal">
          <span className="eyebrow">Case studies</span>
          <h2>Trusted by the best in the biz</h2>
        </div>

        <div className="case-tabs reveal" role="tablist" aria-label="Customer stories">
          <button className="case-tab active" data-case="cloaked" role="tab" aria-selected="true">Cloaked</button>
          <button className="case-tab" data-case="motion" role="tab" aria-selected="false">Motion</button>
          <button className="case-tab" data-case="rappi" role="tab" aria-selected="false">Rappi</button>
        </div>

        <div className="case-stage">
          <article className="quote-card case-slide active" data-case-panel="cloaked">
            <div className="quote-left">
              <h3>Scaled 10x, raised $375M</h3>
              <blockquote>“We’ve been able to experiment incredibly fast in the last few months — only because we’re able to find insights, convert to creatives and launch in days rather than weeks. Shoutout to the GetCrux team for being ahead of the curve and helping us ship at the speed, diversity, and quality we wanted.”</blockquote>
              <img className="quote-logo" src="/assets/img/Io7FVupohm1h48HVXmTAxAKmvn4.png" alt="Cloaked" />
            </div>
            <figure className="quote-person">
              <img src="/assets/img/Chvwi9IFi92cFXkisIJBGqrh3w.png" alt="Pulkit Gupta, Head of Marketing at Cloaked" />
              <figcaption><b>Pulkit Gupta</b><span>Head of Marketing</span></figcaption>
            </figure>
          </article>

          <article className="quote-card case-slide" data-case-panel="motion" hidden>
            <div className="quote-left">
              <h3>7,600+ assets in 4 months</h3>
              <blockquote>“How just 3 people on the creative team at Motion execute aggressive creative testing on paid social by generating 7,600+ assets in 4 months.”</blockquote>
              <span className="text-logo">motion</span>
            </div>
            <figure className="quote-person">
              <img src="/assets/img/yt-motion.jpg" alt="Motion creative team" />
              <figcaption><b>Gary Yin</b><span>VP Growth, Motion</span></figcaption>
            </figure>
          </article>

          <article className="quote-card case-slide" data-case-panel="rappi" hidden>
            <div className="quote-left">
              <h3>Creative velocity at scale</h3>
              <blockquote>“Rappi uses GetCrux to research, produce and launch more creative across every channel — without adding headcount.”</blockquote>
              <span className="text-logo">Rappi</span>
            </div>
            <figure className="quote-person">
              <img src="/assets/img/yt-cloaked.jpg" alt="Growth team at Rappi" />
              <figcaption><b>Rappi</b><span>Growth team</span></figcaption>
            </figure>
          </article>
        </div>

        <a className="btn btn-light case-cta reveal" href="https://calendly.com/atharva-getcrux/30min" target="_blank" rel="noopener">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
      </section>

      {/* INTEGRATIONS */}
      <section className="integrations" data-nav="dark">
        <div className="stack-panel reveal">
          <span className="eyebrow">Integrations &amp; tech stack</span>
          <h2>Connects to your entire stack</h2>
          <a className="btn btn-light" href="https://calendly.com/athurva-getcrux/30min" target="_blank" rel="noopener">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>

          <div className="stack-map">
            <svg className="connectors" viewBox="0 0 1120 660" fill="none" aria-hidden="true">
              <path d="M301 96 C 402 122, 472 168, 551 213" stroke="#6f6455" strokeOpacity=".55" strokeWidth="1.3"/>
              <path d="M822 96 C 712 124, 642 170, 570 212" stroke="#6f6455" strokeOpacity=".55" strokeWidth="1.3"/>
              <path d="M384 434 C 452 330, 498 272, 552 228" stroke="#6f6455" strokeOpacity=".55" strokeWidth="1.3"/>
              <path d="M739 434 C 666 330, 622 272, 568 228" stroke="#6f6455" strokeOpacity=".55" strokeWidth="1.3"/>
            </svg>

            <div className="stack-card adplatforms">
              <span className="stack-label">Ad platform</span>
              <div className="stack-logos">
                <span><img src="/assets/img/Y3wHSIaIHgMOyh0Xzb7O2wlcK1M.png" alt="Meta" /></span>
                <span><img src="/assets/img/PZQMz6wEcpplSK7up22j8gqX16s.png" alt="TikTok" /></span>
                <span><img src="/assets/img/VokiAD3olNYYWZGLEtAEt5G75vo.png" alt="Google" /></span>
                <span><img src="/assets/img/AmMvwvh2a0oDiJ6tFia9fEovno.png" alt="LinkedIn" /></span>
                <span><img src="/assets/img/V2n4awsHUasUL5zz9QrFb1BtXA.png" alt="Pinterest" /></span>
                <span><img src="/assets/img/eGvav2gksMn7aSxXTnLRWil7Fs.png" alt="YouTube" /></span>
                <span><img src="/assets/img/wAdLv7ldy77IOxSxxg7qaODaoyg.png" alt="The Trade Desk" /></span>
                <span><img src="/assets/img/CMSpM9kbvIR60kI8P0fDSOuU5Wo.png" alt="AppLovin" /></span>
                <span><img src="/assets/img/JOJqF5ebxaJMnwHeqzRFp4TqH0s.png" alt="Reddit" /></span>
                <span><img src="/assets/img/NxrWEWjph80Mk6V2N3YJ3t4BA.png" alt="Snapchat" /></span>
                <span><img src="/assets/img/Auv9Oz3Sxj1D8UINektD20ZycGA.png" alt="X" /></span>
              </div>
            </div>

            <div className="stack-card attribution">
              <span className="stack-label">Attribution &amp; data</span>
              <div className="stack-logos">
                <span><img src="/assets/img/NSZ91qOsWUzFAOP5Hp8QmNVS1pg.png" alt="AppsFlyer" /></span>
                <span><img src="/assets/img/NYlsT7D5KTdvLzRoalBSJsSYFaI.png" alt="Singular" /></span>
                <span><img src="/assets/img/Bxo8aKNZ7mGevxYezc4hMdyh64.png" alt="Adobe Analytics" /></span>
                <span><img src="/assets/img/Fg26q4oqfaBEVlxoAxCqyOqJpw.png" alt="Power BI" /></span>
                <span><img src="/assets/img/RClMPKLk2eJ1dnySr8AS0A05Jo.png" alt="Tableau" /></span>
                <span><img src="/assets/img/nr13cCdeAafobq3DhyKrLQJ8FE.png" alt="Looker" /></span>
                <span><img src="/assets/img/thurBzHxLOUPpNxrZkTxQ0D20.png" alt="Snowflake" /></span>
              </div>
            </div>

            <div className="stack-card cms">
              <span className="stack-label">CMS</span>
              <div className="stack-logos">
                <span><img src="/assets/img/BRn7S4MwWGHwwRYMnocrZ8bahU.png" alt="Google Drive" /></span>
                <span><img src="/assets/img/wFKv4kw1tv8EjSc6W4aY4KFoM.png" alt="Dropbox" /></span>
                <span><img src="/assets/img/OBikbB7EMbBo26CboxHseultKQ.png" alt="Figma" /></span>
                <span><img src="/assets/img/42x8CHNiscaRwmdrDz5v7M7e1J0.png" alt="Contentstack" /></span>
                <span><img src="/assets/img/nwdN2tr0qx6vB5Tg3FhlISi9l4.png" alt="Adobe" /></span>
              </div>
            </div>

            <div className="stack-card context">
              <span className="stack-label">Brand &amp; custom context</span>
              <div className="stack-logos">
                <span><img src="/assets/img/zWoIYKpCVIdYpQ3L5S3WFBjV8W8.png" alt="Microsoft Excel" /></span>
                <span><img src="/assets/img/ouRCdB468TcKRvhalHRrd0U7os.png" alt="PDF" /></span>
                <span><img src="/assets/img/QTiJ6nb6AIbVnDizNpgiOKOxQ.png" alt="Document" /></span>
              </div>
            </div>

            <div className="stack-center"><span className="mark">✳</span> getcrux.</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" data-nav="dark">
        <div className="section-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>Success stories from the<br />fastest growing teams</h2>
        </div>
        <div className="video-grid reveal">
          <button className="video-card" data-video="kPbu6B7W4dE">
            <span className="video-thumb"><img src="/assets/img/yt-cloaked.webp" alt="Cloaked success story" /><span className="play"><svg className="icon"><use href="#i-play"/></svg></span></span>
            <span className="video-title">Cloaked scaled 10x and raised $375M with a 2-person marketing team using GetCrux</span>
            <span className="video-person">Pulkit Gupta · Head of Marketing, Cloaked</span>
          </button>
          <button className="video-card" data-video="Gtu9t1G3ro">
            <span className="video-thumb"><img src="/assets/img/OrX7k53iNhkukJxJv3uF9pS1ECA.png" alt="Jerry success story" /><span className="play"><svg className="icon"><use href="#i-play"/></svg></span></span>
            <span className="video-title">Jerry iterates 5x faster, going from insights to creatives using GetCrux</span>
            <span className="video-person">Myles Murray · Creative Producer, Jerry</span>
          </button>
          <button className="video-card" data-video="Ez5PRtgPmUo">
            <span className="video-thumb"><img src="/assets/img/yt-motion.webp" alt="Motion success story" /><span className="play"><svg className="icon"><use href="#i-play"/></svg></span></span>
            <span className="video-title">Motion tested over 7,600+ assets on paid social in 4 months with a 3-person creative team</span>
            <span className="video-person">Gary Yin · VP Growth, Motion</span>
          </button>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="compare" data-nav="light">
        <div className="section-head reveal">
          <span className="eyebrow">GetCrux vs. the alternatives</span>
          <h2>GetCrux is a good fit if you need…</h2>
          <a className="btn btn-dark" href="https://calendly.com/atharva-getcrux/30min" target="_blank" rel="noopener">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
        </div>

        <div className="compare-table reveal">
          <div className="compare-row head">
            <div className="compare-feature"></div>
            <div className="compare-brand"><img src="/assets/img/jgY4E0azHO4gJp4Z4TwPNW3T7A.png" alt="GetCrux" /></div>
            <div>Creative gen tools</div>
            <div>Creative reporting tools</div>
            <div>Creative agencies</div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Integrations with your custom source of truth</div>
            <div className="gc"><span className="val-text">Any data source</span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Shared context across Brand, Performance, and Legal</div>
            <div className="gc"><span className="mark ok"><svg className="icon"><use href="#i-check"/></svg></span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Follows Brand and Legal Guidelines</div>
            <div className="gc"><span className="val-text">Built for Enterprises and<br />Strict Regulatory Environments</span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark ok"><svg className="icon"><use href="#i-check"/></svg></div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Creative Production Cost</div>
            <div className="gc"><span className="val-text">Only pay for the creatives<br />you like</span></div>
            <div className="val-text muted">Burns credits for edits, regenerations, and every small change</div>
            <div className="val-text muted">Doesn’t support</div>
            <div className="val-text muted">$500 – $3,000 per concept</div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Time per Usable Creative</div>
            <div className="gc"><span className="val-text strong">&lt;10 min</span></div>
            <div className="val-text muted">30–60 min</div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="val-text muted">2–4 weeks</div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Feedback Loop based on Performance Data</div>
            <div className="gc"><span className="mark ok"><svg className="icon"><use href="#i-check"/></svg></span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark ok"><svg className="icon"><use href="#i-check"/></svg></div>
            <div className="mark ok"><svg className="icon"><use href="#i-check"/></svg></div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Competitor Insights</div>
            <div className="gc"><span className="mark ok"><svg className="icon"><use href="#i-check"/></svg></span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark ok"><svg className="icon"><use href="#i-check"/></svg></div>
            <div className="val-text muted">Ad-hoc</div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Social Listening</div>
            <div className="gc"><span className="mark ok"><svg className="icon"><use href="#i-check"/></svg></span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="val-text muted">Ad-hoc</div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Automated Workflows</div>
            <div className="gc"><span className="mark ok"><svg className="icon"><use href="#i-check"/></svg></span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
          </div>
          <div className="compare-row">
            <div className="compare-feature">Ad Publishing and Media Buying</div>
            <div className="gc"><span className="mark ok"><svg className="icon"><use href="#i-check"/></svg></span></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark x"><svg className="icon"><use href="#i-x"/></svg></div>
            <div className="mark ok"><svg className="icon"><use href="#i-check"/></svg></div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="insights" data-nav="light">
        <div className="section-head reveal">
          <span className="eyebrow">Case studies &amp; blogs</span>
          <h2>Lessons from the best growth<br />&amp; creative teams</h2>
        </div>

        <div className="insight-tabs reveal" role="tablist" aria-label="Content type">
          <button className="insight-tab active" data-insights="cases" role="tab" aria-selected="true">Case studies</button>
          <button className="insight-tab" data-insights="blogs" role="tab" aria-selected="false">Blogs</button>
        </div>

        <div className="article-grid reveal" data-articles="cases">
          <a className="article-card" href="https://getcrux.ai/case-studies/cloaked-case-study" target="_blank" rel="noopener">
            <div className="article-cover"><img src="/assets/img/0JSWCGkrJSBxRLzs1cqMhLrPO8s.png" alt="Cloaked case study cover" /></div>
            <div className="article-body">
              <h3>How Cloaked Gets Nearly Half Its Meta Purchases From AI-Generated Ads</h3>
              <p>How Cloaked’s two-person marketing team runs AI ad campaigns on Meta.</p>
              <div className="byline"><img src="/assets/img/3c1s6eKI4QpwZAsnOu3lwjDyavU.webp" alt="Atharva Padhye" /><span>Atharva Padhye<br /><small>Oct 1, 2026</small></span></div>
            </div>
          </a>
          <a className="article-card" href="https://getcrux.ai/case-studies/jerry-ai-ad-creative-analysis-case-study" target="_blank" rel="noopener">
            <div className="article-cover"><img src="/assets/img/OrX7k53iNhkukJxJv3uF9pS1ECA.png" alt="Jerry case study cover" /></div>
            <div className="article-body">
              <h3>How Jerry’s Growth Team Replaced Days Of Ad Analysis With One Question</h3>
              <p>Myles Murray explains how GetCrux turned days of Meta ad analysis into one prompt and unlocked AI static ads.</p>
              <div className="byline"><img src="/assets/img/3c1s6eKI4QpwZAsnOu3lwjDyavU.webp" alt="Atharva Padhye" /><span>Atharva Padhye<br /><small>Jun 16, 2026</small></span></div>
            </div>
          </a>
          <a className="article-card" href="https://getcrux.ai/case-studies/motion-case-study" target="_blank" rel="noopener">
            <div className="article-cover"><img src="/assets/img/cT5qxRiaxrddEi4yHScpPtnXyrI.png" alt="Motion case study cover" /></div>
            <div className="article-body">
              <h3>How Motion Generated 7,600+ Assets In 4 Months With AI</h3>
              <p>How just 3 people on the creative team at Motion execute aggressive creative testing on paid social.</p>
              <div className="byline"><img src="/assets/img/3c1s6eKI4QpwZAsnOu3lwjDyavU.webp" alt="Atharva Padhye" /><span>Atharva Padhye<br /><small>May 12, 2026</small></span></div>
            </div>
          </a>
        </div>

        <div className="article-grid reveal" data-articles="blogs" hidden>
          <a className="article-card" href="https://getcrux.ai/blogs" target="_blank" rel="noopener">
            <div className="article-cover"><img src="/assets/img/blog-cover.png" alt="Athleisure advertising research cover" /></div>
            <div className="article-body">
              <h3>Athleisure advertising research: 2,090 live Meta ads, and almost none older than a month</h3>
              <p>Launch days, format mix, hooks and the ads that stayed from Gymshark, Alo Yoga, Lululemon, Athleta and YoungLA.</p>
              <div className="byline"><img src="/assets/img/3c1s6eKI4QpwZAsnOu3lwjDyavU.webp" alt="Atharva Padhye" /><span>Atharva Padhye<br /><small>Oct 9, 2026</small></span></div>
            </div>
          </a>
          <a className="article-card" href="https://getcrux.ai/blogs" target="_blank" rel="noopener">
            <div className="article-cover"><img src="/assets/img/cT5qxRiaxrddEi4yHScpPtnXyrI.png" alt="AI platforms article cover" /></div>
            <div className="article-body">
              <h3>5 Best AI Platforms for Performance Marketing Analytics in 2026</h3>
              <p>Compare GetCrux, Motion, Alison.ai, Icon, and MagicBrief across creative intelligence, scoring and attribution.</p>
              <div className="byline"><img src="/assets/img/3c1s6eKI4QpwZAsnOu3lwjDyavU.webp" alt="Atharva Padhye" /><span>Atharva Padhye<br /><small>May 11, 2025</small></span></div>
            </div>
          </a>
          <a className="article-card" href="https://getcrux.ai/blogs" target="_blank" rel="noopener">
            <div className="article-cover"><img src="/assets/img/OrX7k53iNhkukJxJv3uF9pS1ECA.png" alt="Video ad analysis article cover" /></div>
            <div className="article-body">
              <h3>6 Best Video Ad Analysis &amp; Hook Optimization Tools (2026)</h3>
              <p>Analyze hooks, track CTR, CPA, and optimize video ad performance across platforms.</p>
              <div className="byline"><img src="/assets/img/3c1s6eKI4QpwZAsnOu3lwjDyavU.webp" alt="Atharva Padhye" /><span>Atharva Padhye<br /><small>Jun 22, 2025</small></span></div>
            </div>
          </a>
        </div>

        <a className="btn btn-dark view-all reveal" href="https://getcrux.ai/case-studies" target="_blank" rel="noopener">View all <svg className="icon"><use href="#i-arrow"/></svg></a>
      </section>

      {/* CTA */}
      <section className="cta" data-nav="light">
        <div className="cta-panel reveal">
          <div className="cta-copy">
            <h2>Ready to 4x your<br />creative output?</h2>
            <a className="btn btn-dark" href="/contact">Book a demo <svg className="icon"><use href="#i-arrow"/></svg></a>
          </div>
          <div className="notifications" aria-hidden="true">
            <div className="notif"><span className="notif-ico yellow">$</span><div><b>Revenue milestone</b><p>You made 10% more than last month.</p><small>Oct vs Nov</small></div><time>2m ago</time></div>
            <div className="notif"><span className="notif-ico blue"><svg className="icon"><use href="#i-chart"/></svg></span><div><b>Audience growing</b><p>34 new followers in 24h after your last drop.</p><small>Organic</small></div><time>14m ago</time></div>
            <div className="notif"><span className="notif-ico purple"><svg className="icon"><use href="#i-star"/></svg></span><div><b>Plan upgrade</b><p>@marcus.wb upgraded to Pro. +$20/mo to MRR.</p><small>Upgrade</small></div><time>1h ago</time></div>
            <div className="notif"><span className="notif-ico pink"><svg className="icon"><use href="#i-chart"/></svg></span><div><b>New paid content view</b><p>“Vol. 03 — Process &amp; Tools” hit 218 views in 2h.</p><small>Organic</small></div><time>2h ago</time></div>
            <div className="notif"><span className="notif-ico green"><svg className="icon"><use href="#i-user"/></svg></span><div><b>New subscriber</b><p>@danielacruz joined your Pro plan — $29/mo</p><small>Pro plan</small></div><time>just now</time></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" data-nav="light">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list reveal">
          <div className="faq-item open">
            <button className="faq-q" aria-expanded="true">Will my creatives and performance data be used for training any AI models?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>No. We strictly DO NOT train any of our own or any 3rd party models using any of your data. We use Enterprise APIs of trusted models that explicitly ensure this.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">What is the best way to start using GetCrux?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Set up an intro chat with the founders and our in-house creative strategists who will spend time understanding your current process, upcoming goals, and create the best setup for you on GetCrux.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">Can AI accurately follow our brand and legal guidelines?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>We have built GetCrux keeping in mind how important brand guidelines are. As a part of onboarding, we ingest your brand guide and make sure every generated AI output follows those guidelines.</p></div>
          </div>
          <div className="faq-item">
            <button className="faq-q" aria-expanded="false">We don’t trust ad platform data. We have our own source of truth. Can GetCrux connect with that?<span className="faq-sign"><svg className="icon"><use href="#i-plus"/></svg></span></button>
            <div className="faq-a"><p>Yes, absolutely. We build custom integrations with any data source — your MMP, analytics dashboards, data warehouses, or any other tools — and bring all data in one place on GetCrux.</p></div>
          </div>
        </div>
      </section>

    </main>
    <div className="video-modal" id="videoModal" aria-hidden="true">
      <button className="video-backdrop" data-close-video aria-label="Close video"></button>
      <div className="video-frame">
        <button className="video-close" data-close-video aria-label="Close video">×</button>
        <div id="videoMount"></div>
      </div>
    </div>
    </>
  );
}
