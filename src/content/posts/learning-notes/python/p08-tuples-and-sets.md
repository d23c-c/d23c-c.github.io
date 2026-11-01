---
title: "Python P08 · Tuples and Sets"
published: 2026-11-01
description: "Python study notes: Tuples and Sets."
category: "Languages / Python"
tags: ["Python","collections","sets","tuples"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 8
comment: false
---

## TL;DR

- tuple 固定的是元素參照排列；若其中放入可變物件，該物件仍可能改變。
- set 表達不重複成員集合，不支援一般位置索引，不應依賴迭代順序。
- 單元素 tuple 需要逗號；空 set 使用 set()，不是 {}。

## 1. 概念與前置知識

本單元整理「Tuple 與 Set」。前置單元：P07。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `(value,)` | 單元素 tuple |
| `set()` | 建立空 set |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
point = (3, 5)
x, y = point
unique = {2, 4, 2, 6}
print(x, y)
print(sorted(unique))
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
3 5
[2, 4, 6]
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：(3) 當成 tuple → 實際是 int。修正：寫成 (3,)。

### 陷阱 2

錯誤：用 {} 建立空集合 → 實際是 dict。修正：使用 set()。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 用 tuple 保存不可重新排列的座標，用 set 去除重複課程代號；排序後再顯示。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

set 的元素可以是 list 嗎？

<details><summary>答案</summary>

一般 list 不可雜湊，不能作為 set 元素。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_tuples.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
