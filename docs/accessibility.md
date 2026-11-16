# ♿ Accessibility and inclusive UX

## Current assessment

The current UI uses placeholder text as the primary input identification, has limited status semantics, and has not been validated with assistive technology. This is a review checklist, not a claim of WCAG conformance.

## Form accessibility

- Provide a visible `label` associated with every input.
- Explain required formats and validation before submission.
- Group related controls using `fieldset` and `legend` where appropriate.
- Set appropriate input types and autocomplete attributes.
- Associate errors using `aria-describedby`.
- Keep focus visible and logical after errors and dialogs.

## Wallet and transaction accessibility

- Announce connection state with a polite live region.
- Explain which account and network are connected.
- Do not rely on color or toast animation alone to communicate transaction status.
- Ensure transaction errors remain available long enough to read.
- Move focus appropriately after modal or wallet-related interactions.
- Provide a clear path when wallet software is unavailable.

## Visual and responsive design

- Verify text contrast against background.
- Support browser zoom and narrow viewports.
- Avoid conveying owner/provider status by color alone.
- Ensure controls have meaningful accessible names and usable target sizes.
- Respect reduced-motion preferences.

## Test checklist

- [ ] Complete all tasks with keyboard only.
- [ ] Confirm visible focus at every step.
- [ ] Test with a screen reader.
- [ ] Check form labels and error descriptions.
- [ ] Check 200% zoom and mobile viewport.
- [ ] Verify contrast with an automated checker and manual review.
- [ ] Confirm dynamic transaction state is announced.
- [ ] No information conveyed only by color, shape, or toast.

Target WCAG 2.2 AA as a design goal, but do not claim conformance without a documented audit.
