---
title: "C# S10 · Windows Forms Input Validation"
published: 2026-11-01
description: "C# study notes: Windows Forms Input Validation."
category: "Languages / C#"
tags: ["C#","dotnet","winforms","validation"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 10
comment: false
---

## TL;DR

- 使用 TryParse 讓可預期的格式錯誤成為分支，而不是靠例外控制正常流程。
- 解析成功不代表資料符合業務範圍，例如練習時間仍必須大於零。
- 控制項狀態與資料模型應保持一致；只有驗證通過才加入記錄。

## 1. 概念與前置知識

本單元整理「WinForms 輸入驗證」。前置單元：S09。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `int.TryParse(input.Text, out int minutes)` | 不靠例外處理可預期的格式錯誤 |
| `MessageBox.Show(message);` | 顯示輸入錯誤提示 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0-windows。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 僅已在 Windows 編譯通過；尚未實際操作視窗，不把編譯結果視為 UI 測試通過。


```csharp
using System;
using System.Windows.Forms;
internal static class Program {
    [STAThread] static void Main() { ApplicationConfiguration.Initialize(); Application.Run(new StudyForm()); }
}
public class StudyForm : Form {
    private readonly TextBox input = new() { Top = 10 };
    private readonly ListBox log = new() { Top = 80, Height = 120 };
    public StudyForm() {
        var add = new Button { Text = "Add", Top = 40 };
        add.Click += AddEntry;
        Controls.AddRange(new Control[] { input, add, log });
    }
    private void AddEntry(object? sender, EventArgs e) {
        if (!int.TryParse(input.Text, out int minutes) || minutes <= 0) {
            MessageBox.Show("Enter a positive whole number.");
            return;
        }
        log.Items.Add($"{minutes} min");
        input.Clear();
    }
}
```

專案需使用 `net10.0-windows`、啟用 `UseWindowsForms` 並使用 Windows Desktop SDK。`Program.cs` 為上面的完整程式，可在 Visual Studio 的終端機以 `dotnet build` 編譯，再於 Windows 用 `dotnet run` 操作視窗。Visual Studio 可使用視覺化 WinForms Designer；本文的最小範例另以程式建立控制項，便於閱讀與重現。

輸入：無；範例使用內建或共同測試資料。

實際建置結果：

```text
Build succeeded. Interactive UI not executed.
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：int.Parse 接收文字 'abc' → 例外。修正：先用 TryParse。

### 陷阱 2

錯誤：只驗證是數字，接受 -5 分鐘。修正：再檢查合理範圍並給明確提示。

## 5. 執行與判題格式

此為專案式範例，需要建立符合目標框架的 .csproj；WinForms 的 UI 執行限 Windows，Razor Pages 則需要 ASP.NET Core 伺服器。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 製作時間記錄器：TextBox 輸入、Button 新增、ListBox 顯示；空白、abc、0、負數都不能讓程式崩潰。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

TryParse 回傳 true 就代表分鐘數一定合理嗎？

<details><summary>答案</summary>

不代表；還要驗證範圍。

</details>

## 8. 來源與課綱對照

- [Official tutorial](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/get-started/create-app-visual-studio)：語言或框架參考文件。
