---
name: kysely-migration-generator
description: Reads a compiled ERD and translates it into a type-safe kysely database migration. triggers when requested to generate a kysely kigration from ERD or database schema.
---

# EXECUTION WORKFLOW
1. Read the ERD from docs/architecture/schema.mmd
2. Map Mermaid entities to snake_case database table names (example: USERS to users)
3. Convert PK (primary keys) attributes to auto-generating IDs/UUIDs and FK (foriegn keys) to .references().onDelete('cascade')
4. Correctly map ||--o{ (one to many) and ||--o| (one to one with unique constraints)
5. Write the generated TypeScript Migration to src/db/migrations/<timestamp>_<migration_name>.ts
6. Enforce exports for both up(db: Kysely<any>) and down(db: Kysely<any>) functions. The down function must drop tables in reverse dependency order.