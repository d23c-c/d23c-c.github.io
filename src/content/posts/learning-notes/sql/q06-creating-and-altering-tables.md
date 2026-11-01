---
title: "SQL Q06 · Creating and Altering Tables"
published: 2026-11-01
description: "SQL study notes: Creating and Altering Tables."
category: "Languages / SQL"
tags: ["SQL","ddl","schema"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 6
comment: false
---

## TL;DR

- DDL 定義資料結構，DML 修改資料；DROP TABLE 與 DELETE 的影響範圍不同。
- SQLite 以檔案或記憶體資料庫工作，沒有 MySQL 同樣的 CREATE DATABASE 工作流程。
- SQLite 的型別親和性與 MySQL 嚴格型別行為不同；VARCHAR 長度限制不能跨方言直接假設。

## 1. 概念與前置知識

本單元整理「建立、修改與刪除資料表」。前置單元：Q05。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `CREATE TABLE sessions (...);` | 建立資料結構 |
| `ALTER TABLE sessions ADD COLUMN remark TEXT;` | 新增欄位 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
CREATE TABLE sessions (session_id INTEGER, topic VARCHAR(80), minutes INTEGER);
INSERT INTO sessions VALUES (1,'SQL review',25);
ALTER TABLE sessions ADD COLUMN remark TEXT;
SELECT session_id,topic,minutes,remark FROM sessions;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
1 | SQL review | 25 | NULL
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：DROP TABLE 當成清空資料但保留結構 → 資料表本身被移除。修正：先確認要刪列還是刪表。

### 陷阱 2

錯誤：在 SQLite 以為 VARCHAR(5) 必然拒絕六字元字串。修正：了解方言並加入真正的約束。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 設計學生、課程、選課三張表的欄位草稿，實際建表並查詢結構；下一單元補上關聯約束。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

SQLite 與 MySQL 的建庫命令可以原封不動互換嗎？

<details><summary>答案</summary>

不能；需要依方言調整。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_create_table.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
