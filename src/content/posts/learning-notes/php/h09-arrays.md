---
title: "PHP H09 · Arrays"
published: 2026-11-01
description: "PHP study notes: Arrays."
category: "Languages / PHP"
tags: ["PHP","arrays","collections","loops"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 9
comment: false
---

## TL;DR

- PHP array 是有序映射，可使用整數或字串鍵；它不只是連續整數索引的容器。
- 部分看似不同的鍵會經型別轉換後碰撞，設計鍵值時要明確。
- foreach 的鍵與值、排序是否保留鍵、複製與參照都是不同操作。

## 1. 概念與前置知識

本單元整理「PHP 有序映射陣列」。前置單元：H08。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `['cpp' => 25]` | 建立鍵值陣列 |
| `foreach ($items as $key => $value)` | 同時取得鍵與值 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
$minutes = ["cpp" => 25, "python" => 35];
$minutes["sql"] = 20;
foreach ($minutes as $language => $value) {
    echo $language, ": ", $value, PHP_EOL;
}
echo array_sum($minutes), PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：把排序後的鍵變動當成資料遺失。修正：依是否需要保留鍵選擇 sort、asort 等函式。

### 陷阱 2

錯誤：foreach 以參照走訪後忘記解除最後一個參照。修正：完成後 unset 迴圈參照變數。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 用語言代號保存練習時間，新增資料、計算合計，排序時保留語言鍵。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

PHP array 的鍵只能是連續整數嗎？

<details><summary>答案</summary>

不是，也可以使用字串鍵。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_arrays.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
