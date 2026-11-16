# Release checklist

## Source and build
- [ ] Source commit recorded.
- [ ] npm lockfile reviewed.
- [ ] `npm ci` succeeds.
- [ ] Tests pass and are feature-specific.
- [ ] Production build succeeds.

## Smart contract
- [ ] Compiler/settings recorded.
- [ ] ABI generated from exact source.
- [ ] Contract tests pass.
- [ ] Address, chain ID and bytecode verified.
- [ ] Owner/provider policy reviewed.

## Security and privacy
- [ ] No real clinical data in demo.
- [ ] No secrets or private keys in source.
- [ ] Threat review completed.
- [ ] Independent review status disclosed.
- [ ] Patient consent and retention limitations explicit.

## Accessibility and operations
- [ ] Keyboard and assistive technology checks recorded.
- [ ] Responsive and contrast checks completed.
- [ ] Incident and support contacts documented.
- [ ] Monitoring avoids clinical payloads.

## Approval
- [ ] Known limitations published.
- [ ] Release owner and date recorded.
