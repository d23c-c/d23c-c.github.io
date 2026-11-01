---
title: "C# S02 · Variables Types and Input"
published: 2026-11-01
description: "C# study notes: Variables Types and Input."
category: "Languages / C#"
tags: ["C#","types","conversion","input-output"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 2
comment: false
---

## TL;DR

- C# 是靜態型別語言；var 會推導型別，不是任意改型別的動態變數。
- Console.ReadLine 回傳字串或 null，需要依輸入結束情況處理。
- Parse 可能丟出例外；面對不可信輸入，後續 GUI 單元以 TryParse 驗證。

## 1. 概念與前置知識

本單元整理「變數、型別、轉型與輸入」。前置單元：S01。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `Console.ReadLine()` | 取得字串或 null |
| `int.Parse(text)` | 解析整數，無效資料會引發例外 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
string text = Console.ReadLine() ?? "0";
int minutes = int.Parse(text);
double hours = minutes / 60.0;
Console.WriteLine($"{minutes} min = {hours:F2} h");
```

輸入：
```text
90
```

實際輸出：

```text
90 min = 1.50 h
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：將 ReadLine 結果直接指定給 int → 型別不符。修正：解析並處理失敗。

### 陷阱 2

錯誤：var x = 3 後指定 x = 'text' → 型別已固定。修正：依用途宣告正確型別。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 輸入學習分鐘數並顯示小時，加入空輸入與非數字測試，再說明 Parse 的限制。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

var 可以省略初始化嗎？

<details><summary>答案</summary>

一般區域 var 宣告不能，編譯器需要初始化運算式推導型別。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_data_types.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
