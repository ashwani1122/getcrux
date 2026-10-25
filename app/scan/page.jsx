import ScanForm from '../../components/ScanForm';

export const metadata = {
  title: 'Scan – getcrux',
  description:
    'Drop your work email. We identify your brand, run the scan, and send the full report to your inbox.',
};

export default function ScanPage() {
  return (
    <main data-nav="light">
      {/* HERO */}
      <section className="sc-hero" data-nav="light">
        <div className="sc-badge reveal"><span className="dot"></span>14,597,338 ad creatives analyzed</div>
        <h1 className="reveal">Find out what's winning in your<br />ads. And for your competitors.</h1>
        <p className="sc-sub reveal">Drop your work email. We identify your brand, run<br />the scan, and send the full report to your inbox.</p>

        <ScanForm />

        {/* WHAT IT DOES */}
        <div className="sc-cards reveal">
          <div className="sc-card">
            <h3>Creative insights</h3>
            <p>What's working for your ads and why</p>
          </div>
          <div className="sc-card">
            <h3>Competitor insights</h3>
            <p>What others are testing that you're not</p>
          </div>
          <div className="sc-card">
            <h3>Social listening</h3>
            <p>What users say about you and your competition</p>
          </div>
          <div className="sc-card">
            <h3>Creative generation</h3>
            <p>10 ads made for you</p>
          </div>
        </div>

        <p className="sc-trusted reveal">Trusted by the growth and creative teams at <b>Rocket Money, Noom, Rappi, Cloaked</b>, and <b>several Fortune 1000s</b></p>
      </section>
    </main>
  );
}
