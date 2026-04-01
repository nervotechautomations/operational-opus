

# Embed Cal.com Calendar Inline on Results Page

## What changes
Replace the "Schedule Technical Discovery" button (which opens a dialog) with an inline Cal.com iframe embed directly on the results page. After completing the questionnaire and seeing their diagnostic results, users will see the booking calendar right there — no extra click needed.

## Implementation

### 1. Modify the results screen in `AIAutomationPlan.tsx`
- Remove the `CalBookingDialog` component and `calOpen` state (no longer needed)
- After the opportunity cards and the "next step" card, embed the Cal.com iframe inline with a section header like `SCHEDULE_DISCOVERY_SESSION`
- Use `CAL_EMBED_URL` from `CalBookingDialog.tsx` with `?embed=true&theme=dark`
- Style: full-width, ~600px min-height, dark theme, rounded corners matching the card aesthetic
- Keep the "Download Overview" button below the embed

### 2. Keep `CalBookingDialog.tsx` as-is
It's still used by `FinalCTA.tsx` on the homepage.

