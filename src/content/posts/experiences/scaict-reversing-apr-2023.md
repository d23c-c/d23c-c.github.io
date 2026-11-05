---
title: "SCAICT 2023 · Reverse Engineering in April"
published: 2026-11-05
description: "Returning to reverse engineering while building broader security foundations."
category: "Experiences"
tags: ["workshop", "reverse-engineering", "program-analysis"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-04-16"
  kind: "Workshop"
  organizer: "SCAICT"
---
2023 年 4 月 16 日，我再次參加 SCAICT 的逆向工程研習。它和二月場次分別保留在時間線中，因為兩次參與發生在不同時間，而不是把相同名稱的課程合併成一筆模糊紀錄。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-04-16 | 研習課程 | 學員 |

## 重複接觸，也需要留下具體問題

當日教材未完整留存，以下整理本次的複習方向。當 Web、密碼學與程式分析同時出現在練習裡，程式的資料流是值得反覆回到的基礎。

## 從輸出追問輸入

以現在整理筆記的方式，看到結果時應繼續追問它從哪裡產生：資料是原樣使用，還是先經過轉換？判斷依賴固定值，還是執行中的狀態？這些問題能讓閱讀程式更有方向，也能幫助區分觀察到的事實與尚未驗證的猜測。

實際閱讀程式時，可以先為資料的每一次轉換標記輸入與輸出，再逐步串接成整體流程。遇到不確定的部分先保留假設，等有足夠觀察再下結論，能避免一開始的錯誤理解一路影響後面的分析。
