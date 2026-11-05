---
title: "Web Access Control Analysis · 2023"
published: 2026-11-05
description: "Connecting security fundamentals, web weaknesses and server-side permission checks."
category: "Experiences"
tags: ["workshop", "web-security", "access-control", "log-analysis"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-07-05"
  kind: "Workshop"
  organizer: "Taichung Industrial High School"
---
2023 年 7 月 5 日，我參加「網站權限控管漏洞分析」。原有心得除了 Web 弱點，也記下 CIA 三要素、資安事件分析、封包與日誌觀察，讓權限問題不只是某一種攻擊名稱。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-07-05 | 線上研習 | 學員 |

## 由誰、對什麼、做什麼

當時接觸的內容包含 SQL 注入、XSS、CSRF，以及 Wireshark、Burp Suite、Nmap 等工具。這次整理把課程名稱拉回一個具體問題：伺服器如何決定某位使用者能否讀取或改動某份資源？驗證身分與檢查權限需要分開理解，不能因為登入成功就假設每個請求都安全。

## 從操作結果回看證據

原有紀錄也提到 Web 伺服器日誌分析。日誌提供請求與事件的線索，仍需要配合時間、來源及系統行為判讀。單一可疑請求並不自動證明入侵成功，而畫面看似正常也不能保證沒有異常。

我在當時的反思中寫下，研習補上了一些原本感到困惑的名詞。回頭看，真正需要延續的是把名詞放回場景：影響機密性、完整性或可用性的哪個部分？防護是在接收請求前、執行動作時，還是事後偵測？這樣的整理比單純增加工具清單更能幫助理解。
