import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "为什么信息越多，我们越难形成自己的判断",
  description:
    "信息没有替我们消除不确定性，只是让逃避决定有了更体面的理由。一次从信息过载向下，直至责任与有限性的追问。",
};

const layers = [
  ["01", "淤积"],
  ["02", "借脑"],
  ["03", "避险"],
  ["04", "归属"],
  ["05", "依存"],
  ["06", "有限"],
  ["07", "承担"],
];

export default function ArticlePage() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="/" aria-label="深处，返回首页">
          深处<span>。</span>
        </a>
        <p className="header-note">关于判断、技术与生活的长文</p>
      </header>

      <article>
        <header className="article-header shell">
          <p className="article-kicker">思考 / 追本 001</p>
          <h1>为什么信息越多，我们越难形成自己的判断</h1>
          <p className="article-deck">
            信息没有替我们消除不确定性，只是让逃避决定有了更体面的理由。
          </p>
          <div className="article-byline">
            <time dateTime="2026-08-05">2026.08.05</time>
            <span>8 分钟阅读</span>
            <span>深处编辑部</span>
          </div>
        </header>

        <div className="article-layout shell">
          <aside className="toc" aria-label="文章目录">
            <p className="toc-title">目录 / Contents</p>
            <ol>
              {layers.map(([index, title]) => (
                <li key={index}>
                  <a href={`#layer-${index}`}>{`${index}　${title}`}</a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="prose">
            <p className="opening">
              我们拥有了人类历史上最便宜的信息，却越来越不敢说“这是我的判断”。书签不断增加，稍后阅读永远没有稍后；一个观点刚要成形，下一篇文章就递来相反的证据。我们以为自己仍在求证，其实只是把决定往后推。
            </p>

            <section className="layer" id="layer-01">
              <div className="layer-header">
                <span className="layer-index">01 / 07</span>
                <h2>淤积</h2>
              </div>
              <p>
                信息稀缺时，更多信息意味着更清楚。信息过剩后，更多信息首先意味着更多分岔。每个事实都带着它的反例，每种解释都能找到支持者，每条结论旁边都站着一条“也许并非如此”。
              </p>
              <p>
                于是，搜集不再缩小问题，反而扩张问题。我们用旧时代的直觉处理新时代的丰裕：相信只要再读一篇，就能等到所有证据整齐地指向同一处。但信息世界没有最后一页。所谓“充分了解”只是地平线，你向前一步，它也向后退一步。
              </p>
              <p className="fracture">
                可如果材料永远不会齐全，为什么我们仍不肯停下来？
              </p>
            </section>

            <section className="layer" id="layer-02">
              <div className="layer-header">
                <span className="layer-index">02 / 07</span>
                <h2>借脑</h2>
              </div>
              <p>
                因为搜集有一种几乎和思考一样的触感。收藏、摘录、比较、转发，都在制造认知劳动的忙碌感。我们搬运了很多人的结论，便误以为自己已经走过他们抵达结论的路。
              </p>
              <p>
                但他人的判断只能借来使用，不能替你生成。它像租来的房间：家具齐全，却没有一件东西说明你是谁。真正的判断必须删掉大部分可能，承认一条路径比其他路径更值得走。搜集恰好相反——它把所有门都留着。
              </p>
              <p className="fracture">
                我们为什么宁愿住在别人的答案里，也不肯关上一扇自己的门？
              </p>
            </section>

            <section className="layer" id="layer-03">
              <div className="layer-header">
                <span className="layer-index">03 / 07</span>
                <h2>避险</h2>
              </div>
              <p>
                因为判断不是一个句子，而是一次暴露。只要你说“我认为”，就把自己放进了可被证伪、可被嘲笑、可被追责的位置。保持未决则安全得多：错的是信息不完整，错的是专家分歧，错的是环境变化——总之还轮不到你。
              </p>
              <p>
                “我还需要研究”因此成了最体面的退路。它听起来谦逊、理性、慎重，却悄悄把错误的成本推给了未来。未来的自己会更聪明，未来的材料会更完整，未来的时机会更明确。现在的自己只需继续旁观。
              </p>
              <p className="fracture">
                可人真正害怕的，似乎不只是犯错。一个错误为什么会伤到自我？
              </p>
            </section>

            <section className="layer" id="layer-04">
              <div className="layer-header">
                <span className="layer-index">04 / 07</span>
                <h2>归属</h2>
              </div>
              <p>
                因为许多观点早已不是对事实的描述，而是群体的暗号。你相信什么，暗示你和谁站在一起；你质疑什么，暗示你准备离开谁。改变判断不再只是更新一个命题，也可能意味着背叛一种身份。
              </p>
              <p>
                所以我们搜索的常常不是“什么是真的”，而是“说什么是安全的”。先看熟悉的人如何表态，再估算一句话会换来赞许还是疏远。信息在这里没有帮助我们认识世界，它只是帮我们测量人群的风向。
              </p>
              <p className="fracture">
                为什么被一群人接纳，会比看清一个事实更有重量？
              </p>
            </section>

            <section className="layer" id="layer-05">
              <div className="layer-header">
                <span className="layer-index">05 / 07</span>
                <h2>依存</h2>
              </div>
              <p>
                因为在人类漫长的时间里，离开群体不是尴尬，而是危险。我们靠他人的目光确认边界，靠共同的判断协调行动。一个完全不受他人影响的人，并不更自由；他很可能根本无法在人群中生存。
              </p>
              <p>
                网络放大了这套古老装置。过去，一个判断只在村庄里接受检验；现在，它瞬间面对无数陌生人的裁决。我们的神经系统仍把排斥当作逼近身体的威胁，于是先学会了预测反应，后来才想起问题本身。
              </p>
              <p className="fracture">
                但即使没有旁人的目光，我们也不可能等到绝对确定。是什么迫使判断发生？
              </p>
            </section>

            <section className="layer" id="layer-06">
              <div className="layer-header">
                <span className="layer-index">06 / 07</span>
                <h2>有限</h2>
              </div>
              <p>
                是时间。信息可以无限增长，生命却按秒减少。任何行动都有窗口：职业要不要换，关系要不要继续，一件事值不值得做。等到证据完整，问题往往已经被时间替你决定。
              </p>
              <p>
                因此判断从来不是从事实中提取出唯一答案。它是在有限时间里，拿不完整的事实，依据某种价值排序，做一次不可完全撤销的关闭。事实只能告诉你“可能会发生什么”，不能告诉你“哪种代价值得承受”。
              </p>
              <p className="fracture">
                当事实走到尽头，究竟是谁替我们迈出最后一步？
              </p>
            </section>

            <section className="layer terminal" id="layer-07">
              <div className="layer-header">
                <span className="layer-index">07 / 07</span>
                <h2>承担</h2>
              </div>
              <p>
                是那个愿意承担后果的自己。
              </p>
              <p>
                判断的底部不是知识，而是责任。你必须在无法确定时决定相信什么，在无法两全时决定放弃什么，在无人担保时决定把自己交给哪一种未来。更多信息可以改善这个决定，却永远不能免除做决定的人。
              </p>
              <p>
                所以我们缺少的往往不是信息，也不是方法。我们缺少的是在不完整的结论下面签名的意愿。独立思考并不意味着找到一个无人能够反驳的答案；那样的答案几乎不存在。
              </p>
              <p className="last-line">
                它意味着：在无人替你负责的地方，你仍然写下自己的名字。
              </p>
            </section>

            <footer className="article-end">
              <a className="back-link" href="/">
                ← 返回全部文章
              </a>
            </footer>
          </div>
        </div>
      </article>
    </main>
  );
}
