import Link from "next/link";

const articles = [
  {
    number: "001",
    title: "为什么信息越多，我们越难形成自己的判断",
    excerpt:
      "信息没有替我们消除不确定性，只是让逃避决定有了更体面的理由。一次从信息过载向下，直至责任与有限性的追问。",
    date: "2026.08.05",
    readingTime: "8 分钟",
    href: "/articles/judgment-in-the-age-of-information",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <Link className="wordmark" href="/" aria-label="深处 Depths，返回首页">
          深处<span>。</span><span className="wordmark-en">Depths</span>
        </Link>
        <p className="header-note">关于判断、技术与生活的长文</p>
      </header>

      <section className="home-intro shell" aria-labelledby="site-title">
        <p className="eyebrow">独立写作 / 2026 —</p>
        <h1 id="site-title">
          在喧哗之外，
          <br />
          把一个问题想到底。
        </h1>
        <p className="intro-copy">
          这里收录缓慢、完整、可以反复阅读的文章。
          <br />
          不追逐更新，只留下仍值得追问的问题。
        </p>
      </section>

      <section className="archive shell" aria-labelledby="archive-title">
        <div className="section-heading">
          <h2 id="archive-title">文章</h2>
          <span>{String(articles.length).padStart(2, "0")}</span>
        </div>

        <ol className="article-list">
          {articles.map((article) => (
            <li key={article.number}>
              <Link className="article-link" href={article.href}>
                <span className="article-number" aria-hidden="true">
                  {article.number}
                </span>
                <span className="article-main">
                  <span className="article-title">{article.title}</span>
                  <span className="article-excerpt">{article.excerpt}</span>
                </span>
                <span className="article-meta">
                  <time dateTime="2026-08-05">{article.date}</time>
                  <span>{article.readingTime}</span>
                </span>
                <span className="article-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer className="site-footer shell">
        <p>文字用来抵抗遗忘，也用来校准自己。</p>
        <p>© 2026 深处</p>
      </footer>
    </main>
  );
}
