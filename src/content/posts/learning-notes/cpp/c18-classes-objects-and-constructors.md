---
title: "C++ C18 · Classes Objects and Constructors"
published: 2026-11-01
description: "C++ study notes: Classes Objects and Constructors."
category: "Languages / C++"
tags: ["C++","classes","oop","constructors"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 18
comment: false
---

## TL;DR

- class 描述物件的資料與操作；兩個物件通常各自保有獨立狀態。
- 建構子在建立物件時初始化狀態，名稱與類別相同且沒有回傳型別。
- 方法可以在類別內定義，或在外部使用範圍解析運算子定義。

## 1. 概念與前置知識

本單元整理「類別、物件與建構子」。前置單元：C17。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `Session(int n) : value(n) {}` | 建構子成員初始化列表 |
| `Session item(25);` | 建立一個實例 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
class Session { int value; public: Session(int minutes): value(minutes) {} int minutes() const { return value; } };
int main() {
Session morning(25);
Session afternoon(40);
cout << morning.minutes() << " " << afternoon.minutes() << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
25 40
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：把建構子宣告成 void Session() → 不再是合法的建構子寫法。修正：移除回傳型別。

### 陷阱 2

錯誤：建構時沒有初始化成員，之後直接讀取 → 值可能未定。修正：使用成員初始化列表。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立 StudySession 類別，初始化兩個物件並證明修改其中一個不會更新另一個。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

類別與物件是否相同？

<details><summary>答案</summary>

類別是型別定義，物件是該型別的實例。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_classes.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
