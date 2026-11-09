# 部署安全檢查紀錄

檢查日期：2026-11-01。範圍為首次 GitHub Pages 發布的原始碼、相依套件與建置產物。

## 已處理

- 使用正確的 `.github/workflows/` 與 main 分支，僅發布 `_pages` 中的靜態產物。
- 建置使用鎖定檔；Actions 固定至檢視過的 commit SHA，checkout 不保留 Git 憑證。
- 建置 job 僅有 contents:read；Pages 與 OIDC 寫入權限限於部署 job。
- Pull request 執行檢查，不能執行部署；沒有使用 pull_request_target 或插入 PR 文字的 shell 指令。
- 更新 Astro 與有修補版本的相依套件，並將間接相依修補設定記錄在 pnpm-workspace.yaml。
- 修補後 pnpm audit：critical 0、high 0、moderate 0、low 1；CI 阻擋 moderate 以上通報。
- 擴充 .gitignore 排除各種 .env 與私鑰；部署產物檢查排除 Git、環境設定、私鑰、source maps 與履歷文件格式。
- 原始碼常見 Token／私鑰模式掃描未找到符合項目，沒有加入專案外的履歷、報告與文件。
- 關閉動態頁時，對應 JSON API 回傳空陣列，避免模板內容仍由 API 發布。
- 關閉分析與評論服務；YouTube 僅在點擊播放後載入，縮減 iframe 權限並設定 referrer policy。
- 外部資源連結使用 noopener/noreferrer；保留 YouTube 官方來源，沒有下載或重製音訊。
- 二次產物檢查修正了停用頁面的 404 導向、分享圖片與結構化資料的重複子路徑，並加入產物回歸檢查。
- 搜尋索引初次載入後保留使用者待處理的查詢，避免桌面／行動輸入框初始化互相取消查詢。
- 首次正式 HTTPS 部署後，瀏覽器確認歌曲實際播放（時間超過 23 秒、paused=false、error=null）；Banner 回首頁切換與 About 重設正常。

## 已知剩餘項目

deepmerge 4.3.1 有低風險 prototype poisoning 通報：
https://github.com/advisories/GHSA-gcqx-w48m-w2h4

掃描時沒有已發布的修補版本。來源為 Svelte／Swup 的建置工具相依；本站只把靜態檔案部署到 Pages，
沒有執行這些 Node.js 工具的公開伺服器。仍需持續追蹤上游，不能將本次結果解讀為零漏洞。
不要讓不受信任的程式或設定在有 secrets 的 workflow 中執行。

## 公開內容

儲存庫公開，draft 原始碼仍可被讀取。公開 Email 為作者指定的聯絡方式。
子路徑中的編碼字串不是存取控制。私人研究或文件需要獨立的權限控管，不能依賴網址隱藏。

## 後續檢查

### 2026-11-09：CVE 專題公開版本

- 原始報告、PDF、截圖與腳本保留於本機，發布資料另行產生。
- 公開內容使用去識別化的摘要與結果轉錄，不含原始 IP、主機名稱、個人帳號、憑證或原始截圖。
- 三份新 PDF 已檢查可擷取文字、中繼資料、外部連結與附件；逐頁渲染檢查排版。
- PDF 發布改為精確路徑與 SHA-256 白名單，其他 PDF 或內容被替換的檔案仍會使部署失敗。
- 依現有證據區分 Apache／PrintNightmare 的實測觀察與 Dirty COW 的待實測狀態，未宣稱完成修補後複測。
- 套件檢查仍為 critical 0、high 0、moderate 0、low 1；低風險既知項目見上方說明。

更新套件後執行 pnpm audit、pnpm check、pnpm type-check、Banner 測試、pnpm build 與 prepare-pages。
部署後再次檢查首頁、內頁、資源網址、404、搜尋與互動。YouTube 嵌入是否可播放取決於第三方限制。
