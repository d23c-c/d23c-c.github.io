---
title: "SCAICT 2023 · Reverse Engineering in February"
published: 2026-11-05
description: "An early reverse engineering workshop and a retrospective focus on program behavior."
category: "Experiences"
tags: ["workshop", "reverse-engineering", "program-analysis"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-02-11"
  kind: "Workshop"
  organizer: "SCAICT"
---
2023 年 2 月 11 日，我參加 SCAICT 的逆向工程課程。這筆紀錄位在第一次 CTF 與一連串入門研習之間，反映當時除了 Web 和鑑識，也開始接觸程式分析的方向。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-02-11 | 研習課程 | 學員 |

## 先理解程式在做什麼

當日教材未完整留存，以下為本次複習方向。回看逆向工程，重要的起點是程式接收哪些輸入、執行哪些分支，以及輸出如何形成。工具呈現的函式名稱、字串或反組譯指令，都是觀察材料，還不是最後結論。

## 把猜測變成可以檢查的問題

複習這個主題時，我會把問題縮小：某個條件何時成立？同一份輸入是否能重現相同結果？看到的常數或字串是否真的影響判斷？每提出一個假設，就需要思考能用哪個輸入或觀察來檢查它。

好的分析筆記應該能讓自己重走判斷過程：哪一段程式支持了推論、哪個測試排除了其他可能，以及還有哪些條件尚未確認。這也是之後繼續練習時可以採用的紀錄方式。
