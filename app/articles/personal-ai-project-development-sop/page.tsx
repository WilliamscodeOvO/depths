import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "不要让 AI 猜：个人 AI 项目的完整工作流",
  description:
    "AI 项目真正的风险不是模型能力不足，而是需求、设计与实现混在一起。一套让 Chat、Work、Codex 与项目文件各司其职的个人开发方法。",
};

const layers = [
  ["01", "不猜"],
  ["02", "分工"],
  ["03", "探索"],
  ["04", "固化"],
  ["05", "切片"],
  ["06", "施工"],
  ["07", "回返"],
  ["08", "组织"],
];

export default function ArticlePage() {
  return (
    <main>
      <header className="site-header shell">
        <Link className="wordmark" href="/" aria-label="深处 Depths，返回首页">
          深处<span>。</span><span className="wordmark-en">Depths</span>
        </Link>
        <p className="header-note">关于判断、技术与生活的长文</p>
      </header>

      <article>
        <header className="article-header shell">
          <p className="article-kicker">方法 / 工作流 002</p>
          <h1>不要让 AI 猜：个人 AI 项目的完整工作流</h1>
          <p className="article-deck">
            AI 项目真正的风险不是模型能力不足，而是需求、设计与实现混在一起。
          </p>
          <div className="article-byline">
            <time dateTime="2026-08-10">2026.08.10</time>
            <span>9 分钟阅读</span>
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
              一个人刚有一个产品想法，最自然的冲动就是把一句模糊需求交给 AI，然后等待一个完整项目出现。可这相当于要求同一个角色同时猜测目标、设计方案和工程实现。结果看似迅速，真正使用时却处处需要返工。
            </p>

            <section className="layer" id="layer-01">
              <div className="layer-header">
                <span className="layer-index">01 / 08</span>
                <h2>不猜</h2>
              </div>
              <p>
                AI 项目最常见的失败，并不是模型写不出代码，而是项目从未真正回答“为什么做、做什么、给谁使用、什么才算成功”。一句模糊需求直接进入开发，AI 只能用概率填补空白：它替你选择用户，替你想象场景，替你判断哪些功能重要。
              </p>
              <p>
                这些猜测常常各自合理，组合起来却未必是你想要的产品。界面可以精致，功能可以运行，方向仍然可能错。越早写出的代码越多，错误方向的沉没成本也越高。
              </p>
              <p className="fracture">
                真正需要被管理的，不是 AI 的能力，而是项目里尚未消除的不确定性。
              </p>
            </section>

            <section className="layer" id="layer-02">
              <div className="layer-header">
                <span className="layer-index">02 / 08</span>
                <h2>分工</h2>
              </div>
              <p>
                一个稳定的个人 AI 项目，需要把三种不确定性交给三个不同阶段。Chat 消除需求的不确定性：它陪你发现问题、比较方向、说清目标。Work 消除设计的不确定性：它把想法变成结构、规范与可以检查的方案。Codex 消除实现的不确定性：它按照已经确定的设计施工、调试和验证。
              </p>
              <p>
                项目文件夹则负责让所有角色共享同一份事实。对话会结束，模型会切换，记忆会衰减；写进 README、AGENTS 和设计文档的共识，才有机会在下一次工作中保持原样。
              </p>
              <p className="fracture">
                人不必成为程序员，但必须保留三种权力：发起项目、作出关键决定、完成最终验收。
              </p>
            </section>

            <section className="layer" id="layer-03">
              <div className="layer-header">
                <span className="layer-index">03 / 08</span>
                <h2>探索</h2>
              </div>
              <p>
                项目首先属于 Chat 阶段。这个阶段不急着创建文件，更不急着写代码。它要追问的是：为什么值得做，谁会使用，核心问题是什么，哪些内容暂时不做，以及什么可观察结果能够证明项目成功。
              </p>
              <p>
                探索允许推翻原想法。方向改变不是浪费，而是在成本最低的时候排除错误。直到这些问题能够汇成一份简洁的 Project Brief，项目才拥有进入设计阶段的资格。
              </p>
              <p className="fracture">
                需求澄清的出口不是“聊得差不多”，而是一份能被下一角色准确接住的项目简报。
              </p>
            </section>

            <section className="layer" id="layer-04">
              <div className="layer-header">
                <span className="layer-index">04 / 08</span>
                <h2>固化</h2>
              </div>
              <p>
                Work 阶段把已经明确的目标工程化。产品规范回答要提供什么体验，架构文档回答各部分如何协作，视觉规范固定界面的语言，数据模型说明信息如何保存，路线图与验收标准则决定先做什么、怎样判断完成。
              </p>
              <p>
                AGENTS.md 在其中承担的是施工纪律，而不是百科全书。它应该告诉执行者项目怎样运行、哪些文件可以修改、如何测试以及完成的边界；产品故事、设计推理和长期讨论留在 docs 中。规则越短而明确，执行越不容易偏离。
              </p>
              <p className="fracture">
                文档不是开发之前的仪式，它是跨越角色、会话和时间的共同记忆。
              </p>
            </section>

            <section className="layer" id="layer-05">
              <div className="layer-header">
                <span className="layer-index">05 / 08</span>
                <h2>切片</h2>
              </div>
              <p>
                设计完成后仍不应该立刻全面开发。先做一个最小可运行版本，也就是 Vertical Slice：它不是功能残缺的演示，而是一条从输入到结果、从界面到数据都真实贯通的窄路径。
              </p>
              <p>
                一个英语学习工具可以先只完成“输入单词、查询释义、收藏、刷新后仍然存在”。这条小路径会同时暴露需求错误、界面摩擦、技术限制和数据结构问题。它用真实使用替代想象，让项目在扩大之前先证明自己的骨架成立。
              </p>
              <p className="fracture">
                原型的价值不在于看起来接近成品，而在于尽早让现实反驳设计。
              </p>
            </section>

            <section className="layer" id="layer-06">
              <div className="layer-header">
                <span className="layer-index">06 / 08</span>
                <h2>施工</h2>
              </div>
              <p>
                Codex 接手的应该是一项已经确定方向的工程任务，而不是一句“帮我做一个完整网站”。更有效的指令是：根据哪些项目文档，实现哪一项功能，哪些位置允许修改，用什么测试和验收标准判断完成。
              </p>
              <p>
                模型名称会不断变化，选择原则却可以保持稳定：日常整理与重复维护使用足够可靠的平衡档，架构设计和复杂开发使用更强推理，只有真正困难且可以拆分验证的问题才逐级提高强度。先确认问题属于需求、设计还是实现，再决定是否需要更强模型。
              </p>
              <p className="fracture">
                高推理强度无法修复一个没有被定义清楚的问题。
              </p>
            </section>

            <section className="layer" id="layer-07">
              <div className="layer-header">
                <span className="layer-index">07 / 08</span>
                <h2>回返</h2>
              </div>
              <p>
                项目遇到问题时，不要默认向前硬推。做出来的东西不是想要的，说明需求仍模糊，应返回 Chat；结构难以维护或扩展，说明设计需要回到 Work；明确设计下出现 Bug、构建失败或测试错误，才属于 Codex 的实现问题。
              </p>
              <p>
                如果问题确实属于实现，但现有推理仍不足，再提高模型强度。这个顺序很重要：先把问题送回正确阶段，再增加计算。否则更强的模型只会以更高的完成度实现错误方向。
              </p>
              <p className="fracture">
                迭代不是永远向前，而是在发现偏差时有能力回到正确的分岔口。
              </p>
            </section>

            <section className="layer terminal" id="layer-08">
              <div className="layer-header">
                <span className="layer-index">08 / 08</span>
                <h2>组织</h2>
              </div>
              <p>
                不要把 AI 只看成一个聊天机器人。它更像一个小型虚拟组织：Chat 是产品与思想顾问，Work 是项目经理和设计团队，Codex 是工程施工团队。你站在组织之外，也站在组织中心，决定它为什么存在、接受什么约束、何时算真正完成。
              </p>
              <p>
                项目文件夹就是这家组织共同维护的档案。每天开始前，先明确目标，不急于执行；先思考，再设计，再施工；不让 AI 猜关键决定；用文档保存共识，用测试验证现实；发现问题，就返回能够修正它的阶段。
              </p>
              <p className="last-line">
                真正的效率，不是让 AI 替自己思考，而是建立一套让 AI 能力被正确引导的系统。
              </p>
            </section>

            <footer className="article-end">
              <Link className="back-link" href="/">
                ← 返回全部文章
              </Link>
            </footer>
          </div>
        </div>
      </article>
    </main>
  );
}
