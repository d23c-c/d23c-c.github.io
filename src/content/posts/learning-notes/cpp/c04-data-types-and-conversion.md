---
title: "C++ C04 · Data Types and Conversion"
published: 2026-11-01
description: "C++ study notes: Data Types and Conversion."
category: "Languages / C++"
tags: ["C++","types","conversion"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 4
comment: false
---

## TL;DR

- 整數與浮點數的表示範圍、精度不同；型別大小不要直接假設所有平台相同。
- char 儲存字元值，bool 表達真假；auto 由初始化運算式推導型別。
- 除法前轉為 double 才能保留小數，除完才轉型無法找回已截去的部分。

## 1. 概念與前置知識

本單元整理「型別、數字與轉型」。前置單元：C03。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `static_cast<double>(n)` | 明確轉為浮點數 |
| `auto n = 5 / 2;` | 依整數運算結果推導為 int |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int count = 5;
double average = static_cast<double>(count) / 2;
char level = 'B';
bool ready = true;
cout << average << " " << level << " " << ready << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
2.5 B 1
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：double x = 5 / 2 → 得到 2；原因是先做整數除法。修正：讓一個運算元先成為 double。

### 陷阱 2

錯誤：把過大的數值放入較小型別 → 可能溢位或截斷。修正：依資料範圍選型別並檢查邊界。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 比較同一組整數在整數除法與浮點除法中的結果，另測試負值。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

auto x = 5 / 2 的 x 是 double 嗎？

<details><summary>答案</summary>

不是；運算結果是 int。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_data_types.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
