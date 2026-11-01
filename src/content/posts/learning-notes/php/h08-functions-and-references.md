---
title: "PHP H08 · Functions and References"
published: 2026-11-01
description: "PHP study notes: Functions and References."
category: "Languages / PHP"
tags: ["PHP","functions","references"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 8
comment: false
---

## TL;DR

- 函式的參數與回傳值定義資料流；型別宣告有助於表達介面。
- & 參數讓函式透過參照更新呼叫端變數；呼叫時不用再加 &。
- PHP 參照是變數別名的機制，不能直接等同於 C++ 可解參照的記憶體指標。

## 1. 概念與前置知識

本單元整理「函式與參照」。前置單元：H07。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `function update(int &$value): void` | 宣告可更新呼叫端的參照參數 |
| `update($value);` | 呼叫時不另外加 & |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
function addMinutes(int &$minutes, int $extra): void { $minutes += $extra; }
$value = 20;
addMinutes($value, 15);
echo $value, PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：呼叫 addMinutes(&\$value, 5) → 不合現代 PHP 呼叫語法。修正：& 放在參數宣告。

### 陷阱 2

錯誤：只需回傳結果卻大量使用參照修改狀態。修正：先選擇清楚的回傳值介面，必要時才修改呼叫端。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 分別用回傳值與參照更新學習分鐘數，比較兩種介面的可讀性與副作用。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

PHP 的參照可以做位址算術嗎？

<details><summary>答案</summary>

不可以；它不是 C/C++ 的指標。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_functions.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
- [PHP References Explained](https://www.php.net/manual/en/language.references.php)：PHP 參照的語意。
