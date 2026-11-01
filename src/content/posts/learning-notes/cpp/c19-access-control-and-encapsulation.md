---
title: "C++ C19 · Access Control and Encapsulation"
published: 2026-11-01
description: "C++ study notes: Access Control and Encapsulation."
category: "Languages / C++"
tags: ["C++","oop","encapsulation"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 19
comment: false
---

## TL;DR

- private 隱藏類別內部資料，public 提供對外操作介面。
- 封裝的重點是維持有效狀態，不只是把欄位改成 private。
- 修改方法要明確定義無效輸入的處理方式；查詢方法可標為 const。

## 1. 概念與前置知識

本單元整理「存取控制與封裝」。前置單元：C18。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `private: int value;` | 隱藏內部狀態 |
| `int minutes() const` | 不修改此物件狀態的查詢方法 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
class Session { private: int value = 0; public: void setMinutes(int n) { if (n >= 0) value = n; } int minutes() const { return value; } };
int main() {
Session log;
log.setMinutes(-4);
cout << log.minutes() << "\n";
log.setMinutes(30);
cout << log.minutes() << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
0
30
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：由外部直接寫入 private 成員 → 編譯失敗。修正：透過公開的方法操作。

### 陷阱 2

錯誤：setter 無條件接受負時間 → 雖然封裝了欄位，仍破壞狀態。修正：在邊界驗證資料。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為成績或時間欄位設定合法範圍；測試小於下界、剛好邊界與正常值。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

有 getter/setter 就一定達成良好封裝嗎？

<details><summary>答案</summary>

不一定；仍必須維持資料的不變條件。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_encapsulation.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
