# MovingImageCarousel Component

A premium, production-ready infinite scrolling image carousel for React + Tailwind CSS. Features smooth continuous animation, hover pause, and individual image zoom effects.

## Features

✅ **Infinite Scroll Animation** - Seamless right-to-left movement with duplicated content
✅ **Pause on Hover** - Entire carousel pauses when user hovers anywhere on it
✅ **Image Zoom Effect** - 1.08x scale zoom on individual image hover (smooth cubic-bezier easing)
✅ **Responsive Design** - Adapts from 1-2 images (mobile) → 2-3 (tablet) → 4 (desktop)
✅ **Smooth Animations** - GPU-accelerated CSS keyframes with 0.4s cubic-bezier zoom transitions
✅ **Modern UI** - Rounded corners, subtle overlays, shadow insets, lazy loading
✅ **Framer Motion Integration** - Entrance animations on scroll with smooth transitions
✅ **TypeScript Support** - Fully typed component props interface

## Installation & Usage

### Basic Usage

```tsx
import MovingImageCarousel from '@/components/MovingImageCarousel';

const images = [
  { src: '/image1.jpg', alt: 'Image 1' },
  { src: '/image2.jpg', alt: 'Image 2' },
  { src: '/image3.jpg', alt: 'Image 3' },
  { src: '/image4.jpg', alt: 'Image 4' },
];

export default function Home() {
  return (
    <MovingImageCarousel
      images={images}
      title="Our Gallery"
      description="Beautiful moments in motion"
      autoplayDuration={50}
    />
  );
}
```

### Example: Index Page Integration

```tsx
import MovingImageCarousel from "@/components/MovingImageCarousel";

const teamPreview = [
  { image: doctor1, name: "Dr. A", bio: "...", quote: "..." },
  { image: doctor2, name: "Dr. B", bio: "...", quote: "..." },
  // ...
];

export default function Index() {
  return (
    <section className="py-20 bg-dental-warm">
      <MovingImageCarousel
        images={teamPreview.map(doc => ({
          src: doc.image,
          alt: doc.name,
        }))}
        title="Meet Your Dentists"
        description="Dedicated professionals committed to your dental health."
        autoplayDuration={50}
      />
    </section>
  );
}
```

## Component Props

```typescript
interface MovingImageCarouselProps {
  images: CarouselImage[];              // Array of images with src and alt
  title?: string;                       // Optional title (e.g., "Our Team")
  description?: string;                 // Optional subtitle/description
  autoplayDuration?: number;            // Animation duration in seconds (default: 50)
}

interface CarouselImage {
  src: string;                          // Image source path
  alt: string;                          // Alternative text
}
```

## Customization

### Animation Speed

Change `autoplayDuration` prop (in seconds):

```tsx
// Fast: 30-35s
<MovingImageCarousel images={images} autoplayDuration={30} />

// Normal: 45-60s (recommended)
<MovingImageCarousel images={images} autoplayDuration={50} />

// Slow: 70-90s
<MovingImageCarousel images={images} autoplayDuration={80} />
```

### Image Count (Responsive Breakpoints)

Current breakpoints:
- **Mobile** (< 641px): ~1.5 images visible
- **Tablet** (641px - 1024px): ~2.5 images visible
- **Desktop** (> 1024px): 4 images visible

To modify (e.g., show 3 on desktop instead of 4):

In the `<style jsx>` section, update:

```css
@media (min-width: 1025px) {
  .carousel-item {
    width: calc((100vw - 4rem) / 3);  /* Change from /4 to /3 */
    height: 300px;
  }
}
```

### Hover Zoom Level

Default is 1.08 (8% zoom). To change:

In the `<style jsx>` section:

```css
.carousel-item:hover .carousel-image {
  transform: scale(1.15);  /* Change 1.08 to desired value */
}
```

Options:
- Subtle: `1.05`
- Normal (default): `1.08`
- Pronounced: `1.12`

### Hover Overlay Opacity

Default overlay opacity on hover is 0.3. To change:

```css
.carousel-overlay {
  background: rgba(0, 0, 0, 0.3);  /* Change 0.3 to 0.1-0.5 */
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.carousel-item:hover .carousel-overlay {
  opacity: 1;
}
```

### Rounded Corners

Current: `rounded-xl` (large radius). Options:

```tsx
// In JSX:
<div className="carousel-item rounded-lg overflow-hidden ...">  {/* smaller corners */}
// or
<div className="carousel-item rounded-full overflow-hidden ...">  {/* circular */}
```

### Gap Between Images

Current: `gap: 1rem` (desktop), `gap: 0.75rem` (mobile). To change:

```css
.carousel-track {
  gap: 1.5rem;  /* Increase from 1rem to 1.5rem */
}

@media (max-width: 768px) {
  .carousel-track {
    gap: 1rem;  /* Increase from 0.75rem to 1rem */
  }
}
```

### Background Styling

Change gradient background for placeholder:

```tsx
// Current:
className="carousel-item rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"

// Alternative gradients:
// Soft blue:
bg-gradient-to-br from-blue-50 to-blue-100

// Warm:
bg-gradient-to-br from-orange-50 to-red-100

// Premium:
bg-gradient-to-br from-slate-100 to-slate-200
```

## Animation Details

### CSS Keyframes

The carousel uses a continuous `scroll-left` keyframe:

```css
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2));  /* Moves exactly 50% to loop */
  }
}
```

The `-100% / 2` calculation accounts for the duplicated images, creating seamless looping.

### Zoom Transition

Hover zoom uses cubic-bezier easing for premium feel:

```css
.carousel-image {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* This easing provides "overshoot" effect for smooth acceleration */
}
```

## Performance Notes

✅ **GPU Accelerated** - Uses `transform: translateX()` (composited) and `transform: scale()` for 60fps animation
✅ **Lazy Loading** - Images use `loading="lazy"` for better initial page load
✅ **No JavaScript Animation** - Pure CSS keyframes (most performant)
✅ **Duplicate Content Strategy** - Duplicates array internally, no flickering or gaps
✅ **Efficient Hover Handling** - Uses CSS pseudo-classes, minimal React re-renders

## Responsive Examples

### Mobile (< 641px)
- ~1.5 images visible
- Smaller gaps between items
- Adjusted image height (250px)

### Tablet (641px - 1024px)
- ~2.5 images visible
- Medium gaps
- Adjusted image height (280px)

### Desktop (> 1024px)
- 4 images fully visible
- Larger gaps
- Full image height (300px)

## Browser Support

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- `alt` text automatically applied from `CarouselImage.alt`
- Images can be focused (keyboard navigation compatible)
- Pause behavior provides accessible experience

## Troubleshooting

### Animation has visible gap/jump
- Verify `autoplayDuration` matches animation smoothness expectations
- Ensure images array is duplicated correctly internally (should be automatic)
- Check browser DevTools Performance tab for dropped frames

### Zoom not working on hover
- Verify `.carousel-item.hover` styling is defined
- Check that `pointer-events` is not `none` on parent
- Test in DevTools: inspect element and check `transform` property

### Images not loading
- Verify image paths are correct
- Check network tab for 404s
- Ensure lazy loading isn't preventing visibility (use `loading="eager"` if critical images)

### Carousel not pausing on hover
- Verify `isHovered` state updates correctly in React DevTools
- Check CSS `.paused` class is applied: `animation-play-state: paused`
- Ensure `onMouseEnter`/`onMouseLeave` handlers are firing

## Optional Enhancements

### Add Blur Background
```tsx
<div className="carousel-item rounded-xl overflow-hidden backdrop-blur-sm bg-white/30 ...">
```

### Add Border
```tsx
<div className="carousel-item rounded-xl overflow-hidden border-2 border-white/50 shadow-lg ...">
```

### Auto-hide info text on mobile
```tsx
<div className="mt-8 text-center hidden sm:block">
  <p className="text-sm text-muted-foreground animate-pulse">
    ✨ Hover to pause • Smooth infinite scroll • Premium animations
  </p>
</div>
```

### Custom Pause/Play Controls
```tsx
// Add to component props
const [manualPause, setManualPause] = useState(false);

// Use: isHovered || manualPause for combined logic
<button onClick={() => setManualPause(!manualPause)}>
  {manualPause ? 'Play' : 'Pause'}
</button>
```

## Integration with Other Components

The carousel works seamlessly with:
- ✅ Framer Motion (uses `motion.div` for entrance)
- ✅ Tailwind CSS (pure utility classes)
- ✅ TypeScript (fully typed)
- ✅ Standard React hooks (useState)
- ✅ Any image format (jpg, png, webp, etc.)

---

**Created:** April 2026
**Component Type:** React Functional Component
**Framework:** Vite + React + TypeScript
**Styling:** Tailwind CSS + CSS Keyframes
**Animation Library:** CSS (no external animation library required)
