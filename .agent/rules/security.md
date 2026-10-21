# Security Rules

Semua input eksternal dianggap tidak terpercaya.

Wajib: validasi server-side, authorization server-side, least privilege, deny-by-default, parameterized query, secret protection, secure error handling, upload validation, dan rate limiting bila relevan.

Periksa SQL Injection, XSS, CSRF, SSRF, IDOR/BOLA, broken access control, privilege escalation, mass assignment, path traversal, command injection, unsafe upload, open redirect, brute force, session fixation, credential exposure, dan race condition.

Dilarang hardcoded secret, plaintext password, SQL concatenation dari input, client-side-only authorization, logging token/password, dan expose stack trace production.
