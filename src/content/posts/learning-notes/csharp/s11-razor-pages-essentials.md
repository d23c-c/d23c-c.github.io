---
title: "C# S11 · Razor Pages Essentials"
published: 2026-11-01
description: "C# study notes: Razor Pages Essentials."
category: "Languages / C#"
tags: ["C#","dotnet","razor-pages","web"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 11
comment: false
---

## TL;DR

- Razor Pages 以頁面為中心：.cshtml 放 UI，PageModel 放處理邏輯。
- @page 讓 Razor 檔成為可處理請求的頁面；OnGet 與 OnPost 對應不同 HTTP 方法。
- 需要伺服器才能執行 ASP.NET Core；GitHub Pages 只能展示靜態說明與截圖。

## 1. 概念與前置知識

本單元整理「Razor Pages 與請求流程」。前置單元：S10。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `builder.Services.AddRazorPages();` | 註冊 Razor Pages 服務 |
| `app.MapRazorPages();` | 建立頁面路由端點 |

## 3. 最小範例與驗證

環境：.NET SDK 10.0.202 · ASP.NET Core。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。


```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
var app = builder.Build();
app.MapRazorPages();
app.Run();
```

另建立 `Pages/Index.cshtml`：

```html
@page
<h1>Study Notes</h1>
```

輸入：無；範例使用內建或共同測試資料。

實際輸出：

```text
HTTP 200
<h1>Study Notes</h1>
```

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：只建立 .cshtml，忘記 @page 或 MapRazorPages → 路由不如預期。修正：確認服務註冊、路由與頁面宣告。

### 陷阱 2

錯誤：以 GET 執行具有副作用的資料修改。修正：將修改放到適當的 POST 流程並保留防偽驗證。

## 5. 執行與判題格式

此為專案式範例，需要建立符合目標框架的 .csproj；WinForms 的 UI 執行限 Windows，Razor Pages 則需要 ASP.NET Core 伺服器。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立首頁顯示學習日誌與新增表單；分開處理 GET 與 POST，驗證空標題不會成功新增。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

Razor Pages 是只在瀏覽器執行的前端框架嗎？

<details><summary>答案</summary>

不是；它需要 ASP.NET Core 伺服器。

</details>

## 8. 來源與課綱對照

- [Official tutorial](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-10.0)：語言或框架參考文件。
