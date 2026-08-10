import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the blog index", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /把一个问题想到底/);
  assert.match(html, /为什么信息越多，我们越难形成自己的判断/);
  assert.match(html, /\/depths\/articles\/judgment-in-the-age-of-information/);
  assert.match(html, /不要让 AI 猜：个人 AI 项目的完整工作流/);
  assert.match(html, /\/depths\/articles\/personal-ai-project-development-sop/);
  assert.match(html, /Depths/);
});

test("exports the complete example article", async () => {
  const html = await readFile(
    new URL(
      "articles/judgment-in-the-age-of-information/index.html",
      outputRoot,
    ),
    "utf8",
  );

  assert.match(html, /07 \/ 07/);
  assert.match(html, /在无人替你负责的地方，你仍然写下自己的名字/);
  assert.match(html, /返回全部文章/);
});

test("exports the personal AI project workflow article", async () => {
  const html = await readFile(
    new URL("articles/personal-ai-project-development-sop/index.html", outputRoot),
    "utf8",
  );

  assert.match(html, /不要让 AI 猜：个人 AI 项目的完整工作流/);
  assert.match(html, /08 \/ 08/);
  assert.match(html, /真正的效率，不是让 AI 替自己思考/);
  assert.match(html, /返回全部文章/);
});

test("exports the social preview image", async () => {
  await access(new URL("og.png", outputRoot));
});
