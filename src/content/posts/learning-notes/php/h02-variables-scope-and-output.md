---
title: "PHP H02 · Variables Scope and Output"
published: 2026-11-01
description: "PHP study notes: Variables Scope and Output."
category: "Languages / PHP"
tags: ["PHP","variables","input-output"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 2
comment: false
---

## TL;DR

- 變數以 \$ 開頭且名稱區分大小寫；型別由所持的值決定。
- echo 可輸出多個運算式，print 為具有回傳值的運算式；一般輸出不需要利用這個差異。
- 函式內外的變數有作用域差異；狀態應優先透過參數與回傳值交換。

## 1. 概念與前置知識

本單元整理「變數、作用域與輸出」。前置單元：H01。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `$minutes = 25;` | 建立並指定變數 |
| `echo $value, PHP_EOL;` | 輸出資料與平台換行 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
$minutes = 25;
$label = "Practice";
echo $label . ": " . $minutes . PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：變數名稱漏寫 \$ → 解析或名稱錯誤。修正：確認變數語法。

### 陷阱 2

錯誤：把函式外變數當成函式內自動可見。修正：傳入參數，而非依賴隱藏的全域狀態。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 輸出課程名稱與分鐘數，分別使用字串插值與串接，確認結果一致。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

\$Name 與 \$name 相同嗎？

<details><summary>答案</summary>

不同；PHP 變數名稱區分大小寫。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_variables.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
