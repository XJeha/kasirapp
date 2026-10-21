# Skill: Security Audit

## Trigger

Audit security, pre-production, perubahan auth/authz, upload, atau endpoint sensitif.

## Workflow

1. Petakan attack surface.
2. Periksa authentication.
3. Uji authorization: anonymous, User A → resource User B, normal user → admin.
4. Periksa injection, XSS, SSRF, path traversal, malformed payload.
5. Cari kemungkinan secret exposure.
6. Jalankan dependency/security audit yang tersedia.
7. Laporkan Critical/High/Medium/Low/Informational dengan Issue, Impact, Evidence, Fix, Verification.
   Jangan mengklaim aplikasi 100% aman.
