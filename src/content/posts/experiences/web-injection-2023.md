---
title: "Web Injection Analysis and Practice · 2023"
published: 2026-11-05
description: "A first in-person security workshop spanning web foundations, SQL injection and XSS."
category: "Experiences"
tags: ["workshop", "web-security", "SQL", "XSS"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-02-06"
  kind: "Workshop"
  organizer: "Taichung Industrial High School"
---
2023 年 2 月 6 日的「網頁注入攻擊分析與實務」，是我第一次參加實體資安研習。相較於之前透過螢幕上課，和講師處在同一個空間，提問、觀察操作與確認理解的過程都更直接。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-02-06 | 臺中高工實體研習 | 學員 |

## 把 Web 元件與漏洞接起來

課程先介紹 PHP、HTTP，以及 HTML、CSS、JavaScript 在網站中的角色，再接到 XAMPP 環境、SQL 注入與 XSS。原有筆記也記下 Google Hacking、Session、Cookie 和 PHP 撰寫等主題。這種安排讓我看見，攻擊行為不是憑空出現，而是建立在網站如何接收、處理與輸出資料之上。

整理後最值得留下的複習問題，是使用者輸入究竟在哪裡變成指令或頁面內容。SQL 查詢與 HTML 輸出是不同脈絡，防護方式也需要對應資料被使用的位置，不能只依賴單一字串過濾。

## 一場多主題研習的收穫

我在當時的心得中特別提到，講師提供共筆，讓密集的內容可以在課後重看。這對初學階段很重要：課堂上能跟著做，不代表離開現場後就能重新解釋。把環境、請求流程與觀察結果整理成自己的筆記，才比較有機會把一次研習變成後續可以反覆使用的基礎。

## 課程共筆與複習路線

重新找到的 [講師課程共筆：台中高工 2023/02/06](https://hackmd.io/@feiw3363/0206) 記錄了當天的環境設定與練習。沿著教材回看，可以把主題接成三條路線：

- **網站與請求**：從 XAMPP、VS Code 與 PHP 表單開始，透過 Burp Suite 的 Proxy、Repeater 觀察參數及回應。
- **輸入與狀態**：比較前端驗證、後端檢查與輸出編碼，再理解 Cookie、Session 和 XSS 的關聯。
- **資料庫互動**：從資料表與權限設定，接到登入流程、SQL 注入及 SQLmap 的練習脈絡。

這次複習也補上一點：設定 HttpOnly 的 Cookie 無法透過 document.cookie 讀取，但這個屬性不能取代完整的 XSS 防護。[MDN：Set-Cookie 與 HttpOnly](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)

這份共筆保留為講師教材的參考入口；本文則整理自己的參與經驗與後續理解。
