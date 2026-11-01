---
title: "C++ C09 · Loops"
published: 2026-11-01
description: "C++ study notes: Loops."
category: "Languages / C++"
tags: ["C++","loops","control-flow"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 9
comment: false
---

## TL;DR

- while 先判斷，do-while 至少執行一次；for 適合已知更新規則的迴圈。
- break 結束最近一層迴圈，continue 跳到下一輪的更新或條件檢查。
- 讀到 EOF 應使用 while (cin &gt;&gt; value)，不要先用 eof() 預測下一次讀取。

## 1. 概念與前置知識

本單元整理「迴圈、break 與 continue」。前置單元：C08。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `for (int i=0; i<n; ++i)` | 走訪半開區間 |
| `do { ... } while (condition);` | 至少執行一次，結尾有分號 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int total = 0;
for (int i = 1; i <= 4; ++i) total += i;
cout << total << "\n";
int count = 0;
do { ++count; } while (count < 1);
cout << count << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
10
1
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：迴圈變數沒有更新 → 可能無限迴圈。修正：逐條路徑檢查更新與停止條件。

### 陷阱 2

錯誤：用 i &lt;= size 走訪索引 → 多執行一次。修正：上界使用 i &lt; size。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 累計一段整數區間，測試空區間與只含一個數字的區間；不用自訂函式。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

while 的本體一定會執行一次嗎？

<details><summary>答案</summary>

不一定；條件一開始為 false 時執行 0 次。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_while_loop.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
