---
title: "C++ C17 · Overloading Scope Recursion and Lambdas"
published: 2026-11-01
description: "C++ study notes: Overloading Scope Recursion and Lambdas."
category: "Languages / C++"
tags: ["C++","functions","recursion","lambdas"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 17
comment: false
---

## TL;DR

- 函式多載依參數型別與數量區分，不能只靠回傳型別。
- 區域名稱有作用域；同名遮蔽容易讓人修改錯誤的物件。
- 遞迴需要終止條件；Lambda 的擷取列表決定如何取得外部變數。

## 1. 概念與前置知識

本單元整理「多載、作用域、遞迴與 Lambda」。前置單元：C16。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `[offset](int n) { return n + offset; }` | 以值擷取外部資料的 Lambda |
| `return 1 + steps(n - 1);` | 向終止條件縮小遞迴問題 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
int twice(int n) { return n * 2; }
double twice(double n) { return n * 2; }
int steps(int n) { if (n <= 0) return 0; return 1 + steps(n-1); }
int main() {
int offset = 2;
auto adjust = [offset](int n) { return n + offset; };
cout << twice(3) << " " << twice(1.5) << " " << steps(3) << " " << adjust(4) << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
6 3 3 6
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：遞迴時參數沒有靠近終止條件 → 可能堆疊耗盡。修正：證明每次呼叫都縮小問題。

### 陷阱 2

錯誤：離開區域後使用擷取區域參照的 Lambda → 可能懸空。修正：確認生命週期或以值擷取。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 以多載處理整數與浮點學習時間；為遞迴建立 n=0、1、4 的測試。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

int f(int) 與 double f(int) 能形成多載嗎？

<details><summary>答案</summary>

不能；參數列表相同，回傳型別不足以區分。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_function_overloading.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
