---
title: "PHP H01 · Environment and Syntax"
published: 2026-11-01
description: "PHP study notes: Environment and Syntax."
category: "Languages / PHP"
tags: ["PHP","syntax","setup"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 1
comment: false
---

## TL;DR

- PHP 可以由命令列執行，也可以經由 Web 伺服器處理請求；兩者的輸入來源不同。
- 程式以 &lt;?php 開始，敘述通常以分號結束；純 PHP 檔可省略結尾標記。
- CLI 範例使用 php main.php；不要把伺服器執行結果與瀏覽器看到的 HTML 原始碼混淆。

## 1. 概念與前置知識

本單元整理「PHP 環境與語法」。前置單元：None。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `<?php` | PHP 程式起始標記 |
| `php main.php` | 在命令列執行檔案 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
// CLI 範例，不需要 Web 伺服器
echo "Study log", PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：直接用瀏覽器開啟本機 PHP 檔，期待執行程式。修正：使用 PHP CLI 或正確設定的伺服器。

### 陷阱 2

錯誤：在純 PHP 檔結尾標記後留下額外空白 → 可能產生非預期輸出。修正：省略結尾標記。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立 CLI 學習日誌，輸出三行資料，再確認註解不會出現在輸出中。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

GitHub Pages 能直接執行 PHP 嗎？

<details><summary>答案</summary>

不能；它提供靜態檔案託管，PHP 需要另外的執行環境。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_syntax.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
