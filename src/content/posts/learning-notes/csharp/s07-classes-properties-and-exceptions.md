---
title: "C# S07 · Classes Properties and Exceptions"
published: 2026-11-01
description: "C# study notes: Classes Properties and Exceptions."
category: "Languages / C#"
tags: ["C#","oop","classes","exceptions"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 7
comment: false
---

## TL;DR

- 類別整合狀態與行為；建構子負責建立有效的初始狀態。
- 屬性是對外資料介面，可將 getter 與 setter 的權限分開。
- 例外用來表達無法正常完成的情況；只攔截能合理處理的錯誤，不要悄悄吞掉問題。

## 1. 概念與前置知識

本單元整理「類別、屬性與例外」。前置單元：S06。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `public int Minutes { get; }` | 公開唯讀屬性 |
| `catch (ArgumentOutOfRangeException)` | 處理明確的例外類型 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
var session = new Session(25);
Console.WriteLine(session.Minutes);
try { _ = new Session(-1); }
catch (ArgumentOutOfRangeException) { Console.WriteLine("invalid minutes"); }
class Session { public int Minutes { get; } public Session(int minutes) { if (minutes < 0) throw new ArgumentOutOfRangeException(nameof(minutes)); Minutes = minutes; } }
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
25
invalid minutes
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：公開欄位無條件接受無效值 → 物件失去不變條件。修正：在建構子或屬性入口驗證。

### 陷阱 2

錯誤：catch 後什麼也不做 → 隱藏真正失敗。修正：回報或轉換成清楚的處理結果。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立有合法時間範圍的課程類別，測試有效、負數與超大輸入並記錄例外類型。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

只讀屬性代表物件裡所有資料都不可變嗎？

<details><summary>答案</summary>

不代表；仍需檢查其他成員及所參照物件。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_classes.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
