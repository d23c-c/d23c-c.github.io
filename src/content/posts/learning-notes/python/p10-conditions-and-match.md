---
title: "Python P10 · Conditions and Match"
published: 2026-11-01
description: "Python study notes: Conditions and Match."
category: "Languages / Python"
tags: ["Python","conditions","control-flow"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 10
comment: false
---

## TL;DR

- if/elif/else 依序判斷，只執行第一個成立的分支。
- match 從 Python 3.10 起提供結構模式比對；它不是 C++ switch 的完全對應。
- pass 是空敘述，可作為尚無內容的區塊，但不會自動完成任何工作。

## 1. 概念與前置知識

本單元整理「條件判斷與 match」。前置單元：P09。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `if cond: ... elif other: ...` | 依序選擇第一個成立的條件 |
| `case _:` | match 的通用分支 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
level = 2
if level >= 3:
    print("advanced")
elif level == 2:
    print("practice")
else:
    print("review")
match level:
    case 2:
        print("two")
    case _:
        print("other")
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
practice
two
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：elif 前面沒有 if → SyntaxError。修正：建立完整的條件鏈。

### 陷阱 2

錯誤：case name 以為在比較既有變數 → 可能是擷取模式。修正：理解常值、擷取與限定名稱模式的差異。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 設計課程進度分級，測試每條分支與邊界；match 的預設分支使用 _。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

if 和 elif 都成立時會執行兩個區塊嗎？

<details><summary>答案</summary>

不會，只執行第一個成立的分支。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_conditions.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
