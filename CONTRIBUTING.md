# 🤝 Contributing guide

Thank you for helping improve Blockchain Healthcare. This repository is a learning prototype, so contributions should be clear, reproducible, safe, and honest about what has and has not been implemented.

## Before contributing

Read:
- [README](README.md)
- [Security policy](SECURITY.md)
- [Architecture](docs/architecture.md)
- [Threat model](docs/threat-model.md)
- [Privacy guide](docs/privacy.md)
- [Accessibility guide](docs/accessibility.md)
- [Known issues](docs/known-issues.md)

## Development workflow

1. Identify the affected workflow: wallet connection, authorization, record write, record read, or docs.
2. Confirm whether the change touches Solidity storage, ABI shape, transaction behavior, or user-facing forms.
3. Create a focused branch.
4. Make the smallest safe change.
5. Regenerate the ABI from the exact compiled contract artifact when Solidity changes.
6. Add React/contract tests and update relevant docs.
7. Run tests and build.
8. Review security, privacy, accessibility, responsive behavior, and user-facing errors.

## Non-negotiable privacy requirements

- Use synthetic names, IDs, diagnoses, and treatment text.
- Never put actual patient data in tests, screenshots, fixtures, issue reports, or chain deployments.
- Do not add patient-facing claims of privacy while clinical fields remain public.
- Avoid logging clinical payloads.
- Any change to on-chain storage requires privacy and threat-model review.

## Pull request checklist

- [ ] Change is scoped and explained.
- [ ] Solidity ABI is generated from the exact source/compiler artifact.
- [ ] React and contract tests cover changed behavior.
- [ ] `npm test -- --watchAll=false` passes.
- [ ] `npm run build` passes.
- [ ] No secrets or health data are committed.
- [ ] Accessibility and keyboard behavior reviewed.
- [ ] Documentation, risks, and diagrams updated.
- [ ] No production-readiness or compliance claims without evidence.

## Review standard

A successful demo transaction is not evidence of clinical safety, privacy compliance, or contract security. Changes that affect clinical data storage must receive specialist review before being presented as suitable for real healthcare use.
