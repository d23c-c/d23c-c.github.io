---
title: "C# S09 · Windows Forms Essentials"
published: 2026-11-01
description: "C# study notes: Windows Forms Essentials."
category: "Languages / C#"
tags: ["C#","dotnet","winforms","events"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 9
comment: false
---

## TL;DR

- WinForms 是 Windows 桌面 UI 框架；專案目標需要 net10.0-windows 與 UseWindowsForms。
- Designer 產生介面初始化程式；不宜把所有程式邏輯都寫入自動產生的檔案。
- 事件驅動由使用者操作觸發處理方法，Application.Run 維持訊息迴圈。

## 1. 概念與前置知識

本單元整理「WinForms 專案、控制項與事件」。前置單元：S08。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `button.Click += HandleStart;` | 註冊事件處理方法 |
| `Application.Run(new StudyForm());` | 啟動視窗訊息迴圈 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · net10.0-windows。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 僅已在 Windows 編譯通過；尚未實際操作視窗，不把編譯結果視為 UI 測試通過。


```csharp
using System;
using System.Windows.Forms;
internal static class Program {
    [STAThread]
    static void Main() {
        ApplicationConfiguration.Initialize();
        Application.Run(new StudyForm());
    }
}
public class StudyForm : Form {
    private readonly Label status = new() { Text = "Ready", Top = 60, AutoSize = true };
    public StudyForm() {
        Text = "Study timer";
        var button = new Button { Text = "Start", Top = 15 };
        button.Click += HandleStart;
        Controls.Add(button);
        Controls.Add(status);
    }
    private void HandleStart(object? sender, EventArgs e) { status.Text = "Started"; }
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

錯誤：建立控制項但沒有加入 Controls → 視窗不會顯示它。修正：加入正確父容器。

### 陷阱 2

錯誤：在 UI 事件中長時間阻塞 → 視窗無法回應。修正：拆分工作，避免卡住 UI 執行緒。

## 5. 執行與判題格式

此為專案式範例，需要建立符合目標框架的 .csproj；WinForms 的 UI 執行限 Windows，Razor Pages 則需要 ASP.NET Core 伺服器。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 製作學習計時器視窗：有開始按鈕與狀態標籤；點擊前後文字必須不同，視窗可正常關閉。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

WinForms 範例能直接在 GitHub Pages 執行嗎？

<details><summary>答案</summary>

不能；它是 Windows 桌面程式。

</details>

## 8. 來源與課綱對照

- [Official tutorial](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/get-started/create-app-visual-studio)：語言或框架參考文件。
