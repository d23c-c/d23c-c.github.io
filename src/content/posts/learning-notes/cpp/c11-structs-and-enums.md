---
title: "C++ C11 · Structs and Enums"
published: 2026-11-01
description: "C++ study notes: Structs and Enums."
category: "Languages / C++"
tags: ["C++","structs","types"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 11
comment: false
---

## TL;DR

- struct 把相關欄位組成一筆資料，透過點號存取成員。
- enum 以具名值表達狀態，比散落的數字常值更容易閱讀。
- 多筆記錄可放進結構陣列；型別定義與物件宣告是不同動作。

## 1. 概念與前置知識

本單元整理「結構與列舉」。前置單元：C10。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `struct Entry { int minutes; };` | 定義複合資料型別 |
| `enum Stage { Review, Practice };` | 為狀態提供名稱 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
struct Lesson { int id; int minutes; };
enum Stage { Review, Practice, Complete };
int main() {
Lesson entry = {2, 45};
Stage stage = Practice;
cout << entry.id << " " << entry.minutes << " " << stage << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
2 45 1
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：在 struct 定義結尾漏寫分號 → 編譯失敗。修正：使用 }; 結束型別定義。

### 陷阱 2

錯誤：把任何整數直接當成有效狀態 → 失去列舉的語意限制。修正：只接受已定義的狀態並驗證輸入。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為學習單元建立包含代號、時間與狀態的結構，列出三筆記錄。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

定義 struct Lesson 是否已經建立一筆 Lesson 資料？

<details><summary>答案</summary>

沒有；還需要宣告物件。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_structs.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
