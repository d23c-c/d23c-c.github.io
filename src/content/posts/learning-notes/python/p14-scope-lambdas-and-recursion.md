---
title: "Python P14 · Scope Lambdas and Recursion"
published: 2026-11-01
description: "Python study notes: Scope Lambdas and Recursion."
category: "Languages / Python"
tags: ["Python","functions","recursion","lambdas"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 14
comment: false
---

## TL;DR

- 名稱查找依區域、外層函式、全域與內建範圍進行；指定名稱可能使它成為區域名稱。
- lambda 只能包含單一運算式，複雜邏輯應使用 def。
- 遞迴需要終止條件且受遞迴深度限制，不適合無限制的深層輸入。

## 1. 概念與前置知識

本單元整理「作用域、Lambda 與遞迴」。前置單元：P13。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `lambda n: n + 5` | 單一運算式函式 |
| `if n <= 0: return 0` | 遞迴的終止條件 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
def countdown_total(n):
    if n <= 0:
        return 0
    return n + countdown_total(n - 1)

adjust = lambda minutes: minutes + 5
print(countdown_total(4), adjust(20))
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
10 25
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：函式內先讀後指定同名全域名稱 → 可能 UnboundLocalError。修正：優先以參數傳值，確有需要才使用 global。

### 陷阱 2

錯誤：遞迴沒有終止條件 → RecursionError。修正：定義最小問題並確認每次呼叫會靠近它。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 分別用迴圈與遞迴累計相同範圍；為 0、1 與負值定義一致行為。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

lambda 適合放多行複雜流程嗎？

<details><summary>答案</summary>

不適合；改用具名函式較清楚。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_scope.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
