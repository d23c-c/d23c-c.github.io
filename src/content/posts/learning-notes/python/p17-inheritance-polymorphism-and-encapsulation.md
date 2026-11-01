---
title: "Python P17 · Inheritance Polymorphism and Encapsulation"
published: 2026-11-01
description: "Python study notes: Inheritance Polymorphism and Encapsulation."
category: "Languages / Python"
tags: ["Python","oop","inheritance","polymorphism"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 17
comment: false
---

## TL;DR

- 衍生類別可覆寫方法，super 可沿方法解析順序呼叫上層實作。
- 多型讓相同呼叫介面適用於不同物件；Python 不要求所有情境都共享同一個基底類別。
- 單底線是非公開介面的慣例；雙底線名稱改寫也不是安全邊界。

## 1. 概念與前置知識

本單元整理「繼承、多型與封裝」。前置單元：P16。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `class Practice(Session):` | 宣告衍生類別 |
| `super().__init__(value)` | 沿方法解析順序初始化上層狀態 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
class Session:
    def __init__(self, minutes):
        self._minutes = minutes
    def label(self):
        return "session"

class Practice(Session):
    def label(self):
        return f"practice: {self._minutes} min"

print(Practice(30).label())
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
practice: 30 min
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：衍生 __init__ 忘記初始化基底需要的狀態 → 方法可能找不到屬性。修正：適當呼叫 super().__init__。

### 陷阱 2

錯誤：把 _name 當成外部完全無法存取。修正：以介面與約定管理封裝，不把它當成權限控制。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立兩種課程物件，讓相同 label 呼叫產生不同顯示；加入無效時間的處理規則。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

Python 需要在方法前加 virtual 才能覆寫嗎？

<details><summary>答案</summary>

不需要；一般實例方法可由衍生類別重新定義。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_inheritance.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
