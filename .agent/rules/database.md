# Database Rules

Database utama: MariaDB. ORM mengikuti stack existing dan compatibility aktual.

Pertimbangkan PK, FK, UNIQUE, NOT NULL, datatype, default, index, referential integrity. Waspadai N+1, full table scan, missing index, duplicate query, oversized result, dan pagination tidak efisien.

Raw SQL wajib parameterized. Schema change menggunakan migration. Evaluasi data loss, lock, downtime, rollback, dan backward compatibility. Automated test dilarang menggunakan production database.
