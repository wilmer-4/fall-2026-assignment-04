---
name: erd-generator
description: Accepts a domain description and then creates an Entity-Relationship Diagram (ERD) in a .mmd file and then creates a visual as a .svg file. It triggers when requested to design an ERD, data model, or architecture diagram
---

# REQUIRED FILES
The skill must create: docs/architecture/schema.mmd
docs/architecture/erd.svg
Do not report succesful unless both are created

# EXECUTION WORKFLOW

1. Parse domain requirements into entities, primary keys (PK), foreign keys (FK), and cardinalities.
2. Write the drafted Mermaid syntax directly to docs/architecture/schema.mmd.
3. Execute node scripts/render_erd.js docs/architecture/schema.mmd.
4. Self-Correction Loop: If execution fails with SYNTAX_ERROR, parse the error trace, adjust the Mermaid syntax in docs/architecture/schema.mmd, and re-run (up to 3 retries).
5. Final Output: Present the raw Mermaid block to the user and reference the generated image asset path (docs/architecture/erd.svg).