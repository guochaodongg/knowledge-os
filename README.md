# Knowledge OS · 我的知识库

系统化的个人知识管理平台 —— 从基础到实践，从理论到洞察。

在线访问：https://grow21.github.io/knowledge-os/

## 结构

| 板块 | 说明 |
| --- | --- |
| 01 基础知识 | 操作系统、网络、算法、数据库 |
| 02 技术栈 | 前端、后端、云计算、AI |
| 03 架构设计 | 架构原则、分布式、高并发、架构演进 |
| 04 项目实践 | 项目案例与复盘 |
| 05 技术洞察 | 工程方法论、职业发展、技术趋势 |

## 本地开发

纯静态站点，无任何依赖：

```bash
# 直接用浏览器打开 index.html，或启动本地服务
python -m http.server 8000
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动发布到 GitHub Pages（见 `.github/workflows/deploy.yml`）。

前提：仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
