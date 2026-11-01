---
title: "C++ C07 · Math and Booleans"
published: 2026-11-01
description: "C++ study notes: Math and Booleans."
category: "Languages / C++"
tags: ["C++","math","types"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 7
comment: false
---

## TL;DR

- cmath 提供 sqrt 等數學函式；輸入範圍與浮點誤差仍需要由程式處理。
- bool 只有 true 與 false；比較運算可直接產生布林值。
- boolalpha 只改變串流顯示格式，不會把變數型別改成字串。

## 1. 概念與前置知識

本單元整理「數學函式與布林值」。前置單元：C06。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `sqrt(value)` | 計算平方根，留意輸入範圍 |
| `cout << boolalpha` | 以 true/false 顯示布林值 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
cout << sqrt(81.0) << " " << abs(-6) << "\n";
bool complete = 4 >= 4;
cout << boolalpha << complete << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
9 6
true
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：直接用 == 比較累積運算後的浮點結果 → 可能因誤差失敗。修正：按問題允許誤差比較差值。

### 陷阱 2

錯誤：把所有非零數當成特定的 1 → 混淆數值與真假。修正：先明確寫出判斷條件。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 比較開根號前後的平方差，為浮點結果設定合理的容許誤差。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

boolalpha 會改變 complete 的值嗎？

<details><summary>答案</summary>

不會，只影響輸出表示方式。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_math.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
