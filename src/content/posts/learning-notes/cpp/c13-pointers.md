---
title: "C++ C13 · Pointers"
published: 2026-11-01
description: "C++ study notes: Pointers."
category: "Languages / C++"
tags: ["C++","pointers","memory"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 13
comment: false
---

## TL;DR

- 指標儲存位址，& 取得物件位址，* 解參照存取該位址的物件。
- 指標可以改指向其他物件，也可以是 nullptr；這與一般參照不同。
- 解參照前必須確認物件仍存活且指標有效；非 nullptr 不等於一定有效。

## 1. 概念與前置知識

本單元整理「指標與解參照」。前置單元：C12。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `int* p = &value;` | 儲存物件位址 |
| `*p = 35;` | 修改指向的物件，需確保指標有效 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int minutes = 20;
int* pointer = &minutes;
*pointer = 35;
cout << minutes << " " << *pointer << "\n";
pointer = nullptr;
cout << (pointer == nullptr) << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
35 35
1
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：解參照 nullptr → 未定義行為。修正：先檢查並建立有效的物件關係。

### 陷阱 2

錯誤：物件生命週期結束後仍使用其位址 → 懸空指標。修正：讓使用範圍不超過物件生命週期。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 用一個指標輪流修改兩個整數；最後設為 nullptr，停止解參照。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

p 與 *p 的意思相同嗎？

<details><summary>答案</summary>

不同；p 是位址，*p 是該位址所指物件的存取。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_pointers.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
