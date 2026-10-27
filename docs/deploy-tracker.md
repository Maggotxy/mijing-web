# 官网部署记录

## 2026-10-27 觅径官网影像与工作台入口

- 源码：`craft:/home/sivita/mijing/mijing-preview`，现有 `main` 分支；应用提交 `96b0a39734eb80d01e7728026c7a8e6b1da4e8e8`。未 push。
- 服务：`mjvia-web.service`，构建产物 `dist`，回环 3100；原 Nginx 3101 / edge39 18085 通路保持。
- 本次执行：页面 lint、全项目 TypeScript 检查、`npm run build` 通过；`systemctl --user restart mjvia-web.service` 后 active。
- 影像：MiniMax-H3，30 steps / exact，原生 1344×768、24fps；8秒原片制作16秒静音往返循环。中文由HTML/CSS呈现。旧外部视频已移出 public。
- 入口：页头、移动导航、收尾和页脚接入 `https://app.mjvia.com`；移动四章正文可读，按需动画，视频跟随页面可见性和减少动态偏好。
- 修复 `/etc/nginx/conf.d/mjvia-site.conf` 的 `server_name`，补入 www；补入 WebP MIME。先 nginx -t 再 reload；未改其他虚拟主机，未新增备份。
- 公网：mjvia.com / www.mjvia.com 均返回相同官网HTML；三个资源hash匹配源文件，视频Range返回206，图片image/webp。
- 证据：`evidence/20261027/`；生成请求/回执/哈希：`original-media-20261027.json`。
- 既有全仓 lint 在未使用的组件模板中有20项错误；本次页面lint零错误，TypeScript和构建通过。未将全仓lint称为通过。
- 用户要求先完成程序及生产部署，浏览器视觉和真实合同旅程留待部署完成后统一进行。本记录不宣称这两项已通过。

## 2026-10-27 手机正文与说明文字核验
真实Chrome中等待响应式过渡结束后，正文颜色与背景正确；首个章节small继承桌面0.75透明度，已统一手机端为1并关闭手机章节过渡。app目录oxlint零错误、vinext构建通过；全仓oxlint另有19条既有未用UI库诊断，未当作通过。MiniMax-H3视频实际1344×768/readyState4，三个生产工作台链接正确。浏览器出现React418，根因尚未确认，未用suppressHydrationWarning屏蔽。
