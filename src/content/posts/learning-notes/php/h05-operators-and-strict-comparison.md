---
title: "PHP H05 · Operators and Strict Comparison"
published: 2026-11-01
description: "PHP study notes: Operators and Strict Comparison."
category: "Languages / PHP"
tags: ["PHP","operators","types"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 5
comment: false
---

## TL;DR

- == 會依規則進行型別轉換比較，=== 同時要求型別與值相同。
- && 與 || 具有短路求值；避免把邏輯判斷寫成難以理解的指定運算。
- 串接與算術混用時加括號，不要依靠跨版本容易誤讀的優先序假設。

## 1. 概念與前置知識

本單元整理「運算子與嚴格比較」。前置單元：H04。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `$left === $right` | 型別與值均相同 |
| `$ready && $valid` | 短路邏輯判斷 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
$text = "12";
$number = 12;
var_export($text == $number);
echo PHP_EOL;
var_export($text === $number);
echo PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：在需要精確型別時使用 == → 可能接受意外的輸入。修正：使用 === 並先驗證型別。

### 陷阱 2

錯誤：if (\$value = 0) → 將變數改為 0。修正：比較使用 == 或 ===。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為 0、'0'、false、null 建立比較矩陣，說明何時必須使用嚴格比較。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

'12' === 12 會成立嗎？

<details><summary>答案</summary>

不會，兩者型別不同。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_operators.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
