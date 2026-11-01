---
title: "Python P05 · Strings and Slicing"
published: 2026-11-01
description: "Python study notes: Strings and Slicing."
category: "Languages / Python"
tags: ["Python","strings","slicing"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 5
comment: false
---

## TL;DR

- str 是不可變的 Unicode 字元序列，索引支援負值。
- 切片 [start:stop:step] 不包含 stop；省略邊界時使用序列的對應端點。
- f-string 把運算式放入格式化字串；方法通常回傳新字串而非原地修改。

## 1. 概念與前置知識

本單元整理「字串、切片與格式化」。前置單元：P04。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `text[start:stop:step]` | 半開區間切片 |
| `f'length={len(text)}'` | 以運算式格式化字串 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
name = "python notes"
print(name[0], name[-1])
print(name[:6].upper())
print(f"length={len(name)}")
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
p s
PYTHON
length=12
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：name[0] = 'P' → TypeError。修正：建立新的字串。

### 陷阱 2

錯誤：忘記 upper() 的回傳值 → 原字串沒有改變。修正：保留方法回傳的新值。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 將輸入標題去除前後空白、建立縮寫並以 f-string 輸出摘要。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

s[:3] 包含索引 3 的字元嗎？

<details><summary>答案</summary>

不包含，只取 0、1、2。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_strings.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
