---
title: "Python P09 · Dictionaries"
published: 2026-11-01
description: "Python study notes: Dictionaries."
category: "Languages / Python"
tags: ["Python","collections","dictionaries"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 9
comment: false
---

## TL;DR

- dict 以可雜湊的鍵查找值；重複鍵會覆蓋先前對應的值。
- 索引讀取不存在的鍵會引發 KeyError，get 可提供預設值。
- 巢狀 dict 可表達結構化記錄，但淺複製不會複製所有內層物件。

## 1. 概念與前置知識

本單元整理「Dictionary 與鍵值資料」。前置單元：P08。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `mapping.get(key, default)` | 安全查詢並提供預設值 |
| `mapping.items()` | 走訪鍵值配對 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
progress = {"cpp": 4, "python": 2}
progress["python"] += 1
print(progress.get("sql", 0))
print(sorted(progress.items()))
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
0
[('cpp', 4), ('python', 3)]
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：直接讀不存在的 progress['sql'] → KeyError。修正：先檢查鍵或使用 get。

### 陷阱 2

錯誤：把 list 當成字典鍵 → TypeError。修正：使用適合且可雜湊的鍵。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 以語言名稱為鍵保存學習進度，更新既有記錄並安全查詢不存在的語言。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

走訪 dict 時預設取得鍵還是值？

<details><summary>答案</summary>

鍵；需要鍵值對時使用 items()。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_dictionaries.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
