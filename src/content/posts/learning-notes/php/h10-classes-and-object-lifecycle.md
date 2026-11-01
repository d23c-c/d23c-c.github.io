---
title: "PHP H10 · Classes and Object Lifecycle"
published: 2026-11-01
description: "PHP study notes: Classes and Object Lifecycle."
category: "Languages / PHP"
tags: ["PHP","oop","classes","constructors"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 10
comment: false
---

## TL;DR

- class 定義物件型別，new 建立實例，-&gt; 存取實例的屬性與方法。
- __construct 負責初始化；範例的建構子屬性提升需要 PHP 8 以上。
- __destruct 不應當成所有重要儲存動作的唯一保證，生命週期與結束時機仍需注意。

## 1. 概念與前置知識

本單元整理「類別、建構與解構」。前置單元：H09。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `new Session(25)` | 建立物件並呼叫建構子 |
| `$this->minutes` | 取得目前實例的屬性 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
class Session {
    public function __construct(public int $minutes) {}
    public function label(): string { return $this->minutes . " min"; }
}
$session = new Session(25);
echo $session->label(), PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：以 . 呼叫物件方法 → . 是字串串接。修正：使用 -&gt;。

### 陷阱 2

錯誤：方法內漏寫 \$this-&gt;，以為區域變數就是屬性。修正：清楚區分物件狀態與區域名稱。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立兩個課程實例，各自保存分鐘數並提供文字摘要，不共用可變狀態。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

\$this 代表類別名稱還是目前實例？

<details><summary>答案</summary>

目前正在執行方法的實例。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_oop_classes_objects.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
