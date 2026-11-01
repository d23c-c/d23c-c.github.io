---
title: "C++ C15 · Functions and Parameters"
published: 2026-11-01
description: "C++ study notes: Functions and Parameters."
category: "Languages / C++"
tags: ["C++","functions"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 15
comment: false
---

## TL;DR

- 函式用具名介面封裝工作；參數是輸入，return 決定回傳值。
- 呼叫前需要可見的宣告或定義；回傳型別應符合運算需求。
- 預設參數由呼叫端省略尾端引數時採用；定義與宣告不要重複指定。

## 1. 概念與前置知識

本單元整理「函式基礎與回傳值」。前置單元：C14。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `int total(int n) { return n * 20; }` | 定義參數與回傳值 |
| `int minutes = 20` | 在參數列表提供尾端預設值 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
int sessionMinutes(int sessions, int minutes = 20) { return sessions * minutes; }
int main() {
cout << sessionMinutes(3) << " " << sessionMinutes(2, 15) << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
60 30
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：非 void 函式走到沒有回傳值的路徑 → 結果不可靠。修正：涵蓋所有分支。

### 陷阱 2

錯誤：將函式內的區域變數當成呼叫端可直接存取的值。修正：透過參數與回傳值交換資料。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立將練習次數轉成總分鐘數的函式，再測試 0 次與不同的每次時間。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

預設參數會讓函式不能接收明確的第二個引數嗎？

<details><summary>答案</summary>

不會；有提供引數就使用呼叫端的值。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_functions.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
