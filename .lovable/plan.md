

## Plan: Embedded Scheduling Experience for AI Growth Score Results

### What changes

Replace the current simple CTA section (lines 609-629 in `src/pages/AIGrowthScore.tsx`) with a full premium booking section containing:

1. **Updated copy** -- Title: "Book Your Free AI Automation Consultation", subtitle explaining the review process
2. **Trust row** -- Three items with icons: "30-minute strategy call", "Google Meet link included", "Calendar invite sent automatically"
3. **Cal.com embed placeholder** -- A styled card with a dashed border and integration-ready `div` (with `id="cal-embed"` and a comment noting where to initialize Cal.com's embed script), plus placeholder text explaining the embed area
4. **Post-booking note** -- Small text block listing what the visitor receives (email confirmation, Meet link, 15-min reminder)
5. **Fallback link** -- "Having trouble with the scheduler? Contact us directly." as a subtle text link below
6. **Secondary CTA** -- Keep the "Get Your AI Automation Plan" button

### Layout

- Full-width section with `max-w-3xl` container
- Card-based calendar embed area with clean borders
- Trust row as a horizontal flex on desktop, stacked on mobile
- All within existing design system (card-surface, mono-label, accent colors)

### Files modified

- `src/pages/AIGrowthScore.tsx` -- Replace lines 609-629 with the new booking section

