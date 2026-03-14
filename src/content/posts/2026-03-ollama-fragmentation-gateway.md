---
title: "Ollama phân mảnh, cần tập trung"
description: "Từ bài toán vận hành LLM nội bộ nhiều nhà máy đến quyết định dựng một LLM Gateway tập trung."
date: 2026-03-02
category: "AI Daily"
readingTime: "6 phút"
---

Mình làm AI nội bộ cho nhà máy. Ban đầu 1,2 GPU thì ổn áp, tới lúc lên hơn 10 GPU ở 3 nhà máy khác nhau thì app đang dùng LLM endpoint bị rối nùi.

Chuyện gì đến cũng phải đến: mình phải nghiên cứu **LLM Gateway** để gom mọi thứ về một chỗ, triển khai và quản trị cho ra hệ thống.

Dưới đây là detail spec mình chốt cho hướng đi này.

## Mục tiêu

- Provide **ONE OpenAI-compatible endpoint** for all internal apps and Dify.
- Support **Local Ollama cluster first**, then add external providers (Gemini/OpenAI) as plugins (scaffolded in MVP, can be disabled by config).
- Before routing any request to external providers, run **Sentinel Layer** to decide: `allow` / `force_local` / `block`, and log warnings/events.
- Provide an **Admin UI** to manage API keys, policies, model aliases, nodes, providers, and view logs/alerts.

## Tech stack

### Backend

- Python 3.11+
- FastAPI (async)
- SQLAlchemy + Alembic
- PostgreSQL (primary DB)
- Redis (optional cache; if not available, use in-memory fallback)
- Prometheus metrics endpoint `/metrics`
- Logging: JSON logs to stdout + DB event table

### Frontend

- React + Vite + TypeScript
- UI library: Ant Design (or Material UI). Keep it clean, neo-minimal.
- Auth for admin UI: session cookie or JWT; simple username/password stored in DB (bcrypt).

### Deployment

- Docker Compose for postgres, backend, frontend, optional redis, optional prometheus+grafana.

## Góc nhìn cá nhân

Bài toán thật sự không còn là “chạy được model”, mà là **vận hành ổn định ở quy mô nhiều điểm**.

Nếu không có gateway, mỗi app nối thẳng mỗi endpoint, chính sách bảo mật rời rạc, logs phân tán, và cuối cùng đội vận hành phải chữa cháy liên tục.

Gateway không làm AI thông minh hơn, nhưng làm hệ thống **đỡ hỗn loạn** và đủ chuẩn để scale.
