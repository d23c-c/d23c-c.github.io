---
title: "Python P16 · Methods Properties and Magic Methods"
published: 2026-11-01
description: "Python study notes: Methods Properties and Magic Methods."
category: "Languages / Python"
tags: ["Python","oop","methods","magic-methods"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 16
comment: false
---

## TL;DR

- 屬性保存狀態，方法描述操作；方法可以更新實例或回傳查詢結果。
- __str__ 偏向易讀顯示，__repr__ 偏向除錯表示，兩者都必須回傳字串。
- __eq__ 定義值相等的語意；對不支援的比較型別可回傳 NotImplemented。

## 1. 概念與前置知識

本單元整理「方法、屬性與特殊方法」。前置單元：P15。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `def __str__(self):` | 定義易讀的字串表示 |
| `def __eq__(self, other):` | 定義值相等的語意 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
class Session:
    def __init__(self, minutes):
        self.minutes = minutes
    def extend(self, extra):
        self.minutes += extra
    def __str__(self):
        return f"{self.minutes} min"
    def __repr__(self):
        return f"Session({self.minutes})"
    def __eq__(self, other):
        if not isinstance(other, Session):
            return NotImplemented
        return self.minutes == other.minutes

session = Session(20)
session.extend(5)
print(session, repr(session), session == Session(25))
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
25 min Session(25) True
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：__str__ 回傳 int → TypeError。修正：回傳字串。

### 陷阱 2

錯誤：__eq__ 直接讀取任意 other.minutes → 可能 AttributeError。修正：先處理不支援的型別。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為 Session 定義易讀顯示、除錯表示與值相等；比較相同值、不同值與不同型別。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

a == b 與 a is b 是否都由 __eq__ 決定？

<details><summary>答案</summary>

不是；只有 == 使用相等比較協定，is 比較物件身分。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_class_methods.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
