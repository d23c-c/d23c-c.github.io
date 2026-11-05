---
title: "Web Input Vulnerabilities · 2023"
published: 2026-11-05
description: "A vulnerable guestbook exercise connecting SQL injection, XSS and secure development."
category: "Experiences"
tags: ["workshop", "web-security", "SQL", "secure-development"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-04-29"
  kind: "Workshop"
  organizer: "Taichung Industrial High School"
---
2023 年 4 月 29 日，我參加「網頁使用者輸入型漏洞分析與實作」。課程從 HTTP、伺服器架構等基礎走到實作，也把 SDLC 與 SSDLC 放進討論，提醒安全不應只在網站完成後才開始檢查。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-04-29 | 線上研習 | 學員 |

## 從留言板理解資料的去向

原有學習紀錄中，這次實作建立了包含常見弱點的留言板，並接觸 Burp Suite、SQLMap，以及 SQL 注入、XSS 等問題。留言板看似簡單，卻能把使用者輸入、資料庫儲存與瀏覽器呈現連成一條完整流程。

整理這段經驗時，值得追問的是同一份輸入會在哪些位置被使用。資料庫查詢、HTML 內容與頁面中的其他輸出位置有不同規則，處理方式也應隨脈絡改變。工具能協助觀察與測試，但理解流程才能說明問題原因。

## 從找到漏洞走向避免漏洞

我當時在心得中提到，自己對框架和函式庫仍不熟悉，還需要更多實作。這個不足不只是速度問題，也會影響對內建防護的理解。回顧 SSDLC 的意義，就是把問題提早帶回設計與開發：如何限制權限、如何處理資料，以及如何留下能檢查修正效果的測試。
