# Kế hoạch xây blog cá nhân (GitHub Pages, thuần HTML + TailwindCSS)

## 1) Mục tiêu & nguyên tắc
- **Mục tiêu**: blog cá nhân viết nhanh bằng IDE, push lên GitHub là tự publish.
- **Stack**: Thuần **HTML + TailwindCSS** (không CMS, không DB).
- **Phong cách**: tối giản (minimalism), đọc thoải mái trên mobile trước (mobile-first).
- **Nội dung chính (3 danh mục)**:
  1. Chia sẻ công việc lập trình với AI hằng ngày.
  2. Tầm nhìn (vision).
  3. Góc nhìn cuộc sống.

## 2) Kiến trúc nội dung (đơn giản nhưng mở rộng được)

### Cấu trúc thư mục đề xuất
```text
/
├─ index.html                  # Trang chủ
├─ about.html                  # Giới thiệu ngắn
├─ categories/
│  ├─ ai-daily.html            # Danh mục: AI hằng ngày
│  ├─ vision.html              # Danh mục: Tầm nhìn
│  └─ life.html                # Danh mục: Góc nhìn cuộc sống
├─ posts/
│  ├─ 2026-01-hello-ai.html
│  ├─ 2026-01-career-vision.html
│  └─ 2026-01-life-note.html
├─ assets/
│  ├─ css/
│  │  └─ styles.css            # Tailwind build output
│  ├─ img/
│  └─ js/
│     └─ main.js               # nhỏ gọn: dark mode / menu mobile
├─ src/
│  └─ input.css                # @tailwind directives
├─ tailwind.config.js
├─ package.json
└─ README.md
```

### Quy tắc đặt bài
- Tên file: `YYYY-MM-slug.html` (ví dụ `2026-02-ai-prompt-patterns.html`).
- Metadata đặt ngay đầu bài (trong HTML):
  - `title`
  - `description`
  - `date`
  - `category`
  - `reading time` (tuỳ chọn)

## 3) Thiết kế giao diện (minimal + mobile-first)

### Hệ thống layout
- **Container hẹp**: `max-w-2xl mx-auto px-4` (đọc dễ, không rối).
- **Typography sạch**: cỡ chữ base 16–18px, line-height rộng (`leading-7/8`).
- **Khoảng trắng nhiều**: chia section rõ bằng spacing đều.
- **Màu sắc tối giản**:
  - Light: nền trắng, text slate-800.
  - Dark: nền slate-950, text slate-100.
  - 1 màu nhấn duy nhất (ví dụ indigo hoặc emerald).

### Thành phần cần có
- Header tối giản: logo/text + menu.
- Danh mục nổi bật trên trang chủ.
- Danh sách bài mới nhất (thẻ bài rất gọn).
- Trang bài viết: tiêu đề, meta, nội dung, link bài trước/sau.
- Footer ngắn: social + RSS (tuỳ chọn).

### Mobile-first checklist
- Font size đủ lớn trên màn nhỏ.
- Nút bấm/chạm có chiều cao tối thiểu 44px.
- Không dùng nhiều cột trên mobile.
- Ảnh dùng `max-w-full h-auto`.
- Test thực tế ở viewport 375px và 390px.

## 4) Quy trình viết & publish (IDE-friendly)

### Flow hằng ngày
1. Tạo file bài mới trong `/posts` theo template.
2. Cập nhật danh sách bài ở `index.html` + trang category liên quan.
3. Chạy local build CSS + preview.
4. Commit + push lên `main`.
5. GitHub Pages tự deploy.

### Script đề xuất
- `npm run dev`: watch Tailwind.
- `npm run build`: build CSS production (minify).
- `npm run serve`: preview local.

## 5) Thiết lập GitHub Pages (nhanh gọn)

### Cách 1: Deploy từ branch `main` (đơn giản nhất)
- Repo public.
- Vào **Settings → Pages**.
- Source: Deploy from branch `main` (root `/`).
- Mỗi lần push là cập nhật.

### Cách 2: Dùng GitHub Actions (chuẩn hơn cho build)
- Dùng workflow build Tailwind rồi publish artifact lên Pages.
- Hợp khi muốn giữ source CSS riêng và build tự động trên CI.

> Khuyến nghị: bắt đầu với Cách 1 để nhanh launch, sau đó nâng lên Actions khi đã ổn định.

## 6) SEO & chia sẻ cơ bản (không phức tạp)
- Mỗi page có `title`, `meta description`, canonical.
- Open Graph cơ bản để share đẹp.
- Có `sitemap.xml` và `robots.txt` đơn giản.
- URL ngắn, slug rõ nghĩa, ưu tiên tiếng Anh không dấu.

## 7) Lộ trình 4 tuần (thực tế)

### Tuần 1: Foundation
- Setup repo + Tailwind + layout base.
- Xong trang `index`, `about`, 3 category pages.
- Viết 1 bài mẫu cho mỗi category.

### Tuần 2: Hệ thống nội dung
- Chuẩn hoá template bài viết.
- Hoàn thiện điều hướng trước/sau + related posts thủ công.
- Chốt dark mode toggle.

### Tuần 3: Tối ưu trải nghiệm
- Tối ưu mobile spacing + typography.
- Tối ưu ảnh, Lighthouse cơ bản.
- Bổ sung trang 404, RSS (tuỳ chọn).

### Tuần 4: Vận hành ổn định
- Viết đều 2–3 bài/tuần.
- Đúc kết guideline viết nhanh trong README.
- Chuẩn hoá checklist publish.

## 8) Checklist “Done” cho mỗi bài
- [ ] File bài mới theo naming convention.
- [ ] Có title + description + date + category.
- [ ] Đã thêm vào trang chủ và category.
- [ ] Đọc lại chính tả + format heading.
- [ ] Build pass, xem tốt trên phone.
- [ ] Commit message rõ ràng.

## 9) Gợi ý commit convention
- `feat(post): add 2026-02-ai-prompt-patterns`
- `feat(ui): refine mobile typography`
- `chore(content): update category indexes`

## 10) Bước tiếp theo ngay bây giờ
1. Tạo skeleton như phần cấu trúc thư mục.
2. Dựng `index.html` + 3 trang category tối giản.
3. Viết 3 bài đầu tiên (mỗi danh mục 1 bài).
4. Push repo và bật GitHub Pages.

---
Nếu muốn, bước sau mình có thể giúp bạn luôn **bộ template HTML chuẩn** (home, category, post) + **config Tailwind** để copy chạy ngay.
