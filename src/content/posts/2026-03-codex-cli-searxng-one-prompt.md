---
title: "Dùng Codex CLI deploy SearXNG cho AI Agent chỉ bằng 1 prompt"
description: "Một workflow DevOps mới: từ viết config sang viết prompt, dùng Codex CLI để tự động deploy SearXNG cho AI Agent."
date: 2026-03-03
category: "AI Daily"
readingTime: "5 phút"
---

🚀 **Dùng Codex CLI deploy SearXNG cho AI Agent chỉ bằng 1 prompt**

Bình thường muốn thêm **search capability** cho AI Agent là bắt đầu chuỗi nghi lễ:

cài Docker, viết `docker-compose`, chỉnh `settings.yml`, mở port, sửa lỗi container…

Nghe thôi đã thấy mất một buổi tối 🫠

Tôi thử cách khác:
**không tự deploy nữa, giao luôn cho Codex CLI làm.**

Chỉ cần vào Codex CLI, paste một prompt DevOps đã chuẩn bị sẵn.
Nó sẽ tự:

- hỏi IP bind + port
- tạo file cấu hình
- chạy Docker Compose
- test JSON API
- lỗi thì tự đọc logs rồi sửa tiếp

Xong là có ngay endpoint kiểu:

`http://IP:PORT/search?q=hello&format=json`

=> AI Agent gọi phát là có search web luôn.

Thứ hay ở đây không chỉ là **SearXNG**.
Mà là workflow mới:

**Ngày xưa:**
dev → đọc docs → tự config → deploy

**Bây giờ:**
dev → viết prompt → AI deploy

Tôi đang gom mấy prompt kiểu này vào repo riêng để dùng dần cho Codex CLI:

📦 Repo:
[https://github.com/bmtriet/codex-prompt-collection](https://github.com/bmtriet/codex-prompt-collection)

📄 Prompt deploy SearXNG bằng Docker:
[https://github.com/bmtriet/codex-prompt-collection/blob/main/prompts/searxng-docker-setup.md](https://github.com/bmtriet/codex-prompt-collection/blob/main/prompts/searxng-docker-setup.md)

Cảm giác khá rõ:
**DevOps đang bắt đầu dịch chuyển từ “viết config” sang “viết prompt đủ tốt”.**

Ai đang build AI lab, agent, local stack… chắc sẽ thấy trò này khá khoái.
