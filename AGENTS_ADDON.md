# AGENT RULES & SKILLS SYSTEM

Tambahkan bagian ini ke AGENTS.md utama.

## Struktur

- `.agent/rules/` = aturan domain yang relevan.
- `.agent/skills/` = SOP pekerjaan tertentu.
- `.agent/templates/` = template dokumentasi.

## Rule Loading

Gunakan rule yang relevan:

- Security: `.agent/rules/security.md`
- Frontend/UI: `.agent/rules/frontend.md`
- Backend/API: `.agent/rules/backend.md`
- MariaDB/ORM: `.agent/rules/database.md`
- SEO: `.agent/rules/seo.md`
- Testing: `.agent/rules/testing.md`
- Dokumentasi: `.agent/rules/documentation.md`

## Skill Discovery

- Security audit: `.agent/skills/security-audit/SKILL.md`
- MariaDB: `.agent/skills/mariadb/SKILL.md`
- Migration: `.agent/skills/database-migration/SKILL.md`
- Frontend: `.agent/skills/frontend-design/SKILL.md`
- API: `.agent/skills/api-design/SKILL.md`
- Auth: `.agent/skills/auth-security/SKILL.md`
- E2E: `.agent/skills/playwright-testing/SKILL.md`
- Bug: `.agent/skills/bug-investigation/SKILL.md`
- SEO: `.agent/skills/seo-audit/SKILL.md`
- Accessibility: `.agent/skills/accessibility-audit/SKILL.md`
- Performance: `.agent/skills/performance/SKILL.md`
- Production: `.agent/skills/production-readiness/SKILL.md`

## Workflow

UNDERSTAND → INSPECT → RESEARCH → PLAN → DOCUMENT → IMPLEMENT → TEST → SECURITY REVIEW → FINAL VERIFY → REPORT

## Verification

Gunakan PASS / FAIL / NOT RUN / NOT APPLICABLE secara jujur. Jangan klaim PASS tanpa menjalankan pemeriksaan.
