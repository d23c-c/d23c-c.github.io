---
title: "AIS3 EOF CTF 2023 · First Team Qualifier"
published: 2026-11-05
description: "A first online team CTF and the beginning of a stronger interest in forensics."
category: "Experiences"
tags: ["competition", "CTF", "forensics", "web-security"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-01-06"
  end: "2023-01-08"
  kind: "Competition"
  organizer: "AIS3"
---
剛開始學資安時，我和三位朋友想直接從實作中學習，於是一起報名 AIS3 EOF CTF 2023 初賽。四個初學者分散在不同地方連線參賽，很快就發現這是一趟越級挑戰。這裡記錄的是 1 月 6 日至 8 日的線上初賽；它與後續實體決賽是不同階段。[官方初賽規則](https://ais3.org/eof/2023/rule.html)

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-01-06 至 2023-01-08 | 線上團隊初賽 | 參賽者 |

## 沒解出來的題目，也能留下方向

當時最深的印象，是一題帶有《孤獨搖滾》畫面的 Forensics 題目。技術不足讓我沒能解出，但這個記憶延續到賽後，也促使我報名鑑識相關研習。正式題名與題包目前沒有完整保存，因此這裡只保留當年的個人記憶。

這場比賽讓我看見，知道工具名稱與能在陌生資料中找到線索，之間還有很大距離。即使被難度打得措手不及，和朋友一起嘗試仍讓我願意繼續走下去。

## 同屆題目補讀：Share

原有紀錄還留下 Share 題目的截圖。這次整理時，對照 [Ice1187 的當屆第一手 write-up](https://hackmd.io/@Ice1187/ais3-eof-2023-writeup)，可以確認它涉及 ZIP 上傳、解壓縮及 symbolic link 的檔案讀取界線。這是現在引用他人解析所做的補讀，並非我當時的成功解法。

一個「上傳整個網站」的功能，背後包含路徑、連結、權限與服務邊界。把這些層次拆開，才能理解問題為何出現；這也比只收藏一段解題指令更值得留下。
