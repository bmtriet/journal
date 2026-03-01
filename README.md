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

## Chuyển sang deploy bằng GitHub Actions (Pages)
1. Push file workflow này lên repo:
   - `.github/workflows/pages.yml`
2. Vào **Settings → Pages**.
3. Ở mục **Source**, chọn **GitHub Actions**.
4. Push lên `main` (hoặc bấm **Run workflow**) để deploy.
5. Theo dõi trạng thái ở tab **Actions** (workflow `Deploy static site to GitHub Pages`).

## Nhánh publish
- Dùng `main` làm nhánh publish chính.
- Khi đang ở nhánh khác, merge về `main` trước khi push để GitHub Pages tự deploy.

```bash
git checkout main
git pull
# viết bài, rồi commit
git add .
git commit -m "feat(post): add new journal post"
git push origin main
```
