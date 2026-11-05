---
title: "SecurityFocus Online 2023 · Forensics Foundations"
published: 2026-11-05
description: "Linux, packet inspection, steganography and the first steps toward evidence-based analysis."
category: "Experiences"
tags: ["workshop", "forensics", "Linux", "steganography"]
lang: "zh-TW"
comment: false
experience:
  start: "2023-02-04"
  end: "2023-02-05"
  kind: "Workshop"
  organizer: "Ministry of Education cybersecurity talent program"
---
EOF 初賽之後，我在 2023 年 2 月 4 日至 5 日參加 SecurityFocus Online。這場研習把我在競賽中產生的鑑識興趣，接到較有結構的基礎學習上；後續也收到達到核發標準的學習證書通知。

| 活動時間 | 形式 | 角色 |
|---|---|---|
| 2023-02-04 至 2023-02-05 | 線上課程與題目練習 | 學員 |

## 從檔案、封包與位元組找線索

原有心得記下的內容包括 Linux 基礎操作與目錄結構、隱寫術、Wireshark 封包檢視，以及 grep、hex 編輯器和 dd 等工具。它們看起來分屬不同領域，但都在訓練同一件事：不要只看檔案名稱或畫面，而要觀察資料本身。

在封包中，協定欄位、連線方向與內容需要放在一起理解；在二進位資料中，搜尋到某個字串只是線索，還需要知道它位於什麼位置、前後資料代表什麼。這次補記時，我更希望留下這套觀察順序，而不只是工具清單。

## 從想解題到願意理解證據

我原先寫下，這些新知替資安學習打開了一個新的方向。回頭看，鑑識吸引我的地方，在於需要對每一步判斷負責：能從資料看到什麼、還看不到什麼，以及結論是靠哪一段證據支持。這也是後來持續關注鑑識與反鑑識議題的早期起點。
