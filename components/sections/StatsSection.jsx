export default function StatsSection({ stats }) {
  return (
    <section className="section shell stats-redesign">
      <div className="stats-redesign-head">
        <p className="eyebrow">Impact metrics</p>
        <h2>Field outcomes across enrollment, distribution, and partner operations</h2>
      </div>

      <div className="stats-redesign-grid">
        {stats.map((stat) => (
          <article key={stat.label} className="stats-redesign-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
