---
title: "AIS3 Pre-exam 2026 · Web and Crypto Beyond Labels"
published: 2026-11-05
description: "Returning to AIS3 Pre-exam, with clearly attributed follow-up reading from the challenge author."
category: "Experiences"
tags: ["competition", "CTF", "cryptography", "web-security"]
lang: "zh-TW"
comment: false
experience:
  start: "2026-05-16"
  end: "2026-05-18"
  kind: "Competition"
  organizer: "AIS3"
---
2026 年 5 月 16 日至 18 日，我再次參加 AIS3 Pre-exam。從高中第一次接觸同系列競賽，到大學階段重新參與，這是一個可以放進長期學習時間線的節點。Pre-exam 是暑期課程的甄選測驗。[AIS3 官方資訊](https://ais3.org/)

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2026-05-16 至 2026-05-18 | 線上測驗 | 參賽者 |

## 賽後延伸閱讀：Web 與 Crypto 的交界

以下是本次整理時參考的同屆出題者解析，不代表我的競賽已解題清單。

William Lin（Whale）在 2026 年 5 月 28 日發布的 [正式 Crypto write-up](https://blog.whale-tw.com/2026/05/28/pre-exam-2026-official-crypto/) 列出 EasyWEB、EasyJWT、EasyZKP、EasyPAINT、EasyFAULT、EasyRSA。依作者說明，EasyWEB 與 EasyJWT 可以用來觀察 Web 介面如何與密碼學結構、簽章驗證條件及錯誤處理相互影響。

對現在整理筆記的我而言，這些題目提供一個複習方向：先追蹤輸入、狀態和驗證流程，再決定需要哪一類知識，而不只靠題名或分類猜工具。

延伸練習時，可以先畫出資料經過的元件，再標記每一步的信任條件。哪些值由使用者提供、哪些狀態必須在後端確認，以及錯誤訊息揭露了什麼，都是能逐一檢查的問題。
