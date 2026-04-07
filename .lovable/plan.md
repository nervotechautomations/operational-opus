

# Make Call Flow Animation Vertical on Mobile

## Problem
The animation currently uses a horizontal layout (phone → connector → AI panel → connector → right panel) which doesn't fit well on mobile even with scaling. On a 390px viewport, the scaled-down elements are too small to read.

## Solution
Restructure the animation to stack vertically on mobile screens (under 600px) while keeping the horizontal layout on desktop.

### Changes to `public/call-flow-animation.html`

**CSS changes (mobile media query):**
- Change `.stage` from `flex-direction: row` to `flex-direction: column` on mobile
- Remove the `transform: scale()` hack — elements will be full-width instead
- Make `.conn` connectors vertical: swap width/height, change gradient direction to vertical, and make the dot animate top-to-bottom instead of left-to-right
- Make `.phone`, `.ai-panel`, `.right-panel` full width with `width: 100%` and appropriate max-widths
- Allow `.scene` to scroll vertically (`overflow-y: auto`) instead of `overflow: hidden`
- Set `.stage` to `align-items: center` with proper vertical gaps

**Specific mobile overrides:**
- `.stage`: `flex-direction: column; gap: 12px; transform: none; max-width: 300px; padding: 60px 16px 40px;`
- `.conn`: `width: 1px; height: 40px; max-width: none; min-width: auto;` with vertical gradient
- `.conn-dot.active`: new `@keyframes travel-v` animating top instead of left
- `.phone`: slightly smaller (`width: 90px; height: 170px`)
- `.ai-panel`, `.right-panel`: `width: 100%`
- `.scene`: `overflow-y: auto; height: auto; min-height: 100vh;`

**Also update `src/pages/RealEstate.tsx`:**
- Increase mobile iframe height from `350px` to `580px` to accommodate the vertical layout

### No JS changes needed
The animation logic stays the same — only CSS layout changes via media queries.

