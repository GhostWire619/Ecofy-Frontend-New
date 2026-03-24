export default function NewsSection({ posts }) {
  const [featured, left, right] = posts;

  return (
    <section className="section shell news-redesign">
      <div className="news-redesign-head">
        <div>
          <p className="eyebrow">Journal</p>
          <h2>Field intelligence, platform notes, and transformation updates</h2>
        </div>
        <a className="news-redesign-view-all" href="/blog-left-sidebar">
          View all posts
        </a>
      </div>

      <div className="news-redesign-layout">
        <article className="news-redesign-featured">
          <img src={featured.image} alt={featured.title} />
          <div className="news-redesign-overlay">
            <span>{featured.date}</span>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <a href={featured.href}>Read article</a>
          </div>
        </article>

        <div className="news-redesign-list">
          {[left, right].map((post) => (
            <article key={post.title} className="news-redesign-item">
              <img src={post.image} alt={post.title} />
              <div>
                <span>{post.date}</span>
                <h3>{post.title}</h3>
                <a href={post.href}>Explore</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
