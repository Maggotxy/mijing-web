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

## 2026-10-27 官网页面与React渲染统一
- 根因：craft nginx /etc/nginx/conf.d/mjvia-site.conf 在head后/main尾注入SEO与FAQ，RSC没有对应节点。
- 已将FAQ、分享元信息和JSON-LD写入app/page.tsx、app/faq.ts、app/layout.tsx；分享图使用实际存在的H3 poster。
- 移除两个sub_filter，保留3101、媒体Range及SEO静态路径；配置存ops/nginx-mjvia-site.conf。nginx -t后reload，mjvia-web.service重启active。
- app oxlint零错误；TypeScript与vinext构建通过。全仓既有UI库lint问题未扩大处理。
- 源站3100、代理3101、mjvia.com/www四份HTML SHA完全相同，中文无replacement字符；视频Range206。证据evidence/20261027/hydration-http.json。
- 真实当前Chrome导航、展开FAQ后pageerror为空，原React418未再出现。截图受当前Chrome小窗口与视口截图偏移影响，DOM/HTTP证据与视觉验收分开，不以截图文件存在冒称完整视觉通过。
- 未push，未新增备份。

## 2026-10-28 官网页面与代理一致性修复

- 发现实际 Nginx 配置在 React 页面外再次注入 SEO、H1 和页脚；民法典外链返回 404，源码与公网正文出现差异。
- 将有效分享元信息、订阅、图标、组织信息、视频元信息和备案页脚统一放入应用；法律资料入口改为已实测 200 的全国人大国家法律法规数据库。
- 保留代理现有安全响应头、静态 SEO/验证资源、404、媒体 Range、缓存与路由；候选配置移除 HTML sub_filter，不修改法务服务。
- app oxlint、TypeScript 与构建通过；全仓未用 UI 模板的历史 lint 问题未宣称通过。部署读回另附。
- MiniMax-H3 原片生成记录与线上视频 hash 对应原有 docs/original-media-20261027.json，本轮未再次调用视频生成。

部署完成：d7195c5，nginx -t通过后重载，mjvia-web.service重启active。使用正确Host核对3100/3101/官网/www四份HTML SHA一致，中文正常、备案与法律资料入口存在，失效链接消失；线上视频hash与MiniMax-H3生成回执一致。无push、新备份或法务服务重启。Nginx既有其他站点server_name警告保留，未改动无关站点。
