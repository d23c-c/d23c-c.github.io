---
title: "SQL Q03 · Insert Update Delete and Limits"
published: 2026-11-01
description: "SQL study notes: Insert Update Delete and Limits."
category: "Languages / SQL"
tags: ["SQL","crud","databases"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 3
comment: false
---

## TL;DR

- INSERT 明確列出欄位可避免依賴資料表欄位順序。
- UPDATE 與 DELETE 的 WHERE 決定影響範圍；執行前先用同條件 SELECT 檢查。
- SQLite/MySQL 使用 LIMIT，SQL Server 常用 TOP 或 OFFSET/FETCH，不能直接混貼。

## 1. 概念與前置知識

本單元整理「資料新增、更新、刪除與筆數限制」。前置單元：Q02。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `UPDATE students SET name = ... WHERE student_id = ...` | 限定更新範圍 |
| `ORDER BY student_id LIMIT 2` | 在明確順序下限制結果筆數 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
INSERT INTO students(student_id,name,email) VALUES (4,'Eli',NULL);
UPDATE students SET name = 'Eli Chen' WHERE student_id = 4;
SELECT student_id,name FROM students ORDER BY student_id LIMIT 2;
DELETE FROM students WHERE student_id = 4;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
1 | Lina
2 | Noah
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：UPDATE 漏寫 WHERE → 可能更新所有資料列。修正：先確認條件與預期筆數。

### 陷阱 2

錯誤：限制筆數卻沒有 ORDER BY → 取得的那幾筆不具穩定定義。修正：先定義排序再限制。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 在記憶體測試資料庫新增一筆課程、更新它，再只刪除那筆；每一步檢查影響範圍。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

DELETE FROM students 沒有 WHERE 會只刪第一筆嗎？

<details><summary>答案</summary>

不會，它會嘗試刪除所有資料列。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_insert.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
