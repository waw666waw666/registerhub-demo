# RegisterHub · 在线交互演示站 (Live Studio UI Demo)

> **纯前端零后端静态演示站**，1:1 复刻 [RegisterHub](https://github.com/waw666waw666/RegisterHub) 开源社区版 **Studio 工作台界面**（6 套配色主题含摩卡柔紫、深浅双色、折叠侧栏、`⌘K` 全局命令面板与实时流式 Markdown AI 对话）。  
> 所有 API 与 SSE 流式响应均由浏览器内置 `demo-studio-mock.js` 模拟，不连接真实后端、不发起外部自动化注册请求。

## 包含的可交互体验

- **总览仪表盘**：14 日动态趋势、KPI 实时联动（含近 7 日 LLM Token 消耗与缓存省流卡片）、账号资产类型分布与成号实时汇聚流
- **Token 消耗**：独立单屏可视化用量看板（24h / 7日 / 30日 / 全部）、按日/按时切换、输入/缓存/输出分层趋势图、近 12 周活跃热力图、按模型/渠道/会话多维排行、公开参考价省流测算与 CSV / JSON 一键导出
- **AI 对话**：多会话管理、实时流式 Markdown 渲染、思考链与可折叠工具调用卡片、执行进度条与 `.md` 导出
- **站点任务 (单线程)**：6 套虚拟示例适配器一览、参数覆盖、逐行流式 SSE 终端、失败黑匣子 SVG 截图预览
- **账号资产**：API Key 仓库 + 账号台账双页签，明文/脱敏切换、模拟测活、One-API 渠道生成与 CSV / JSON / TXT / Bitwarden 真实下载导出
- **IP 纯净度**：出口住宅属性与风控打分（单 IP 与批量检测）
- **站点工坊**：完整预览 6 套 RFC 2606 虚拟示例适配器源码、真实离线 HAR 协议提取与脚手架生成
- **视窗标定**：6 套跨分辨率无溢出布局（1 / 2 / 4×2 / 6×2）平滑形变画布与防切割缩放滑块
- **实用工具箱**：多国高熵身份生成、真实 Luhn 虚拟卡号、真实 RFC 6238 TOTP 动态口令
- **AI 引擎 / 服务监控 / 系统设置**：6 套配色皮肤实时切换、OpenAI 兼容接口配置、环境自检探针与单邮箱 IMAP 设置

## 一键部署方式（零构建步骤）

本仓库根目录即为最终静态产物，无需 Node.js 构建：

1. **GitHub Pages**：推送至 GitHub 仓库 `registerhub-demo` ➔ `Settings` ➔ `Pages` ➔ `Deploy from a branch` ➔ `main` / `/ (root)` ➔ 访问 `https://<你的用户名>.github.io/registerhub-demo/`。
2. **Cloudflare Pages / Vercel**：导入仓库，Build command 留空，Output directory 填 `.`，10 秒上线（国内访问更快）。
3. **本地预览**：
   ```bash
   python -m http.server 8080
   # 浏览器打开 http://127.0.0.1:8080
   ```

## 本地真实运行 RegisterHub

如需驱动本机 Chrome / Playwright / OpenCV / 代理与真实大模型，请访问主开源仓库：  
👉 **[https://github.com/waw666waw666/RegisterHub](https://github.com/waw666waw666/RegisterHub)**
