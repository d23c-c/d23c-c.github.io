---
title: "C++ C10 · Arrays"
published: 2026-11-01
description: "C++ study notes: Arrays."
category: "Languages / C++"
tags: ["C++","arrays","loops"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 10
comment: false
---

## TL;DR

- 固定陣列的元素型別相同，索引範圍是 0 到元素數量減一。
- range-based for 可依序取出元素；索引迴圈適合需要位置的情境。
- 二維陣列可用巢狀迴圈處理；必須分清楚列數與行數。

## 1. 概念與前置知識

本單元整理「一維與多維陣列」。前置單元：C09。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `int values[3] = {};` | 建立零初始化固定陣列 |
| `for (int value : values)` | 依序取得陣列元素 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int scores[3] = {72, 86, 91};
int total = 0;
for (int value : scores) total += value;
cout << total << " " << scores[1] << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
249 86
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：讀取 scores[3] → 超出三元素陣列邊界，涉及未定義行為。修正：檢查索引範圍。

### 陷阱 2

錯誤：以為區域陣列未指定的所有位置都有任意可用值。修正：使用完整初始化或 {} 零初始化。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 記錄五次練習分數，計算總分並輸出每筆分數的位置；不使用 vector。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

int a[4] = {} 的四個元素初始值為何？

<details><summary>答案</summary>

全部為 0。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_arrays.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
