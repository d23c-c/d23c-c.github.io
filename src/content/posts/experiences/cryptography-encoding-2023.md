---
title: "Cryptography and Encoding Weaknesses · 2023"
published: 2026-11-05
description: "A workshop record with a retrospective review of encoding and cryptographic assumptions."
category: "Experiences"
tags: ["workshop", "cryptography", "encoding"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-07-08"
  kind: "Workshop"
  organizer: "Taichung Industrial High School"
---
2023 年 7 月 8 日，我參加臺中高工的「密碼學與編碼漏洞解析」線上研習。這是同年 Web 課程之外，延續密碼學學習的一場活動。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-07-08 | 線上研習 | 學員 |

## 先分清楚資料處理的目的

當日教材未完整留存，以下為本次複習方向。看到資料被轉換時，先分辨目的：為了傳輸而編碼、為了保密而加密，或為了比對而計算雜湊，三者需要回答的安全問題不同。

## 相同外觀，不代表相同風險

一段可以被還原的編碼資料，不應被當成已受到機密性保護；看起來複雜的轉換，也需要檢查金鑰、參數與使用方式。對學習者而言，先把輸入、轉換與預期保護效果寫清楚，才比較能判斷錯誤發生在哪一層。

整理實驗時，也應同時保留轉換前後的資料與使用條件。若只留下最後一段輸出，往後很難判斷差異來自編碼、參數還是處理流程。讓每一步都能被檢查，才有辦法累積真正能反覆使用的理解。
