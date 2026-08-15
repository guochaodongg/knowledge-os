/* ============ 客户端搜索（数据驱动，可在 SEARCH_INDEX 中增删条目） ============ */
const SEARCH_INDEX = [
  { title: "首页 · 知识体系概览", url: "index.html", desc: "五层金字塔知识结构总览", kw: "首页 概览 金字塔 knowledge os" },
  { title: "01 基础知识 · 操作系统", url: "01-foundations.html#os", desc: "进程、内存、文件系统", kw: "操作系统 进程 内存 linux os" },
  { title: "01 基础知识 · 网络", url: "01-foundations.html#network", desc: "TCP/IP、HTTP、网络协议", kw: "网络 tcp http 协议 network" },
  { title: "01 基础知识 · 算法", url: "01-foundations.html#algorithm", desc: "数据结构、算法设计", kw: "算法 数据结构 algorithm leetcode" },
  { title: "01 基础知识 · 数据库", url: "01-foundations.html#database", desc: "SQL、NoSQL、事务处理", kw: "数据库 mysql sql nosql 事务" },
  { title: "02 技术栈 · 前端", url: "02-technologies.html#frontend", desc: "HTML/CSS/JS、框架与工程化", kw: "前端 react vue javascript css" },
  { title: "02 技术栈 · 后端", url: "02-technologies.html#backend", desc: "服务端语言、API 设计", kw: "后端 golang java python api" },
  { title: "02 技术栈 · 云计算", url: "02-technologies.html#cloud", desc: "云服务、容器化、微服务", kw: "云 k8s docker 容器 微服务" },
  { title: "03 架构设计 · 分布式系统", url: "03-architecture.html#distributed", desc: "分布式架构模式、一致性", kw: "架构 分布式 一致性 cap" },
  { title: "03 架构设计 · 高并发", url: "03-architecture.html#concurrency", desc: "缓存、削峰、扩展性", kw: "高并发 缓存 mq 扩展" },
  { title: "04 项目实践 · 示例项目", url: "04-projects.html", desc: "实战案例与经验复盘", kw: "项目 实战 案例" },
  { title: "05 技术洞察 · 职业发展", url: "05-insights.html#career", desc: "技能提升、职业规划", kw: "职业 成长 规划" },
  { title: "05 技术洞察 · 技术趋势", url: "05-insights.html#trend", desc: "行业动态、技术前沿", kw: "趋势 ai 前沿 动态" },
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const box = document.getElementById("searchResults");
  if (!input || !box) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { box.classList.remove("show"); box.innerHTML = ""; return; }
    const hits = SEARCH_INDEX.filter(item =>
      (item.title + " " + item.desc + " " + item.kw).toLowerCase().includes(q)
    ).slice(0, 8);
    box.innerHTML = hits.length
      ? hits.map(h => `<a href="${h.url}">${h.title}<span class="sr-desc">${h.desc}</span></a>`).join("")
      : `<a href="javascript:void(0)">没有找到「${input.value}」相关内容</a>`;
    box.classList.add("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) box.classList.remove("show");
  });
});

/* ============ 主题切换（记忆到 localStorage） ============ */
function initTheme() {
  const saved = localStorage.getItem("ko-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  updateToggleIcon(theme);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", cur);
  localStorage.setItem("ko-theme", cur);
  updateToggleIcon(cur);
}
function updateToggleIcon(theme) {
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

/* ============ 返回顶部 ============ */
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backTop");
  if (btn) btn.classList.toggle("show", window.scrollY > 300);
});
function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }

document.addEventListener("DOMContentLoaded", initTheme);
