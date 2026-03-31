

# Cal.com Booking Integration

## Overview
Wire up all "Schedule" buttons to open a Cal.com scheduling embed in a dialog modal. This keeps users on-site and provides a polished booking experience.

## Prerequisites
You'll need your Cal.com booking link (e.g., `cal.com/nervo-tech/discovery-call`). We'll make it configurable via a constant.

## Plan

### 1. Create a reusable CalBookingDialog component
- New file: `src/components/CalBookingDialog.tsx`
- Uses shadcn `Dialog` component with a full-width iframe pointing to your Cal.com embed URL
- Props: `open`, `onOpenChange`
- Embed URL stored as a constant at the top (easy to update)
- Styled to match the dark engineering aesthetic (dark background, accent border)

### 2. Wire up buttons in AIAutomationPlan.tsx
- Import `CalBookingDialog`, add `open` state
- "Schedule Technical Discovery" button opens the dialog instead of `window.open("#")`

### 3. Wire up button in FinalCTA.tsx
- Same pattern — "Schedule a Consultation" button opens the Cal.com dialog

### 4. Update AIGrowthScore.tsx placeholder
- Replace the "Scheduling widget loading…" placeholder div with the Cal.com iframe embed directly inline (already has a dedicated section for it)

## Technical Details
- Cal.com embed URL format: `https://cal.com/{username}/{event}?embed=true&theme=dark`
- The `?theme=dark` param matches our dark UI
- Iframe gets `width: 100%`, `min-height: 600px`, `border: none`, `border-radius` to match card styling
- All existing visual design and layout preserved — only `onClick` handlers and the new dialog change

