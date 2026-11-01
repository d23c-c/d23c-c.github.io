# quisasterisk — personal blog

Firefly / Astro 技術筆記與作品集。

網站：https://d23c-c.github.io/QTpsTlZmcVVHSUxEOkpRRw/

## 本機開發

使用 Node.js 24 LTS 與 package.json 指定的 pnpm 版本。

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## 檢查與部署

```sh
pnpm check
pnpm type-check
node scripts/test-personal-banner.mjs
pnpm build
pnpm exec tsx scripts/prepare-pages.ts
```

推送 main 後，`.github/workflows/deploy.yml` 執行檢查、建置並發布 GitHub Pages。
儲存庫 Settings → Pages → Source 必須選擇 GitHub Actions。
網站原始碼位於此儲存庫根目錄；dist、_pages、node_modules 由工具產生，不提交。
網址路徑由 src/config/sitePath.ts 統一設定，prepare-pages 會產生對應目錄與根網址導向。

## 隱私與限制

這是公開儲存庫：draft 文章仍能從原始碼看到，不能用於保存機密。
不要提交履歷、環境設定、私鑰或存取權杖。公開 Email 為作者指定的聯絡方式。
音樂由使用者點擊後才載入 YouTube，是否允許嵌入播放由 YouTube 與版權方決定；提供外部播放連結。
GitHub Pages 僅發布靜態內容，CTF／SQL 的伺服器端功能需要另行部署。

Firefly 原始碼授權見 LICENSE；個人文章與第三方素材的權利歸各自權利人所有。
