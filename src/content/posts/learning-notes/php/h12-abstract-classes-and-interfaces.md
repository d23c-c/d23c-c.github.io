---
title: "PHP H12 · Abstract Classes and Interfaces"
published: 2026-11-01
description: "PHP study notes: Abstract Classes and Interfaces."
category: "Languages / PHP"
tags: ["PHP","oop","interfaces","polymorphism"]
lang: "zh-TW"
series: "PHP Learning Notes"
seriesOrder: 12
comment: false
---

## TL;DR

- 抽象類別可共享實作並保留必須由子類別完成的方法，不能直接實例化。
- 介面定義能力契約；一個類別可實作多個介面。
- 呼叫端依介面操作物件，能降低對特定實作類別的依賴。

## 1. 概念與前置知識

本單元整理「抽象類別與介面」。前置單元：H11。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `abstract class Session` | 不能直接實例化的基底類別 |
| `class Practice implements Describable` | 實作介面契約 |

## 3. 最小範例與驗證

環境：PHP 8+ · runtime unavailable。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝 PHP CLI，未執行，不提供推測輸出。


```php
<?php
interface Describable { public function label(): string; }
abstract class Session implements Describable {
    public function __construct(protected int $minutes) {}
    abstract public function label(): string;
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

錯誤：new 抽象類別 → 執行錯誤。修正：建立完成必要方法的具體類別。

### 陷阱 2

錯誤：implements 後遺漏必要方法或寫錯簽名。修正：完整實作契約並維持型別相容。

## 5. 執行與判題格式

本機 CLI 使用 `php main.php`。LeetCode 需使用指定函式或類別，不能把 CLI 範例原封不動當成提交格式。PHP 不使用 ZeroJudge 練習；本站不代交程式，也不推測帳號的已解題狀態。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 定義具有 label 契約的兩種學習活動，透過同一介面顯示不同摘要。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

一個類別可以實作多個介面嗎？

<details><summary>答案</summary>

可以，但必須滿足各介面的相容契約。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.php.net/manual/en/langref.php)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/php/php_oop_interfaces.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
