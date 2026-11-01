---
title: "SQL Q07 · Constraints Keys and Relationships"
published: 2026-11-01
description: "SQL study notes: Constraints Keys and Relationships."
category: "Languages / SQL"
tags: ["SQL","constraints","schema"]
lang: "zh-TW"
series: "SQL Learning Notes"
seriesOrder: 7
comment: false
---

## TL;DR

- PRIMARY KEY 識別資料列；外鍵維持表間參照，UNIQUE 與 NOT NULL 分別處理不同限制。
- CHECK 可限制有效範圍；若 NULL 不合法，仍應配合 NOT NULL。
- SQLite 連線要啟用 foreign_keys；組合主鍵可表達多對多關係中不可重複的配對。

## 1. 概念與前置知識

本單元整理「主鍵、外鍵與約束」。前置單元：Q06。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `PRIMARY KEY(student_id, course_id)` | 用組合鍵限制配對唯一性 |
| `FOREIGN KEY(student_id) REFERENCES students(student_id)` | 維持參照完整性 |

## 3. 最小範例與驗證

環境：SQLite 3.50.4。

撰寫環境：VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

除 Q08 外，先載入[共同測試資料 fixtures.sql](/QTpsTlZmcVVHSUxEOkpRRw/assets/learning/sql/fixtures.sql)。資料全部為合成範例，每次測試從新的記憶體資料庫開始。SQL 語句以 SQLite 驗證；⚠️ 未在 MySQL 執行，方言專屬行為不可直接外推。


```sql
CREATE TABLE study_logs (
  log_id INTEGER PRIMARY KEY,
  student_id INTEGER NOT NULL,
  minutes INTEGER NOT NULL CHECK(minutes > 0),
  label TEXT DEFAULT 'practice',
  FOREIGN KEY(student_id) REFERENCES students(student_id)
);
INSERT INTO study_logs(log_id,student_id,minutes) VALUES (1,1,25);
SELECT log_id,student_id,minutes,label FROM study_logs;
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
1 | 1 | 25 | practice
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：定義外鍵後以為任何 SQLite 連線都自動檢查。修正：確認 PRAGMA foreign_keys = ON。

### 陷阱 2

錯誤：只寫 CHECK(minutes &gt; 0) 就期待拒絕 NULL。修正：另外宣告 NOT NULL。

## 5. 執行與判題格式

查詢練習只提交題目要求的 SQL；題目已提供 schema 時，不要額外提交 CREATE TABLE。Q06–Q08 則在本機建立測試資料庫，確認約束與 ERD。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為三表模型補上主鍵與外鍵，測試重複選課、不存在的學生與不合法學分都會被拒絕。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

UNIQUE 是否一定等同於 NOT NULL？

<details><summary>答案</summary>

不等同；NULL 的允許與比較行為要依資料庫規則分別處理。

</details>

## 8. 來源與課綱對照

- [Language reference](https://www.sqlite.org/lang.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/sql/sql_constraints.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
