---
title: "PHP H06 · Conditions Switch and Match"
published: 2026-11-01
description: "PHP study notes: Conditions Switch and Match."
category: "Languages / PHP"
tags: ["PHP","conditions","control-flow"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 6
comment: false
---

## TL;DR

- if/elseif/else 依序選擇分支；巢狀條件應以大括號明確界定。
- PHP 8 的 match 是運算式，使用嚴格比較，且沒有 switch 的貫穿行為。
- match 必須涵蓋傳入值或提供 default；switch 與 match 的比較語意不能視為相同。

## 1. 概念與前置知識

本單元整理「條件、switch 與 match」。前置單元：H05。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `elseif ($condition) { ... }` | 延續條件分支 |
| `match ($value) { 2 => 'two', default => 'other' }` | 嚴格比較的運算式 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
$level = 2;
if ($level >= 3) { echo "advanced", PHP_EOL; }
elseif ($level === 2) { echo "practice", PHP_EOL; }
else { echo "review", PHP_EOL; }
echo match ($level) { 2 => "two", default => "other" }, PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：match 沒有對應分支也沒有 default → UnhandledMatchError。修正：完整涵蓋輸入。

### 陷阱 2

錯誤：把 switch 漏寫 break 視為自動跳出。修正：明確結束每個分支。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立課程狀態選單，用 if 與 match 實作同一組規則，測試未知狀態。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

match 使用 == 還是 === 語意？

<details><summary>答案</summary>

採嚴格比較語意。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_if_else.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
