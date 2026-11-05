---
title: "Web Sessions and Weakness Analysis · 2023"
published: 2026-11-05
description: "Understanding cookies, sessions, CSRF and the boundary between authentication and authorization."
category: "Experiences"
tags: ["workshop", "web-security", "sessions", "OWASP"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-06-18"
  kind: "Workshop"
  organizer: "Taichung Industrial High School"
---
這場 2023 年 6 月 18 日的研習，正式名稱是「網站 Session 原理與弱點分析實戰」。我在舊資料中把它記成「OWASP 分析和實作課程」；兩個名稱指的是同一場活動，因此只建立一篇文章。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-06-18 | 線上研習 | 學員 |

## 網站如何記住使用者

原有心得的主題集中在 Session、Cookie、Session 劫持與 CSRF，也提到透過實作與案例認識防護。回顧時，值得先把 Cookie 當作瀏覽器與伺服器交換狀態資料的機制，再分別理解伺服器如何識別工作階段、使用者是否已登入，以及目前請求是否有權執行某個動作。

這些問題互相關聯，卻不是同一件事。只因為使用者已經通過登入，並不代表所有功能都能略過權限檢查；前端畫面上的流程，也不能代替後端真正的驗證。

## 從課堂操作走向自己的理解

當時我在反思中提到，實際操作經驗還需要補強，希望透過技術文章與 CTF 練習延續學習。現在整理這段經歷，更想保留的是觀察請求的習慣：狀態資料從哪裡來、何時更新、哪些請求會改變資料，以及失效後應如何處理。

把工作階段、登入驗證與功能權限分開理解，才能更具體地檢查一個網站的狀態設計。這場研習的價值，在於替之後閱讀 Web 弱點與練習觀察請求，補上這一層基礎。
