---
title: "SQL Q05 · Joins and Relationships"
published: 2026-11-01
description: "SQL study notes: Joins and Relationships."
category: "Languages / SQL"
tags: ["SQL","joins","databases"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 5
comment: false
---

## TL;DR

- INNER JOIN 只保留符合關聯條件的組合，LEFT JOIN 另外保留左表未配對資料列。
- 一對多與多對多關聯會讓同一筆主表資料在結果出現多次，不能直接當成重複資料刪除。
- RIGHT/FULL JOIN 的可用性依產品與版本而定；需要可攜性時先確認目標資料庫。

## 1. 概念與前置知識

本單元整理「JOIN 與關聯查詢」。前置單元：Q04。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `LEFT JOIN enrollments AS e ON ...` | 保留左表未匹配資料列 |
| `s.student_id = e.student_id` | 明確指定關聯條件 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
SELECT s.name, c.title, e.grade
FROM students AS s
LEFT JOIN enrollments AS e ON s.student_id = e.student_id
LEFT JOIN courses AS c ON e.course_id = c.course_id
ORDER BY s.student_id, c.course_id;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
Lina | C++ | 85
Lina | SQL | 95
Noah | C++ | 70
Mia | NULL | NULL
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：漏寫關聯條件 → 可能產生笛卡兒組合。修正：檢查每個 JOIN 的 ON。

### 陷阱 2

錯誤：LEFT JOIN 後在 WHERE 要求右表欄位非 NULL → 可能失去未配對列。修正：依語意調整 ON 或 WHERE。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 列出所有學生與選課，包括沒有選課的學生；驗收未配對者仍有一列。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

學生有兩門課時，JOIN 結果通常只會有一列嗎？

<details><summary>答案</summary>

不是，通常每筆匹配關係各形成一列。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_join.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
