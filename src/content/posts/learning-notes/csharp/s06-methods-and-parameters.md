---
title: "C# S06 · Methods and Parameters"
published: 2026-11-01
description: "C# study notes: Methods and Parameters."
category: "Languages / C#"
tags: ["C#","functions","methods"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 6
comment: false
---

## TL;DR

- 方法把參數與回傳值組成介面；void 表示不回傳資料。
- 預設參數可減少重複指定，但不應讓呼叫語意變得模糊。
- 多載依參數列表區分；一般參數傳值，ref/out 會改變資料交換方式。

## 1. 概念與前置知識

本單元整理「方法、參數與多載」。前置單元：S05。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `static int Total(int n, int minutes = 20)` | 宣告方法與預設參數 |
| `return n * minutes;` | 回傳計算結果 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
Console.WriteLine(Total(3));
Console.WriteLine(Total(2, 15));
static int Total(int sessions, int minutes = 20) => sessions * minutes;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
60
30
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：只改回傳型別就宣告同名同參數方法 → 編譯失敗。修正：改變參數介面或命名。

### 陷阱 2

錯誤：忽略回傳值卻期待呼叫端變數自動更新。修正：接收回傳值或明確使用 ref/out。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立計算總練習時間的方法，提供預設時間並測試 0 次練習的行為。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

void 方法可以 return 一個 int 嗎？

<details><summary>答案</summary>

不可以；回傳型別與 return 必須一致。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_methods.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
