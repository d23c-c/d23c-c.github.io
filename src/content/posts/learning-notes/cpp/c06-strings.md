---
title: "C++ C06 · Strings"
published: 2026-11-01
description: "C++ study notes: Strings."
category: "Languages / C++"
tags: ["C++","strings","input-output"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 6
comment: false
---

## TL;DR

- std::string 管理可變長度文字；+ 串接字串，length 或 size 回傳長度。
- cin &gt;&gt; word 遇空白停止，getline 才會讀取整行文字。
- 索引從 0 開始；對 UTF-8 字串，size 通常是位元組數，不是中文字數。

## 1. 概念與前置知識

本單元整理「字串與文字輸入」。前置單元：C05。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `getline(cin, line)` | 讀取包含空白的一行 |
| `text.size()` | 取得字串位元組數 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
string line;
getline(cin, line);
cout << line.length() << "\n";
cout << line + "!" << "\n";
}
```

輸入：
```text
study log
```

實際輸出：

```text
9
study log!
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：用 cin &gt;&gt; name 讀含空白姓名 → 後半部被留在串流。修正：使用 getline。

### 陷阱 2

錯誤：讀完整數立刻 getline → 可能先讀到殘留換行。修正：處理分隔字元，再讀取下一行。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 讀取含空白的課程名稱，輸出原文、長度與串接後的標題；另測試空字串。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

string 的最後一個有效索引是 size() 嗎？

<details><summary>答案</summary>

不是；非空字串最後一個字元索引是 size()-1。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_strings.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
