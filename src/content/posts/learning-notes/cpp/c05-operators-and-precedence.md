---
title: "C++ C05 · Operators and Precedence"
published: 2026-11-01
description: "C++ study notes: Operators and Precedence."
category: "Languages / C++"
tags: ["C++","operators","control-flow"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 5
comment: false
---

## TL;DR

- 算術、指定、比較與邏輯運算子有不同用途；= 指定，== 比較。
- && 與 || 會短路求值；先判斷分母或指標是否有效，再做後續運算。
- 乘除先於加減，複雜條件應加括號；整數除法向零截斷。

## 1. 概念與前置知識

本單元整理「運算子與優先序」。前置單元：C04。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `a == b` | 比較值是否相等 |
| `a > 0 && a < 10` | 組合兩個條件，採短路求值 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int n = 7;
cout << n / 2 << " " << n % 2 << "\n";
cout << (n > 0 && n < 10) << " " << (2 + 3 * 4) << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
3 1
1 14
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：if (n = 0) → 修改 n 而不是比較。修正：使用 n == 0，並留意編譯警告。

### 陷阱 2

錯誤：用 0 &lt; n &lt; 10 表示區間 → 前半部先變成 bool。修正：寫成 0 &lt; n && n &lt; 10。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為區間檢查建立邊界測試：-1、0、1、9、10；說明每個條件的真假。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

-7 / 2 在整數運算中是多少？

<details><summary>答案</summary>

-3；C++ 整數除法向零截斷。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_operators.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
