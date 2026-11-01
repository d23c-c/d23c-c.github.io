---
title: "Python P07 · Lists"
published: 2026-11-01
description: "Python study notes: Lists."
category: "Languages / Python"
tags: ["Python","collections","lists","loops"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 7
comment: false
---

## TL;DR

- list 是可變的有序容器；append 加入單一物件，extend 展開可迭代物件。
- sort 原地修改並回傳 None；sorted 產生新的排序串列。
- 串列生成式把轉換與條件寫在同一個運算式，仍應維持可讀性。

## 1. 概念與前置知識

本單元整理「List、排序與串列生成式」。前置單元：P06。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `items.append(value)` | 在尾端加入單一物件 |
| `sorted(items)` | 建立排序後的新串列 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
minutes = [20, 35, 15]
minutes.append(25)
ordered = sorted(minutes)
print(ordered)
print([value * 2 for value in minutes if value >= 20])
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
[15, 20, 25, 35]
[40, 70, 50]
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：result = values.sort() → result 變成 None。修正：排序後讀 values，或使用 sorted。

### 陷阱 2

錯誤：在走訪同一串列時刪除元素 → 可能跳過項目。修正：走訪副本或建立篩選後的新串列。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 整理五次練習時間，保留原順序的同時產生排序版，再篩出達標的記錄。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

append([1,2]) 與 extend([1,2]) 相同嗎？

<details><summary>答案</summary>

不同；前者加入一個串列物件，後者加入兩個元素。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_lists.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
