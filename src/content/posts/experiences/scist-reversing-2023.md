---
title: "SCIST 2023 · Reverse Engineering Basics"
published: 2026-11-05
description: "A single online reverse engineering class in the SCIST security series."
category: "Experiences"
tags: ["workshop", "reverse-engineering", "security-fundamentals"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-03-18"
  kind: "Workshop"
  organizer: "SCIST"
---
2023 年 3 月 18 日，我參加 SCIST 資訊安全課程中的 Reverse 基礎單堂課。通知將它列為該系列的第七堂課；我的紀錄只涵蓋這一堂，不將整個系列都算成完成的培訓。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-03-18 | 線上單堂課程 | 學員 |

## 讓看程式多一個角度

這次參與和二月的 SCAICT 逆向課，是兩個不同的學習接觸點。原始作業未完整留存，以下為現在回看的複習方向。逆向分析的共同目標，是從可觀察行為與程式結構逐步縮小可能性，而不是看到某個工具就立刻套用固定答案。

## 本次整理的複習重點

適合重新練習的問題包括：輸入資料如何被轉換、條件判斷依賴哪些值，以及一段看似複雜的流程能否先畫成較小的分支。靜態閱讀提供假設，受控測試則用來檢查假設；兩者的觀察若不同，應先找出差異原因。

一份能重現的練習紀錄，應包含輸入資料、執行條件和結果。當測試結果與閱讀程式得到的預期不一致時，差異本身就是下一個值得追查的問題，能幫助分析從猜測走向有依據的判斷。
