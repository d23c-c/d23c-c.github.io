---
title: "C# S08 · Inheritance Polymorphism and Interfaces"
published: 2026-11-01
description: "C# study notes: Inheritance Polymorphism and Interfaces."
category: "Languages / C#"
tags: ["C#","oop","inheritance","interfaces","polymorphism"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 8
comment: false
---

## TL;DR

- 繼承以基底型別表達共通介面；override 覆寫可覆寫的方法。
- 抽象類別可共享狀態，介面定義能力契約；一個類別可實作多個介面。
- WinForms 的視窗繼承 Form，Razor PageModel 也有基底類別；介面則常用於依賴注入。

## 1. 概念與前置知識

本單元整理「繼承、多型、抽象與介面」。前置單元：S07。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `interface ILabel { string Label(); }` | 定義能力契約 |
| `public override string Label()` | 覆寫基底方法 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
ILabel current = new Practice(30);
Console.WriteLine(current.Label());
interface ILabel { string Label(); }
abstract class Session : ILabel { protected int Minutes; protected Session(int minutes) { Minutes = minutes; } public abstract string Label(); }
class Practice : Session { public Practice(int minutes) : base(minutes) {} public override string Label() => $"practice: {Minutes}"; }
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
practice: 30
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：用 new 隱藏方法卻期待 override 的多型結果。修正：分清楚隱藏與覆寫。

### 陷阱 2

錯誤：忘記實作介面成員 → 編譯失敗。修正：保持完整而相容的公開契約。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立兩種 Session 實作同一個 ILabel，讓呼叫端不需要知道具體型別。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

C# 可以同時繼承兩個 class 嗎？

<details><summary>答案</summary>

不可以，但可以實作多個介面。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_interface.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
