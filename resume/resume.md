# 최중열

MLOps / LLMOps Engineer · jymania@naver.com · [GitHub](https://github.com/joelchoi85) · [포트폴리오](../README.md)

GPU 한 장 위에 모델을 올려 서비스하고, 평가 세트와 측정으로 설정을 고르고, 갱신과 배포를 무인화해 왔습니다.

<!-- TODO: 연락처·링크 확인, 이전 경력이 있다면 아래에 추가 -->

---

## 프로젝트

### RFP RAG System — 공공입찰 제안요청서 Q&A
2026.08 – 2026.09 · 4인 · Retrieval Engineer (팀 커밋 78%)

- L4 24GB GPU 한 장에 임베딩·리랭커·SPLADE(TEI)와 생성 LLM(SGLang)을 배치하고, VRAM 예산에 맞춰 생성 모델을 컨테이너 교체 방식으로 운영
- LanceDB 증분 색인과 BM25 형태소 분석 캐시로 서버 기동 185초 → 1.9초, 재시작 없는 `/reload` 반영. 크롤링부터 색인까지 3시간 주기로 무인화
- 160문항 평가 세트와 문항 단위 부호 비교 도구로 검색 설정을 결정. 1단계 후보 수 조정으로 MRR 0.478 → 0.576
- 규칙 기반 지표와 LLM-judge 를 나눈 채점기로 평가 한 바퀴 비용 $1.34
- `FastAPI` `SGLang` `TEI` `LanceDB` `Docker` `systemd` `cron`

### 헬스잇 경구약제 검출 — 알약 사진 객체 검출
2026.06 – 2026.07 · 5인 · Experimentation Lead → 서빙/배포

- 지각해시 기반 누수 감사와 장면 단위 그룹 분할로 부풀려진 검증 점수를 걸러냄
- Optuna HPO 와 그룹 5-Fold 로 YOLO11s mAP@[0.75:0.95] 0.9944
- 실사진 평가셋을 따로 만들어 배포 환경 recall 0.077 을 드러내고, SAM 합성 데이터로 0.181 까지 개선
- 검출 API(Hugging Face Spaces)와 공공데이터 API 를 잇는 Next.js 웹앱 배포
- `YOLO11` `Optuna` `SAM` `Hugging Face Spaces` `Next.js`

### Just Make It — AI 광고 이미지 생성 서비스 *(진행 중)*
2026.10 – · 3인 · PM + 서비스 개발

- L4 24GB · RAM 16GB VM 에서 이미지·텍스트 모델 동시 상주 조합을 설계하고, 라이선스로 후보를 거름
- GitHub Actions → GCP VM Docker Compose 자동 배포 구축
- SQLite 생성 기록과 로컬 이미지 저장소, 서빙 API 연동
- `FastAPI` `diffusers` `Ollama` `GitHub Actions` `GCP`

---

## 교육

코드잇 스프린트 AI 엔지니어링 12기 · 2026

## 기술

- **서빙**: FastAPI, SGLang, TEI, Ollama, Docker Compose, systemd
- **검색·데이터**: LanceDB, FAISS, BM25(Kiwi), SPLADE, 크롤링·증분 파이프라인
- **학습·평가**: PyTorch, YOLO, Optuna, K-Fold, LLM-as-a-judge
- **배포**: GitHub Actions, GCP, Vercel, Hugging Face Spaces
