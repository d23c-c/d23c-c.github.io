---
title: "C++ C21 · Polymorphism and Virtual Functions"
published: 2026-11-01
description: "C++ study notes: Polymorphism and Virtual Functions."
category: "Languages / C++"
tags: ["C++","oop","polymorphism","memory"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 21
comment: false
---

## TL;DR

- 透過基底指標或參照呼叫 virtual 方法，才會依物件的動態型別選擇實作。
- override 讓編譯器檢查是否真的覆寫了基底方法，避免簽名不一致。
- 透過基底指標刪除衍生物件時，基底解構子必須為 virtual；同時遵守動態記憶體所有權。

## 1. 概念與前置知識

本單元整理「多型與虛擬函式」。前置單元：C20。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `virtual const char* kind() const` | 定義動態派送介面 |
| `kind() const override` | 要求編譯器檢查覆寫簽名 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
class Session { public: virtual const char* kind() const { return "session"; } virtual ~Session() = default; };
class Practice : public Session { public: const char* kind() const override { return "practice"; } };
int main() {
Session* current = new Practice;
cout << current->kind() << "\n";
delete current;
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
practice
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：基底方法未宣告 virtual 卻期待動態派送 → 呼叫可能依靜態型別選擇。修正：明確定義虛擬介面。

### 陷阱 2

錯誤：將衍生物件以值複製成基底物件 → 發生物件切割。修正：需要多型時使用有效的參照或指標。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 為兩種課程實作同一個虛擬查詢方法，透過基底指標操作並驗證不同輸出。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

override 能修正參數型別寫錯的覆寫嗎？

<details><summary>答案</summary>

它不會自動修正，但能讓編譯器指出簽名不匹配。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_polymorphism.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
