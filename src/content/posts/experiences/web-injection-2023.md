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
