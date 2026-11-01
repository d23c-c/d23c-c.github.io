---
title: "Python P13 · Functions and Arguments"
published: 2026-11-01
description: "Python study notes: Functions and Arguments."
category: "Languages / Python"
tags: ["Python","functions","references"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 13
comment: false
---

## TL;DR

- 函式參數綁定傳入的物件；修改可變物件可能反映到呼叫端，重新綁定參數則不同。
- 預設引數在函式定義時求值；可變預設物件可能在多次呼叫間共用。
- *args 收集位置引數，**kwargs 收集關鍵字引數；介面仍應優先保持清楚。

## 1. 概念與前置知識

本單元整理「函式、參數與可變預設值」。前置單元：P12。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `def add(value, history=None):` | 避免共用可變預設引數 |
| `*args / **kwargs` | 收集位置／關鍵字引數 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
def add_session(minutes, history=None):
    if history is None:
        history = []
    history.append(minutes)
    return history

print(add_session(20))
print(add_session(35))
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
[20]
[35]
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：def f(items=[]): items.append(...) → 呼叫間累積狀態。修正：以 None 為預設值並在函式內新建串列。

### 陷阱 2

錯誤：參數名稱重新綁定後期待呼叫端名稱也被改綁。修正：透過回傳值或明確修改物件交換結果。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立可選擇是否沿用既有紀錄的函式，測試兩次無參數容器呼叫是否互相獨立。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

Python 的預設參數每次呼叫都重新建立嗎？

<details><summary>答案</summary>

不會；預設運算式在定義函式時求值。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_functions.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
