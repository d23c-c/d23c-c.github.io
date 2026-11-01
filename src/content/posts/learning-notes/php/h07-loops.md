---
title: "PHP H07 · Loops"
published: 2026-11-01
description: "PHP study notes: Loops."
category: "Languages / PHP"
tags: ["PHP","loops","control-flow"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 7
comment: false
---

## TL;DR

- while 先檢查條件，do-while 先執行；for 將初始化、條件與更新放在一起。
- foreach 用於走訪陣列與可迭代資料，鍵與值可同時取得；陣列細節在 H09。
- break 與 continue 會改變流程，必須確認每條路徑都能到達停止條件。

## 1. 概念與前置知識

本單元整理「迴圈與逐筆處理」。前置單元：H06。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `for ($i=0; $i<$n; $i++)` | 重複執行與更新 |
| `do { ... } while ($condition);` | 先執行再判斷 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
$total = 0;
for ($i = 1; $i <= 4; $i++) { $total += $i; }
echo $total, PHP_EOL;
$n = 0;
do { $n++; } while ($n < 1);
echo $n, PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：for 條件使用不可能結束的更新方向 → 無限迴圈。修正：驗證每次更新會接近邊界。

### 陷阱 2

錯誤：while 中 continue 跳過更新。修正：將必要更新放到所有路徑都會執行的位置。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 累計每日練習次數，測試空區間與單一元素區間，再比較 while 與 do-while。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

do-while 即使條件為 false，仍會先執行一次嗎？

<details><summary>答案</summary>

會。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_looping.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
