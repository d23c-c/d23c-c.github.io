---
title: "Python P04 · Types Numbers and Casting"
published: 2026-11-01
description: "Python study notes: Types Numbers and Casting."
category: "Languages / Python"
tags: ["Python","types","conversion","operators"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 4
comment: false
---

## TL;DR

- int 可表示任意精度整數，但仍受到可用記憶體限制；float 具有有限精度。
- / 為一般除法，// 為向下取整的除法，% 與 // 的規則配合。
- int、float、str 是明確轉型工具；不能把無效格式當成正常數字。

## 1. 概念與前置知識

本單元整理「型別、數字與轉型」。前置單元：P03。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `a / b` | 一般除法 |
| `a // b` | 向下取整的商 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
text = "24"
minutes = int(text)
print(type(minutes).__name__)
print(minutes / 5, minutes // 5, minutes % 5)
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
int
4.8 4 4
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：int('3.5') → ValueError。修正：先理解資料型別，不能直接以 int 解析小數字串。

### 陷阱 2

錯誤：以為 -7 // 2 是 -3 → Python 會向下取整為 -4。修正：區分向下取整與向零截斷。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 比較正負數的 /、//、% 關係，檢查 a == (a//b)*b + a%b。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

-7 % 2 是多少？

<details><summary>答案</summary>

1；與向下取整的商 -4 配合。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_numbers.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
