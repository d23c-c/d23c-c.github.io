---
title: "C++ C01 · Environment and Syntax"
published: 2026-11-01
description: "C++ study notes: Environment and Syntax."
category: "Languages / C++"
tags: ["C++","syntax","setup"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 1
comment: false
---

## TL;DR

- 原始碼先經編譯與連結才成為可執行檔；修改 .cpp 後必須重新編譯。
- main 是程式進入點；敘述通常以分號結束，大括號界定區塊。
- // 用於單行註解，/* */ 用於區塊註解；註解不會成為輸出。

## 1. 概念與前置知識

本單元整理「環境、語法與註解」。前置單元：None。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `statement;` | 結束一般敘述 |
| `// comment` | 單行註解，不產生輸出 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
cout << "Study log" << ": " << 1 << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
Study log: 1
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：省略 cout 敘述結尾的分號 → 編譯失敗；原因是敘述未結束。修正：在敘述尾端補上分號。

### 陷阱 2

錯誤：修改原始碼後直接執行舊的 exe → 仍看到舊輸出；原因是編譯產物沒有更新。修正：確認編譯成功再執行。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立學習紀錄程式，輸出課程名稱與兩行註解說明；編譯時啟用 -Wall -Wextra。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

註解中的文字會顯示在終端機嗎？

<details><summary>答案</summary>

不會；只有輸出敘述的內容才會顯示。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_syntax.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
