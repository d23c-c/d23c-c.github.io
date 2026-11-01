---
title: "PHP H11 · Access Modifiers and Inheritance"
published: 2026-11-01
description: "PHP study notes: Access Modifiers and Inheritance."
category: "Languages / PHP"
tags: ["PHP","oop","inheritance","encapsulation"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 11
comment: false
---

## TL;DR

- public、protected、private 決定成員可由哪些範圍存取。
- extends 建立單一類別繼承；衍生類別可以擴充或覆寫合適的方法。
- 覆寫方法要維持相容的介面，不應任意縮小公開存取權限。

## 1. 概念與前置知識

本單元整理「存取修飾與繼承」。前置單元：H10。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `class Practice extends Session` | 單一類別繼承 |
| `parent::__construct($value)` | 初始化父類別需求 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
class Session {
    public function __construct(protected int $minutes) {}
}
class Practice extends Session {
    public function label(): string { return "practice: " . $this->minutes; }
}
echo (new Practice(30))->label(), PHP_EOL;
```

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：由子類別直接存取父類別 private 屬性。修正：改經由父類別介面，或在設計合理時使用 protected。

### 陷阱 2

錯誤：子類別自訂建構子卻忘記父類別初始化需求。修正：明確呼叫 parent::__construct。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為兩種課程繼承共用狀態並提供各自摘要，驗證無效分鐘數不會進入物件。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

PHP 類別可以同時 extends 兩個類別嗎？

<details><summary>答案</summary>

不可以；多個能力契約可用介面表達。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_oop_inheritance.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
