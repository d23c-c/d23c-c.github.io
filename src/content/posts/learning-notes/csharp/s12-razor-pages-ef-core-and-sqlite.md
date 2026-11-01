---
title: "C# S12 · Razor Pages EF Core and SQLite"
published: 2026-11-01
description: "C# study notes: Razor Pages EF Core and SQLite."
category: "Languages / C#"
tags: ["C#","dotnet","razor-pages","databases","sqlite"]
lang: "zh-TW"
series: "C# Learning Notes"
seriesOrder: 12
comment: false
---

## TL;DR

- DbContext 追蹤資料變更，DbSet 表達實體集合；實際持久化需要 SaveChanges。
- SQLite provider、EF Core 工具與目標框架版本要相容；migration 需要經過檢查再套用。
- 先將單表 CRUD 與輸入驗證做好，再延伸成 SQL 單元的三表與多對多關聯。

## 1. 概念與前置知識

本單元整理「Razor Pages、EF Core 與 SQLite」。前置單元：S11。先掌握範例中的資料如何流動，再處理邊界與錯誤情況。

## 2. 語法速查

| 寫法 | 用途 |
|---|---|
| `AddDbContext<StudyContext>(...)` | 註冊資料庫內容服務 |
| `options.UseSqlite(connectionString)` | 選擇 SQLite provider |

## 3. 最小範例與驗證

環境：EF Core + SQLite · provider not installed。

撰寫環境：Visual Studio。上方版本資訊是本次範例驗證使用的環境，不代表當年學習時的版本。

⚠️ 未驗證：本機未安裝此範例所需的 EF Core SQLite 套件；尚未編譯或執行。


```csharp
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();
builder.Services.AddDbContext<StudyContext>(options =>
    options.UseSqlite("Data Source=study.db"));
var app = builder.Build();
app.MapRazorPages();
app.Run();
public class StudyContext(DbContextOptions<StudyContext> options) : DbContext(options) {
    public DbSet<StudySession> Sessions => Set<StudySession>();
}
public class StudySession {
    public int Id { get; set; }
    public string Topic { get; set; } = "";
    public int Minutes { get; set; }
}
```

專案需要對應 .NET 10 的 `Microsoft.EntityFrameworkCore.Sqlite` 套件。此範例只示範服務與模型設定，還需要 Razor 頁面、資料庫 migration、表單驗證與儲存流程，才構成完整 CRUD 專案。不要把資料庫檔或真實連線設定提交到公開儲存庫。

輸入：無；範例使用內建或共同測試資料。

## 4. 常見陷阱

以下為語法與行為對照；⚠️ 錯誤片段未逐一獨立執行，涉及未定義行為的案例也不以某次輸出當成保證。

### 陷阱 1

錯誤：修改追蹤中的物件卻沒有 SaveChanges → 資料庫沒有持久化。修正：在完成驗證後明確儲存。

### 陷阱 2

錯誤：把本機 SQLite 檔提交到公開儲存庫。修正：以合成測試資料示範，將實際資料庫與機密設定排除。

## 5. 執行與判題格式

此為專案式範例，需要建立符合目標框架的 .csproj；WinForms 的 UI 執行限 Windows，Razor Pages 則需要 ASP.NET Core 伺服器。

## 6. 練習

以下三題是針對本單元撰寫的自訂實作，沒有附完整解答，也不宣稱已通過任何線上判題。

1. 建立可新增、列表、編輯與刪除的學習紀錄網站；重啟後資料仍保留，錯誤輸入不能入庫。
2. 調整本篇範例的資料，至少涵蓋一般值、邊界值與無效值三種情境；執行前先預測結果，再記錄真實差異。
3. 從兩個常見陷阱各設計一個最小反例，說明原因並修正；涉及未定義行為時，以規格與編譯診斷說明，不故意執行危險操作。

延伸題庫：[LeetCode problem list](https://leetcode.com/problemset/)。題號、難度與已解狀態需在選題時另行確認；SQL 僅選前四個主題區，C++ 題目介面避免 STL 容器。

## 7. 自我檢測

DbSet.Add 後資料是否立即寫入磁碟？

<details><summary>答案</summary>

不是，通常要在 SaveChanges 或對應非同步方法成功後才持久化。

</details>

## 8. 來源與課綱對照

- [Official tutorial](https://learn.microsoft.com/en-us/aspnet/core/data/ef-rp/intro?view=aspnetcore-10.0)：語言或框架參考文件。
