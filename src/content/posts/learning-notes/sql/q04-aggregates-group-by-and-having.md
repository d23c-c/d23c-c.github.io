---
title: "SQL Q04 · Aggregates Group By and Having"
published: 2026-11-01
description: "SQL study notes: Aggregates Group By and Having."
category: "Languages / SQL"
tags: ["SQL","aggregation","queries"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 4
comment: false
---

## TL;DR

- COUNT、SUM、AVG、MIN、MAX 將多筆資料彙總；COUNT(column) 不計 NULL。
- GROUP BY 決定分組鍵；非彙總欄位應符合目標資料庫的分組規則。
- WHERE 在分組前篩資料列，HAVING 在分組後篩群組。

## 1. 概念與前置知識

本單元整理「彙總、分組與 HAVING」。前置單元：Q03。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `GROUP BY course_id` | 依課程形成群組 |
| `HAVING COUNT(*) >= 1` | 篩選彙總後的群組 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
SELECT course_id, COUNT(*) AS enrollments, ROUND(AVG(grade),1) AS average_grade
FROM enrollments
GROUP BY course_id
HAVING COUNT(*) >= 1
ORDER BY course_id;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
10 | 2 | 77.5
20 | 1 | 95.0
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：WHERE COUNT(*) &gt; 1 → 彙總階段不對。修正：將群組條件放在 HAVING。

### 陷阱 2

錯誤：用 COUNT(grade) 當成所有報名人數 → 缺成績者不計。修正：依需求使用 COUNT(*)。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 依課程統計報名人數與平均成績，加入一筆 NULL 成績，觀察 COUNT 的差異。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

WHERE 與 HAVING 的作用階段相同嗎？

<details><summary>答案</summary>

不同，WHERE 先篩列，HAVING 後篩群組。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_groupby.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
