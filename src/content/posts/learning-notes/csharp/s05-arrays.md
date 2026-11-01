---
title: "C# S05 · Arrays"
published: 2026-11-01
description: "C# study notes: Arrays."
category: "Languages / C#"
tags: ["C#","arrays","collections","loops"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 5
comment: false
---

## TL;DR

- 陣列建立後長度固定；Length 是元素數，不是最後索引。
- Array.Sort 原地排序；需要保留原順序時先建立副本。
- 多維陣列用各維度長度走訪，不能把總 Length 當成每一維的上界。

## 1. 概念與前置知識

本單元整理「陣列與排序」。前置單元：S04。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `int[] values = { 1, 2 };` | 建立整數陣列 |
| `Array.Sort(values);` | 原地排序 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
using System;
int[] minutes = { 30, 15, 25 };
Array.Sort(minutes);
int total = 0;
foreach (int value in minutes) total += value;
Console.WriteLine(string.Join(", ", minutes));
Console.WriteLine(total);
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
15, 25, 30
70
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：取 values[values.Length] → IndexOutOfRangeException。修正：有效索引小於 Length。

### 陷阱 2

錯誤：Array.Sort 後期待原陣列順序保留。修正：排序前先複製。

## 5. 執行與判題格式

以 .NET 10 主控台專案執行。LeetCode 則只實作指定方法／類別，不另外建立 Console 輸入輸出流程。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 整理一週時間，輸出排序結果與合計，同時保留原始記錄。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

int[3] 建立後，未指定的元素值為何？

<details><summary>答案</summary>

0；C# 陣列元素會使用型別的預設值初始化。

</details>

## 8. 來源與課綱對照

- [Language reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cs/cs_arrays.php)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
