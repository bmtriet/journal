---
title: "Hướng đi tốt hơn HTML thuần: Astro + Content Collections"
description: "Đề xuất chuyển từ HTML thuần sang Astro + Content Collections để chỉ cần viết nội dung rồi push."
date: 2026-03-01
category: "Vision"
readingTime: "5 phút"
metaFile: "astro-content-workflow.json"
---

Nếu mục tiêu là chỉ viết bài rồi push, HTML thuần sẽ sớm chạm trần vì mỗi bài phải sửa tay template/menu.

Giải pháp hợp lý là chuyển sang **Astro + Content Collections**:

- Post là dữ liệu (`.md` hoặc `.json`).
- Template/Nav/Category list sinh tự động.
- Push là deploy.

## JSON cho post có phù hợp không?

Có, nhưng không nên dùng JSON cho toàn bộ body bài viết vì khó biên tập hơn Markdown.

Mình khuyên mô hình **hybrid**:

1. Markdown + frontmatter cho phần body.
2. JSON cho metadata nâng cao (series, featured, related, canonical, custom fields).

Cách này vừa dễ viết, vừa dễ mở rộng.
