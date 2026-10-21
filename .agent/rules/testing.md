# Testing Rules

Gunakan testing stack existing. Untuk JS/TS baru default: Vitest (unit/integration), Playwright (E2E), axe-core (accessibility), Lighthouse CI (performance/SEO bila relevan).

Prioritas Unit → Integration → Critical E2E. Bug penting idealnya memiliki regression test. Database test menggunakan isolated MariaDB test database.

Security tests mencakup unauthenticated, unauthorized, cross-user access, invalid payload, malformed ID, dan privilege boundary. Status: PASS / FAIL / NOT RUN / NOT APPLICABLE.
