# Skill: Database Migration

## Trigger

Setiap perubahan schema production.

## Workflow

Periksa existing schema, compatibility, lock/data-loss risk. Prioritaskan additive change. Test fresh DB + seluruh migration dan existing-like DB + migration baru. Jalankan integration tests. Dokumentasikan rollback/recovery untuk perubahan destructive.
