---
title: "Python P02 · Reading Input"
published: 2026-11-01
description: "Python study notes: Reading Input."
category: "Languages / Python"
tags: ["Python","input-output","conversion"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 2
comment: false
---

## TL;DR

- input 讀取一行並回傳字串，移除行尾換行；不會自動轉成數字。
- 需要整數時使用 int，輸入格式錯誤會引發 ValueError。
- 判題時不要加入額外提示字串；讀到 EOF 的情境與只讀一行不同。

## 1. 概念與前置知識

本單元整理「讀取輸入」。前置單元：P01。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `input()` | 取得一行字串 |
| `int(text)` | 將合法整數字串轉型 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
minutes = int(input())
print(minutes + 5)
```

輸入：
```text
25
```

實際輸出：

```text
30
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：input() + 1 → 字串與整數不能直接相加。修正：先轉型。

### 陷阱 2

錯誤：預期永遠有下一行 → 到 EOF 時可能引發 EOFError。修正：依輸入規格選擇固定筆數或逐行讀取。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 讀取一行文字與一行整數，分清楚字串串接與數值相加。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

input 會自動辨識小數嗎？

<details><summary>答案</summary>

不會，仍回傳 str。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_user_input.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
