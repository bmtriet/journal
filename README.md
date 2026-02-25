# journal

Blog tĩnh theo phong cách tối giản, mobile-first.

## Stack
- Thuần HTML
- TailwindCSS (CDN)
- GitHub Pages

## Cấu trúc nhanh
- `index.html`: trang chủ
- `about.html`: giới thiệu
- `categories/*.html`: trang danh mục
- `posts/*.html`: bài viết
- `assets/css/styles.css`: CSS bổ sung tối giản
- `assets/js/main.js`: dark mode + mobile menu

## Viết bài mới
1. Tạo file trong `posts/` theo format `YYYY-MM-slug.html`
2. Thêm metadata (`title`, `description`, `date`, `category`, `reading-time`)
3. Cập nhật link ở `index.html` + trang `categories/*`
4. Commit và push lên GitHub

## Chạy local
```bash
python3 -m http.server 4173
```
Mở: `http://localhost:4173`
