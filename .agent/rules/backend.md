# Backend Rules

Pisahkan Route → Validation → Authentication → Authorization → Service → Repository → ORM → MariaDB sesuai arsitektur project.

Endpoint harus mempertimbangkan validation, authn/authz, predictable errors, pagination, rate limiting bila sensitif, idempotency bila kritis, dan transaction bila atomic.

Jangan expose stack trace, SQL internal error, server path, credential, atau secret. External service harus memiliki timeout, error handling, response validation, dan retry hanya bila aman.
