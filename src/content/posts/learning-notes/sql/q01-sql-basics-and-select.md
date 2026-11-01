---
title: "SQL Q01 · SQL Basics and Select"
published: 2026-11-01
description: "SQL study notes: SQL Basics and Select."
category: "Languages / SQL"
tags: ["SQL","queries"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 1
comment: false
---

## TL;DR

- SQL 以集合方式描述需要的資料，SELECT 選欄位，FROM 指定資料來源。
- DISTINCT 去除選出欄位組合中的重複資料，不等於替資料表建立唯一約束。
- 沒有 ORDER BY 的結果不保證順序；本單元先專注選取欄位與去重。

## 1. 概念與前置知識

本單元整理「SQL 基礎與 SELECT」。前置單元：None。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `SELECT name FROM students;` | 選出指定欄位 |
| `SELECT DISTINCT credits FROM courses;` | 去除結果中的重複值 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
SELECT name FROM students;
SELECT DISTINCT credits FROM courses;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
Lina
Noah
Mia
3
2
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：以為 SELECT * 的欄位永遠不變。修正：需要穩定介面時列出欄位。

### 陷阱 2

錯誤：把輸出順序當成資料表的永久特性。修正：需要順序時在 Q02 使用 ORDER BY。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 選出學生姓名與課程學分，觀察 DISTINCT 影響的是一欄還是整組欄位。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

DISTINCT 會刪除資料表中的重複記錄嗎？

<details><summary>答案</summary>

不會，它影響本次查詢結果。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_select.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
