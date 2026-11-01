---
title: "SQL Q02 · Filtering Sorting and Null"
published: 2026-11-01
description: "SQL study notes: Filtering Sorting and Null."
category: "Languages / SQL"
tags: ["SQL","queries","filtering"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 2
comment: false
---

## TL;DR

- WHERE 篩選資料列；AND、OR 混用時以括號表達真正的邏輯。
- NULL 表示未知或缺值，應使用 IS NULL，而不是 = NULL。
- ORDER BY 可指定多個排序鍵；BETWEEN 包含兩端，LIKE 的萬用字元與跳脫方式需留意方言。

## 1. 概念與前置知識

本單元整理「篩選、排序與 NULL」。前置單元：Q01。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `email IS NULL` | 判斷缺值 |
| `ORDER BY credits DESC, title` | 指定主要與次要排序鍵 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
SELECT name FROM students WHERE email IS NULL ORDER BY name;
SELECT title FROM courses WHERE credits BETWEEN 2 AND 3 ORDER BY credits DESC, title;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
Mia
C++
SQL
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：email = NULL → 不會得到一般相等比較的 true。修正：使用 IS NULL。

### 陷阱 2

錯誤：混用 AND/OR 卻忽略優先序 → 篩出多餘資料。修正：將每組條件加括號並測試。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 列出有聯絡信箱與沒有信箱的學生，並為同學分課程加入次要排序鍵。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

BETWEEN 2 AND 3 是否包含 2 與 3？

<details><summary>答案</summary>

包含兩端。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_where.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
