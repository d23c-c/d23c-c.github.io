---
title: "PHP H03 · Types Casting and Constants"
published: 2026-11-01
description: "PHP study notes: Types Casting and Constants."
category: "Languages / PHP"
tags: ["PHP","types","conversion"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 3
comment: false
---

## TL;DR

- PHP 區分 int、float、string、bool、array、object 與 null 等型別。
- 明確轉型能表達意圖，但轉型不是輸入驗證，必須另外判斷原資料格式。
- const 定義固定名稱；魔術常數的值依所在檔案、行號或程式範圍決定。

## 1. 概念與前置知識

本單元整理「型別、轉型與常數」。前置單元：H02。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `(int) $text` | 明確轉型，並非輸入驗證 |
| `const TARGET = 60;` | 定義常數 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
const TARGET = 60;
$minutes = (int) "25";
echo get_debug_type($minutes), PHP_EOL;
echo TARGET - $minutes, PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：把任意字串轉為 int 後就認定輸入有效。修正：轉型之前先驗證允許的格式。

### 陷阱 2

錯誤：把浮點數的近似值當成精確金額。修正：依用途選擇以最小貨幣單位的整數等表示方式。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 比較數字字串、空字串與帶字母字串的型別，為可接受輸入訂出驗證規則。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

常數名稱也需要 \$ 嗎？

<details><summary>答案</summary>

不需要；它不是變數。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_datatypes.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
