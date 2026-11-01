---
title: "C# S04 · Control Flow and Loops"
published: 2026-11-01
description: "C# study notes: Control Flow and Loops."
category: "Languages / C#"
tags: ["C#","control-flow","loops","conditions"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 4
comment: false
---

## TL;DR

- if/else 與 switch 選擇分支；大括號能避免條件配對與縮排誤解。
- for、while、do-while 與 foreach 適合不同的重複規則。
- break 結束最近一層迴圈或 switch，continue 進入下一輪。

## 1. 概念與前置知識

本單元整理「條件與迴圈」。前置單元：S03。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `for (int i=0; i<n; i++)` | 重複執行 |
| `if (ready) { ... }` | 以 bool 條件選擇分支 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
int total = 0;
for (int day = 1; day <= 3; day++) total += day * 10;
if (total >= 60) Console.WriteLine("target reached");
else Console.WriteLine("keep practicing");
Console.WriteLine(total);
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
target reached
60
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：for 上界多寫一次 → 陣列走訪時可能越界。修正：使用半開區間並測試邊界。

### 陷阱 2

錯誤：while 中忘記更新條件 → 可能無限執行。修正：驗證每條分支都能前進。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 依每日練習分鐘數累計週進度，測試 0 天、1 天與達標邊界。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

do-while 與 while 的最少執行次數相同嗎？

<details><summary>答案</summary>

不同，前者至少 1 次，後者可為 0 次。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_conditions.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
