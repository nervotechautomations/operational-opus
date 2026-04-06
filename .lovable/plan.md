

# Add Claude Artifact Embed to /realestate

## What changes
Add an iframe embedding the Claude artifact between the Hero section and the "How It Works" section on the Real Estate landing page.

## Implementation

### Modify `src/pages/RealEstate.tsx`
- Insert a new section after the hero (`</section>` at ~line 98) and before the "How It Works" section (line 100)
- Wrap the iframe in a `motion.div` with the same `fadeUp` animation for consistency
- Constrain to `max-w-5xl` to match other sections
- Style the iframe with rounded corners (`rounded-xl`), a subtle border (`border border-neutral-800`), and dark background to blend with the page
- Set `width="100%"`, `height="600"`, `frameBorder="0"`, `allow="clipboard-write"`, and `allowFullScreen`

```tsx
{/* DEMO EMBED */}
<section className="relative z-10 max-w-5xl mx-auto px-6 pb-12">
  <motion.div {...fadeUp} className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
    <iframe
      src="https://claude.site/public/artifacts/9bd4a0b6-ca0d-44e8-bc36-c456103321e4/embed"
      title="AI Receptionist Demo"
      width="100%"
      height="600"
      frameBorder="0"
      allow="clipboard-write"
      allowFullScreen
      className="w-full"
    />
  </motion.div>
</section>
```

No other files need to change.

