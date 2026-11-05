---
title: "SCAICT 2023 · Cryptography Workshop"
published: 2026-11-05
description: "A cryptography class revisited through assumptions, representations and validation."
category: "Experiences"
tags: ["workshop", "cryptography", "encoding"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-05-27"
  kind: "Workshop"
  organizer: "SCAICT"
---
2023 年 5 月 27 日，我參加 SCAICT 的密碼學研習。這是繼深耕營與 CTF 接觸之後，另一筆明確的密碼學學習紀錄。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-05-27 | 研習課程 | 學員 |

## 從看見密文，到理解前提

當日題單未完整留存，以下為本次複習方向。應先問清楚資料如何表示、哪些資訊公開、哪些資訊需要保密，以及安全性依賴什麼條件。

## 本次整理的概念檢查

編碼、雜湊與加密雖然都會改變資料外觀，目的與可逆性卻不同。遇到陌生字串時，只因為看起來像亂碼就先猜一種加密法，很容易走錯方向。對密碼學練習而言，理解資料格式和數學條件，往往比先找現成工具更有幫助。

複習時可以從一份已知輸入開始，對照每一步轉換是否符合預期。當結果不同，先排查資料格式與參數，再處理數學推導；如此比較容易找出問題，也能避免把程式錯誤誤認成密碼學本身的性質。
