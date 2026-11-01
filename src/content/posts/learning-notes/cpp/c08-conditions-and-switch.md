---
title: "C++ C08 · Conditions and Switch"
published: 2026-11-01
description: "C++ study notes: Conditions and Switch."
category: "Languages / C++"
tags: ["C++","conditions","control-flow"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 8
comment: false
---

## TL;DR

- if/else if 由上到下檢查，第一個成立的分支執行後，不會再測後面的分支。
- switch 依整數或列舉等允許的型別選擇分支；case 標記不是一般運算條件。
- break 用來結束 switch；未跳出時可能繼續執行後面的 case。

## 1. 概念與前置知識

本單元整理「條件判斷」。前置單元：C07。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `if (condition) { ... } else { ... }` | 條件分支 |
| `case 2: ...; break;` | 選擇分支並結束 switch |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() {
int level = 2;
if (level >= 3) cout << "advanced\n";
else if (level == 2) cout << "practice\n";
else cout << "review\n";
switch (level) { case 2: cout << "two\n"; break; default: cout << "other\n"; }
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
practice
two
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：if (condition); 後再接區塊 → 分號成了空敘述。修正：移除條件後的多餘分號。

### 陷阱 2

錯誤：case 後漏寫 break → 非預期貫穿。修正：明確跳出，或為刻意貫穿加上說明。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 將課程進度分成三個等級，測試每個邊界，再用 switch 處理選單選項。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

else 會對應哪個 if？

<details><summary>答案</summary>

沒有大括號時對應最近尚未配對的 if；加大括號較清楚。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_conditions.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
