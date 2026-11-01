---
title: "C++ C03 · Variables and Constants"
published: 2026-11-01
description: "C++ study notes: Variables and Constants."
category: "Languages / C++"
tags: ["C++","variables","types"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 3
comment: false
---

## TL;DR

- 變數具有型別、名稱與儲存的值；宣告時初始化能避免讀取未定值。
- 識別字區分大小寫，不能以數字開頭，也不能使用保留字。
- const 限制初始化之後的修改，適合表達固定上限或設定。

## 1. 概念與前置知識

本單元整理「變數與常數」。前置單元：C02。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `int count = 0;` | 宣告並初始化 |
| `const int limit = 6;` | 初始化後不可重新指定 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int lessons = 3;
const int target = 6;
lessons += 1;
cout << lessons << "/" << target << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
4/6
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：int score; 後直接讀 score → 可能涉及未定值與未定義行為。修正：宣告時初始化。

### 陷阱 2

錯誤：對 const 變數重新賦值 → 編譯失敗。修正：需要變動的狀態不要宣告為 const。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 用兩個變數記錄已完成與目標單元數，更新進度但維持目標不變。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

count 與 Count 是同一個變數嗎？

<details><summary>答案</summary>

不是；C++ 識別字區分大小寫。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_variables.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
