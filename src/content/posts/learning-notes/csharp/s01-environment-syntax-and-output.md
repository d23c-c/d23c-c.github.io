---
title: "C# S01 · Environment Syntax and Output"
published: 2026-11-01
description: "C# study notes: Environment Syntax and Output."
category: "Languages / C#"
tags: ["C#","setup","syntax","dotnet"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 1
comment: false
---

## TL;DR

- .NET SDK 提供建立、編譯與執行工具；SDK 與應用程式執行階段的角色不同。
- 此處使用主控台專案與頂層敘述，入口程式由編譯器建立。
- 敘述以分號結束；Console.WriteLine 在輸出後換行，Write 則不會。

## 1. 概念與前置知識

本單元整理「C# 環境、語法與輸出」。前置單元：None。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `Console.WriteLine(value);` | 輸出後換行 |
| `dotnet run` | 編譯並執行專案 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
Console.WriteLine("Study log");
Console.WriteLine(2 + 3);
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
Study log
5
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：只安裝 runtime 就期待能 dotnet build。修正：安裝對應 SDK。

### 陷阱 2

錯誤：Console 或 WriteLine 大小寫寫錯 → 編譯失敗。修正：遵守 C# 名稱大小寫。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立 net10.0 主控台專案，分別以 Write 與 WriteLine 排列三行資訊。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

頂層敘述代表程式不需要入口點嗎？

<details><summary>答案</summary>

仍有入口點，只是由編譯器產生。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_syntax.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
