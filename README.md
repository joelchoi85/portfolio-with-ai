# 최중열 — MLOps / LLMOps Engineer

모델을 직접 올리고, 숫자로 고르고, 사람 손 없이 돌아가게 만듭니다.

코드잇 AI 엔지니어링 12기에서 세 팀 프로젝트를 했습니다. 첫 프로젝트는 CV 모델 학습이었고, 갈수록 서빙과 운영 쪽 일이 늘었습니다. 지금은 그쪽을 업으로 하려고 합니다.

| | 한 일 | 대표 숫자 |
|---|---|---|
| **서빙** | L4 GPU 한 장에 임베딩·리랭커·SPLADE·생성 LLM 배치, VRAM 예산에 맞춘 모델 교체 운영 | 서버 기동 185초 → 1.9초 |
| **평가·실험** | 누수 감사, 평가 세트 설계, 스윕·HPO·K-Fold, 문항 단위 부호 비교 | MRR 0.478 → 0.576 |
| **자동화·배포** | 크롤링 → 전처리 → 증분 색인 → 무중단 반영, GitHub Actions → GCP VM 배포 | 3시간 주기 무인 갱신 |

---

## 프로젝트

### [RFP RAG System](projects/rfp-rag-system.md) — 공공입찰 제안요청서 Q&A
2026.08 – 09 · 4인 · Retrieval Engineer → 검색·서빙·평가 전반 (팀 커밋 78%)

나라장터 RFP를 매일 수집해 검색 가능한 상태로 유지하고, 근거 인용과 함께 답하는 RAG 서비스. 자체 GPU 서빙, 증분 색인, 무중단 리로드, 160문항 평가 체계.

`FastAPI` `SGLang` `TEI` `LanceDB` `BM25/Kiwi` `Docker` `systemd` `cron` `Next.js(Vercel)`

### [헬스잇 경구약제 검출](projects/pill-detection.md) — 알약 사진 객체 검출
2026.06 – 07 · 5인 · Experimentation Lead → 서빙/배포

검증 0.99 점수를 의심하는 데서 시작한 프로젝트. 누수 감사로 부풀려진 점수를 걸러내고, 실사진 평가셋으로 배포 환경의 진짜 성능(recall 0.077)을 드러냈다. 검출 API와 약 정보 웹앱까지 배포.

`YOLO11` `Optuna` `perceptual hash` `SAM` `Hugging Face Spaces` `Next.js(Vercel)` `공공데이터 API`

### [Just Make It](projects/just-make-it.md) — AI 광고 이미지 생성 서비스 *(진행 중)*
2026.10 – · 3인 · PM + 서비스 개발 + CI/CD

소상공인용 광고 이미지 생성. 로컬 GPU 모델과 OpenAI를 섞어 비용을 줄이는 구조. GitHub Actions 배포, VRAM 동시 상주 설계.

`FastAPI` `diffusers` `Ollama` `GitHub Actions` `GCP` `Docker Compose` `SQLite`

---

## 저장소

| 프로젝트 | 코드 | 데모 |
|---|---|---|
| RFP RAG System | [codeit-ai12-project2-team4/rfp-rag-system](https://github.com/codeit-ai12-project2-team4/rfp-rag-system) | 백엔드 종료 · 영상 참고 |
| 경구약제 검출 | [taemin050-sys/project1-3team](https://github.com/taemin050-sys/project1-3team) · [FE](https://github.com/joelchoi85/medication-detect-fe) | 백엔드 종료 |
| Just Make It | [sprint-ai-12-4team/just-make-it](https://github.com/sprint-ai-12-4team/just-make-it) | 영상 준비 중 |

더 짧게 보려면 → [의사결정 기록](decisions/) · [이력서](resume/resume.md)

> 세 프로젝트 모두 프론트엔드는 Vercel에 남아 있지만 GPU VM은 내려가 있습니다. 화면은 열리고 요청은 실패합니다.
