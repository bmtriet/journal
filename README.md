# journal (Astro)

Blog tối giản mobile-first, deploy lên GitHub Pages.

## Stack mới
- Astro
- Content Collections
- Hybrid content model:
  - **Markdown** cho body bài viết
  - **JSON** cho metadata nâng cao (series/tags/related/...)

## Cấu trúc chính
- `src/content/posts/*.md`: bài viết
- `src/content/post-meta/*.json`: metadata nâng cao
- `src/pages/posts/[slug].astro`: trang bài viết tự động
- `src/pages/categories/[category].astro`: trang danh mục tự động

## Viết bài mới (không sửa template/nav)
1. Tạo `src/content/posts/YYYY-MM-slug.md`
2. Thêm frontmatter bắt buộc:
   - `title`, `description`, `date`, `category`, `readingTime`
3. (Optional) tạo `src/content/post-meta/slug.json` rồi gắn `metaFile` trong frontmatter.
4. Commit + push.

## Chạy local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy GitHub Pages
Workflow `.github/workflows/pages.yml` sẽ:
1. Cài dependencies
2. Build Astro (`dist/`)
3. Deploy artifact lên GitHub Pages


## Troubleshooting GitHub Pages (nếu thấy log Jekyll)
Nếu Actions log của Pages hiển thị `jekyll v3.x` và build từ `/github/workspace/.`, repo của bạn vẫn đang chạy mode **Deploy from branch** thay vì **GitHub Actions**.

Cách sửa:
1. Vào **Settings → Pages**
2. Ở mục **Source**, chọn **GitHub Actions**
3. Re-run workflow `Deploy Astro site to GitHub Pages`

Workflow hiện tại cũng đã thêm bước tạo `dist/.nojekyll` để đảm bảo artifact Astro không bị Jekyll xử lý lại.

## Theme
Bạn **không dùng Jekyll theme** trong kiến trúc Astro này. Thay vào đó, theme được xử lý ở UI:
- Theme picker ở header (Indigo / Emerald / Rose)
- Lưu lựa chọn vào `localStorage`
- Tự áp màu phù hợp cho light/dark mode

=> Không cần config `jekyll-theme-*` để đổi giao diện.


Lockfile: repo dùng `package-lock.json` (npm) để CI detect package manager ổn định trên GitHub Actions.

## Build output mapping (Astro)
- File nguồn trong `src/content/posts/*.md` sẽ được render thành HTML tĩnh trong `dist/posts/<slug>/index.html`.
- Vì vậy sau build bạn sẽ **không thấy file `.md`** trong output `dist/`.
- Ví dụ: `src/content/posts/2026-03-codex-gh-pages-life.md` -> `dist/posts/2026-03-codex-gh-pages-life/index.html`.


## GitHub Pages deployment source of truth
- Chỉ dùng workflow Astro: `.github/workflows/pages.yml` (artifact `./dist`).
- Không để workflow deploy Pages thứ hai (ví dụ `static.yml`) chạy song song vì có thể ghi đè output mới.
- Nếu repo đang có `static.yml`, hãy disable/xóa file đó trước khi deploy.
