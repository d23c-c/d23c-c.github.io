---
title: "C++ C20 · Inheritance"
published: 2026-11-01
description: "C++ study notes: Inheritance."
category: "Languages / C++"
tags: ["C++","oop","inheritance"]
lang: "zh-TW"
series: "C++ Learning Notes"
seriesOrder: 20
comment: false
---

## TL;DR

- 繼承表達 is-a 關係；衍生類別可以擴充基底類別提供的能力。
- public/protected/private 繼承影響對外可見的存取權限，不會讓基底 private 成員變成可直接存取。
- 多層與多重繼承可能產生命名歧義；需要明確指出使用哪個基底介面。

## 1. 概念與前置知識

本單元整理「繼承與存取層級」。前置單元：C19。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `class Practice : public Session` | 以公開繼承表達 is-a |
| `Practice(int n) : Session(n) {}` | 初始化基底子物件 |

## 3. 最小範例與驗證

環境：g++ (Rev8, Built by MSYS2 project) 15.2.0 · C++17。

撰寫環境：Code::Blocks、Dev-C++ 與 VS Code。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```cpp
#include <iostream>
#include <string>
#include <cmath>
using namespace std;
class Session { protected: int value; public: Session(int n):value(n) {} };
class TimedSession : public Session { public: TimedSession(int n):Session(n) {} int minutes() const { return value; } };
int main() {
TimedSession log(35);
cout << log.minutes() << "\n";
}
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
35
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：衍生類別直接操作基底的 private 成員 → 編譯失敗。修正：使用基底公開或受保護的介面。

### 陷阱 2

錯誤：只為重用幾行程式就建立繼承 → 介面關係不合理。修正：先判斷是否真的是 is-a，否則考慮組合。

## 5. 執行與判題格式

本機使用 `g++ -std=c++17 -Wall -Wextra -O2 main.cpp -o main` 編譯。ZeroJudge 需要完整程式與 stdin/stdout，批次輸入應依題目規格讀到 EOF。C15 起才加入 LeetCode 函式／類別題；LeetCode 只填指定介面，不額外印提示文字，且本範圍不使用 vector。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立基底課程與兩種衍生課程，各自加入不同的資訊但共用基本查詢介面。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[ZeroJudge basic problems](https://zerojudge.tw/Problems?tabid=BASIC)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

public 繼承會讓基底的 private 成員變成 public 嗎？

<details><summary>答案</summary>

不會；基底 private 成員仍不可直接存取。

</details>

## 8. 來源與課綱對照

- [Language reference](https://en.cppreference.com/w/cpp/language.html)：語言或框架參考文件。
- [W3Schools curriculum chapter](https://www.w3schools.com/cpp/cpp_inheritance.asp)：對應課綱中的單元位置；本文文字與範例為重新撰寫。
