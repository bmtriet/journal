---
title: "Hôm nay tui khoe với team cái blog chạy bằng Codex"
description: "Use case dùng Codex để vận hành blog Journal: prompt -> nội dung -> PR -> GitHub Actions build/deploy."
date: 2026-03-03
category: "AI Daily"
readingTime: "4 phút"
---

Hôm nay tui khoe với team cái blog chạy bằng Codex.

Usecase dùng Codex của anh:

Tạo 1 GH repo là nhật ký (Journal), mục tiêu làm blog công nghệ, nhưng ko như post bài truyền thống. Anh vào prompt để Codex tự lên bài, lên content, rồi đẩy PR lên GitHub; trên GH có Action tự build.

Ban đầu dùng HTML thuần, sau phát hiện tạo nhiều file HTML quá nên chuyển qua dùng **Astro**, để build Markdown thành post.

Điểm mình thấy sướng nhất là workflow:

- Viết ý tưởng trong prompt.
- Codex generate nội dung + chỉnh file cần thiết.
- Commit, tạo PR tự động.
- GitHub Actions build/deploy.

Tức là từ "ý tưởng" -> "bài public" nhanh hơn nhiều, và team có thể review rõ ràng qua PR history.
