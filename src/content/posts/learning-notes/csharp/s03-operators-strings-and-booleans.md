---
title: "C# S03 · Operators Strings and Booleans"
published: 2026-11-01
description: "C# study notes: Operators Strings and Booleans."
category: "Languages / C#"
tags: ["C#","operators","strings","types"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 3
comment: false
---

## TL;DR

- 整數除法會截去小數部分；格式化輸出不會改變先前運算的型別。
- 字串不可變，方法通常回傳新字串；插值字串能清楚表達格式。
- && 與 || 短路求值；條件必須是 bool，不能直接把一般整數當成條件。

## 1. 概念與前置知識

本單元整理「運算子、字串與布林」。前置單元：S02。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `$"{minutes} min"` | 插值字串 |
| `minutes / 60.0` | 保留浮點商 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
int minutes = 25;
string language = "C#";
bool complete = minutes >= 20 && minutes <= 60;
Console.WriteLine($"{language}: {minutes} min, ready={complete}");
Console.WriteLine(language.Length);
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
C#: 25 min, ready=True
2
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：double hours = minutes / 60 → 先做整數除法。修正：使用 60.0 或先轉型。

### 陷阱 2

錯誤：以為 Trim() 原地修改字串 → 忽略回傳值。修正：接收新字串。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立語言名稱與時間摘要，比較原字串與 Trim、ToUpper 等方法的回傳值。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

if (1) 在 C# 合法嗎？

<details><summary>答案</summary>

不合法，if 條件必須是 bool。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_operators.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
