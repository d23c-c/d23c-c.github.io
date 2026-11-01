---
title: "C++ C02 · Input and Output"
published: 2026-11-01
description: "C++ study notes: Input and Output."
category: "Languages / C++"
tags: ["C++","input-output"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 2
comment: false
---

## TL;DR

- cout 使用 &lt;&lt; 輸出，cin 使用 &gt;&gt; 擷取格式化輸入。
- 擷取整數時會略過前導空白；輸入型別不符會設定失敗狀態。
- 批次判題不要額外輸出提示文字；多筆測資用讀取成功當作迴圈條件。

## 1. 概念與前置知識

本單元整理「輸入與輸出」。前置單元：C01。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `cin >> value` | 格式化讀取 |
| `cout << value << '\n'` | 輸出數值與換行 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int value;
cin >> value;
cout << "Next: " << value + 1 << "\n";
}
```

輸入：
```text
8
```

實際輸出：

```text
Next: 9
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：cin &lt;&lt; value → 編譯失敗；串流方向用反。修正：輸入使用 &gt;&gt;。

### 陷阱 2

錯誤：未檢查讀取是否成功就使用 value → 可能處理無效資料。修正：以 if (cin &gt;&gt; value) 保護後續運算。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 讀入兩個整數並分兩行輸出，另測試空白、換行與非數字輸入。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

輸入兩個數字時，空白和換行可以互換嗎？

<details><summary>答案</summary>

格式化整數輸入通常都視為分隔空白。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_user_input.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
