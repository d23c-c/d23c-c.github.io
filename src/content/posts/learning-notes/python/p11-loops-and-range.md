---
title: "Python P11 · Loops and Range"
published: 2026-11-01
description: "Python study notes: Loops and Range."
category: "Languages / Python"
tags: ["Python","loops","control-flow"]
lang: "zh-TW"
series: "Python Learning Notes"
seriesOrder: 11
comment: false
---

## TL;DR

- for 逐一取得可迭代物件的元素；range 的 stop 不包含在結果內。
- while 依條件重複執行；停止條件與狀態更新缺一不可。
- continue 與 break 影響最近一層迴圈；迴圈 else 只在未經 break 結束時執行。

## 1. 概念與前置知識

本單元整理「迴圈與 range」。前置單元：P10。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `range(start, stop, step)` | 不包含 stop 的整數序列 |
| `continue` | 跳到下一輪，注意狀態是否前進 |

## 3. 最小範例與驗證

環境：Python 3.12.12。

撰寫環境：VS Code；Linux 上以文字編輯器建立 .py 檔後編寫腳本。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```python
total = 0
for minutes in range(10, 31, 10):
    total += minutes
print(total)
count = 0
while count < 2:
    print(count)
    count += 1
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
60
0
1
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：range(1,5) 以為包含 5 → 只得到 1 到 4。修正：明確設計半開區間。

### 陷阱 2

錯誤：continue 跳過 while 的計數更新 → 可能無限迴圈。修正：確認所有路徑都能前進。

## 5. 執行與判題格式

本機使用 `python main.py` 執行。ZeroJudge 需要完整程式與標準輸入輸出；P13 起才加入 LeetCode 函式題，需遵守平台提供的介面。不要把本篇範例當成任何判題題目的完整解答。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 累計等差練習時間，測試正向、反向與空 range，不使用自訂函式。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

range(5,1,-1) 的最後一個數字是什麼？

<details><summary>答案</summary>

2；終點 1 不包含在內。

</details>

## 8. 來源與課綱對照

- [Language reference](https://docs.python.org/3.12/tutorial/)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/python/python_for_loops.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
