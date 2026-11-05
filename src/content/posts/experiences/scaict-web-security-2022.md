---
title: "SCAICT 2022 · Web Security Foundations"
published: 2026-11-05
description: "HTTP, cookies, sessions and an early introduction to web security practice."
category: "Experiences"
tags: ["workshop", "web-security", "HTTP"]
lang: "zh-TW"
comment: false
experience:
  start: "2022-12-03"
  kind: "Workshop"
  organizer: "SCAICT"
---
2022 年 12 月 3 日，我參加 SCAICT 的網頁安全入門研習。原有資料有時將名稱寫成「網路安全入門 101」，這篇以實際學習主題「網頁安全入門」整理，保留為同一場活動。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2022-12-03 | 四小時研習 | 學員 |

## 先把網站的一次請求說清楚

課程從 HTTP 狀態碼、Cookie、Session、IP 與網域名稱等概念切入，再帶到虛擬機環境中的基礎實作。403 和 404 對當時的我不再只是畫面上的錯誤，而是可以繼續追問：請求送到了哪裡？伺服器如何判斷資源與權限？

課程也接觸 Gitleaks 與漏洞通報的管道。回頭看，工具能指出線索，仍需要理解它在檢查什麼。程式庫中的可疑字串不一定是仍有效的憑證；發現問題後，也應先確認影響與適當的通報方式。

## 讓入門課成為複習的骨架

我原先的心得提到，這場研習涵蓋多個面向，但始終圍繞 Web 主題，也提供課後複習資源。它的作用，是替後續 SQL 注入、輸入漏洞與 Session 課程先放好基礎名詞。之後每次遇到新的漏洞，都能再回到請求、狀態與權限這幾個問題檢查理解。
