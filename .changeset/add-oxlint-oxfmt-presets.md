---
"@seolhun/eslint-config": major
---

Add oxlint and oxfmt presets (`./oxlint`, `./oxfmt`) as a Rust-based drop-in for the ESLint + Prettier configs. The oxlint preset loads perfectionist and react-hooks (incl. React Compiler rules `refs` / `static-components`) via oxlint jsPlugins, preserving the same rule spec.

BREAKING: `eslint-plugin-react-hooks` peer bumped to `>=7` (React Compiler rules require v7).
