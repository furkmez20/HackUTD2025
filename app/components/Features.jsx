"use client";

export default function FeatureItem({ icon, title, description }) {
  return (
    <li className="flex items-start">
      <div className="text-2xl text-[#12352f] mr-4">{icon}</div>
      <div>
        <h3 className="font-bold text-[#12352f]">{title}</h3>
        <p className="text-[#526e5d]">{description}</p>
      </div>
    </li>
  );
}

export default function Features() {
  const items = [
    {
      title: 'AI Assistant & Smart Search',
      desc: 'Query your portfolio and documents with natural language. Get grounded answers with sources and confidence levels.'
    },
    {
      title: 'Document Intelligence',
      desc: 'Auto-extract clauses, lease dates, obligations and sustainability metrics from PDFs and contracts.'
    },
    {
      title: 'Predictive Insights & Alerts',
      desc: 'Detect rising costs, maintenance risk, and lease expiry before they impact returns.'
    },
    {
      title: 'Portfolio Dashboard',
      desc: 'Unified KPIs, heatmaps, and explainable recommendations for fast decisions.'
    }
  ];

  return (
    <section id="features" className="ew-features">
      <div className="ew-container features-inner">
        <div className="features-head">
          <h2>Built for real estate teams</h2>
          <p className="sub">Everything you need to find, trust, and act on property intelligence — in one product.</p>
        </div>

        <div className="features-grid">
          {items.map((it, i) => (
            <article className="feature" key={i}>
              <div className="feature-icon">◦</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <a className="feature-link" href="#">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
