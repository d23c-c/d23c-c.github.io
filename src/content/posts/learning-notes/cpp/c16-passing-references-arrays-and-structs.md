---
title: "C++ C16 · Passing References Arrays and Structs"
published: 2026-11-01
description: "C++ study notes: Passing References Arrays and Structs."
category: "Languages / C++"
tags: ["C++","functions","references","arrays"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 16
comment: false
---

## TL;DR

- 傳值建立參數副本；非 const 參照讓函式能修改呼叫端的物件。
- const 參照可避免不必要的複製，並限制透過該參數修改資料。
- 陣列作為函式參數通常退化為指標，應另傳長度，不能在函式內用 sizeof 推算原陣列長度。

## 1. 概念與前置知識

本單元整理「參照、陣列與結構參數」。前置單元：C15。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `void update(Entry& entry)` | 透過參照修改呼叫端物件 |
| `int total(const int values[], int size)` | 傳遞唯讀元素介面及有效長度 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
struct Lesson { int minutes; };
void addMinutes(Lesson& log, int extra) { log.minutes += extra; }
int total(const int values[], int size) { int result = 0; for (int i=0;i<size;++i) result += values[i]; return result; }
int main() {
Lesson log{20};
addMinutes(log, 10);
int values[2]{5, 7};
cout << log.minutes << " " << total(values, 2) << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
30 12
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：傳值後期待原結構被更新 → 只改到副本。修正：需要修改原物件時用參照參數。

### 陷阱 2

錯誤：用參數的 sizeof 當陣列總長 → 量到的是指標大小。修正：明確傳入有效元素數。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 用函式更新學習記錄，再寫只讀陣列參數的統計函式；測試長度為 0。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

const int values[] 能禁止呼叫端修改原陣列嗎？

<details><summary>答案</summary>

不能；它只限制此函式透過該參數的修改。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_function_reference.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
