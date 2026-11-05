---
title: "SecurityFocus Online 2024 · Program Security"
published: 2026-11-05
description: "Python, Linux, assembly and an introduction to memory-safety concepts."
category: "Experiences"
tags: ["workshop", "program-security", "Linux", "Python", "pwntools"]
lang: "zh-TW"
comment: false
experience:
  start: "2024-03-17"
  end: "2024-03-23"
  kind: "Workshop"
  organizer: "Ministry of Education cybersecurity talent program"
---
2024 年 3 月 17 日至 23 日，我參加 SecurityFocus Online「程式安全入門」。原有資料曾用「資訊安全入門三月場」描述，這次依課程通知統一名稱。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2024-03-17 至 2024-03-23 | 線上授課與自主學習 | 學員 |

## 從語法走到程式如何執行

原有學習紀錄涵蓋 Python 基礎、Linux 操作、組合語言入門，以及 Buffer Overflow 與 pwntools 練習。它把程式碼和執行環境接在一起：除了知道敘述怎麼寫，也開始接觸暫存器、記憶體和程式控制流程。

這一層內容讓「程式收到輸入後會發生什麼事」成為更具體的問題。對入門階段而言，比起只記住漏洞名稱，更需要看懂資料如何進入程式、放在哪裡，以及為什麼錯誤處理會影響後續行為。

## 修正舊筆記中的工具理解

舊紀錄把 pwntools 的 read／write 寫成一般性的記憶體讀寫。這次回顧改成較精確的說法：程式互動介面上的讀取與送出資料，不等於自動取得對任意程序記憶體的存取能力。應將工具功能和題目本身提供的條件分開理解。

我當時的心得記下對程式安全開始有初步認識。後續複習可以從小範例開始，對照原始碼、編譯結果與執行時觀察。當程式行為與預期不同，再逐步縮小到資料型態、輸入長度或控制流程，會比直接套用複雜範例更容易理解。
