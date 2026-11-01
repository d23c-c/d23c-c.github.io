---
title: "Python P06 · Booleans and Operators"
published: 2026-11-01
description: "Python study notes: Booleans and Operators."
category: "Languages / Python"
tags: ["Python","operators","conditions"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 6
comment: false
---

## TL;DR

- and、or 採短路求值，且回傳運算元，不保證結果是 bool。
- in 測試成員關係；is 測試物件身分，不是一般值相等。
- 空字串與數值 0 為假，但字串 '0' 非空，因此為真。

## 1. 概念與前置知識

本單元整理「布林、邏輯與成員運算」。前置單元：P05。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `value in collection` | 測試成員關係 |
| `left is right` | 測試物件身分，不是值相等 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
minutes = 18
print(10 <= minutes < 30)
print("py" in "python")
print(bool(""), bool("0"))
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
True
True
False True
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：以 is 比較兩個數字或字串的值 → 依物件重用而出現不可靠結果。修正：值比較用 ==。

### 陷阱 2

錯誤：用 & 代替 and → 變成位元或型別自訂運算。修正：一般條件組合使用 and。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為輸入值建立範圍、空字串與成員檢查，測試每個短路條件。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

bool('False') 是否為 False？

<details><summary>答案</summary>

不是；它是非空字串，所以為 True。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_operators.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
