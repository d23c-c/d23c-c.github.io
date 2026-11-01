---
title: "PHP H04 · Strings"
published: 2026-11-01
description: "PHP study notes: Strings."
category: "Languages / PHP"
tags: ["PHP","strings"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 4
comment: false
---

## TL;DR

- . 是字串串接運算子；+ 用於數值運算，不應拿來串接文字。
- 雙引號支援常見跳脫與變數插值，單引號的插值與跳脫規則較少。
- strlen 對一般字串計算位元組數；處理多位元組文字需另外選擇適當工具。

## 1. 概念與前置知識

本單元整理「字串串接與處理」。前置單元：H03。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `$left . $right` | 字串串接 |
| `trim($text)` | 移除前後空白並回傳新值 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
$title = " php notes ";
$clean = trim($title);
echo strtoupper($clean), PHP_EOL;
echo strlen($clean), PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：以 + 串接文字 → 不是預期的字串操作。修正：改用 .。

### 陷阱 2

錯誤：以 strlen 當成中文字數 → UTF-8 字元可能占多個位元組。修正：依編碼選擇相應的字元處理函式。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 整理一段課程標題的前後空白，輸出大寫版與位元組長度，再測試中文字串。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

單引號中的 \$name 會自動插值嗎？

<details><summary>答案</summary>

不會。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_string.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
