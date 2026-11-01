---
title: "Python P03 · Variables and Assignment"
published: 2026-11-01
description: "Python study notes: Variables and Assignment."
category: "Languages / Python"
tags: ["Python","variables","references"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 3
comment: false
---

## TL;DR

- 名稱綁定物件，物件具有型別；同一名稱之後可改綁不同物件。
- 多重指定可同時解包多個值；右側先求值，再完成左側指定。
- 名稱區分大小寫，應以有意義的命名表達資料角色。

## 1. 概念與前置知識

本單元整理「變數與指定」。前置單元：P02。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `name = value` | 將名稱綁定物件 |
| `a, b = b, a` | 同時交換兩個綁定 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
completed = 3
target = 7
completed, target = target, completed
print(completed, target)
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
7 3
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：尚未指定值就讀取名稱 → NameError。修正：先完成初始化。

### 陷阱 2

錯誤：x = y 後以為複製了 y 指向的整個物件。修正：區分名稱綁定與物件複製，容器複製在 P12 展開。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 交換兩個數值，先寫出交換前後的狀態，再以多重指定實作。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

同一個名稱能先綁定 int 再綁定 str 嗎？

<details><summary>答案</summary>

可以，這不會把原本的整數物件改成字串。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_variables.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
