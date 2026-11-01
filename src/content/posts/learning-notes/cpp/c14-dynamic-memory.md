---
title: "C++ C14 · Dynamic Memory"
published: 2026-11-01
description: "C++ study notes: Dynamic Memory."
category: "Languages / C++"
tags: ["C++","memory","pointers"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 14
comment: false
---

## TL;DR

- new 配置物件並回傳指標，delete 結束單一動態物件的生命週期。
- 陣列配置 new[] 必須對應 delete[]；配置與釋放方式不能混用。
- 本單元練習辨識所有權與生命週期；同一份資源只能釋放一次。

## 1. 概念與前置知識

本單元整理「動態記憶體」。前置單元：C13。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `new int(25)` | 動態建立單一整數 |
| `delete[] values;` | 釋放以 new[] 配置的陣列 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int* minutes = new int(25);
cout << *minutes << "\n";
delete minutes;
minutes = nullptr;
int* values = new int[2]{4, 8};
cout << values[0] + values[1] << "\n";
delete[] values;
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
25
12
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：new[] 配 delete → 未定義行為。修正：配置與釋放成對使用。

### 陷阱 2

錯誤：delete p 後又使用 *p → use-after-free。修正：釋放後停止存取並清楚管理所有權。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 配置三元素整數陣列、填入數值、輸出總和，再正確釋放一次。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

delete p 會自動把 p 改成 nullptr 嗎？

<details><summary>答案</summary>

不會；需要自行指定，而且其他指標副本也不會同步更新。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_memory_management.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
