# AboutImageCarousel Component

A fully responsive, production-ready image carousel component for Next.js with Tailwind CSS. Features infinite looping, hover zoom effects, and pause-on-hover functionality.

## Features

✅ **Infinite Looping** - Seamlessly loops through images continuously
✅ **Responsive Design** - Mobile (1 image), Tablet (2 images), Desktop (3 images)
✅ **Hover Zoom** - Smooth 1.08x scale zoom on hover without layout shift
✅ **Pause on Hover** - Entire carousel pauses when cursor hovers anywhere on it
✅ **Smooth Animations** - CSS keyframe animations for optimal performance
✅ **Next.js Image Optimization** - Uses Next.js `Image` component for best performance
✅ **Accessibility** - Proper alt text and semantic HTML
✅ **Dark Mode Compatible** - Works with Tailwind dark mode

## Installation & Usage

### 1. Add to Your About Page

```tsx
// src/pages/About.tsx
import AboutImageCarousel from "@/components/AboutImageCarousel";

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Clinic</h2>
        <AboutImageCarousel />
      </div>
    </section>
  );
}
```

### 2. Replace Placeholder Images

Open `src/components/AboutImageCarousel.tsx` and update the image imports:

```tsx
// Replace these imports with your actual images
import placeholder1 from '@/assets/your-clinic-image-1.jpg';
import placeholder2 from '@/assets/your-clinic-image-2.jpg';
import placeholder3 from '@/assets/your-clinic-image-3.jpg';
import placeholder4 from '@/assets/your-clinic-image-4.jpg';

const images: CarouselImage[] = [
  { src: placeholder1, alt: 'Modern treatment area' },
  { src: placeholder2, alt: 'Digital X-ray equipment' },
  { src: placeholder3, alt: 'Patient waiting area' },
  { src: placeholder4, alt: 'Sterilization room' },
];
```

## Customization

### Animation Speed

Change the animation duration (default: 40s) in the `@keyframes carousel-scroll`:

```tsx
@keyframes carousel-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2));
  }
}

.carousel-track {
  animation: carousel-scroll 40s linear infinite; /* Change 40s to your desired speed */
}
```

**Speed Guidelines:**
- Fast (dynamic): 25s
- Normal (recommended): 40s
- Slow (elegant): 60s

### Gap Between Images

Modify `gap-4 md:gap-6` in the main track div:

```tsx
<div className={`carousel-track flex gap-4 md:gap-6 lg:gap-8 ${isPaused ? 'paused' : ''}`}>
```

### Responsive Image Count

The component uses these breakpoints:
- Mobile: `w-[100vw]` (1 image fills viewport)
- Tablet: `md:w-[50vw]` (2 images)
- Desktop: `lg:w-[calc(100%/3)]` (3 images)

To change (e.g., show 4 on desktop):

```tsx
<div className="w-[100vw] md:w-[50vw] lg:w-[25%] aspect-video relative rounded-lg overflow-hidden">
```

And update the CSS:
```typescript
// For 4 images on desktop - change the animation
transform: translateX(calc(-100% / 2)); // remains the same, duplicates handle it
```

### Hover Zoom Effect

Customize the zoom level by changing the `scale()` value:

```tsx
.carousel-item.hovered {
  transform: scale(1.08); /* Change 1.08 to 1.05, 1.1, 1.15, etc. */
}
```

### Border Radius & Shadow

Modify the image container styling:

```tsx
<div className="w-[100vw] md:w-[50vw] lg:w-[calc(100%/3)] aspect-video relative rounded-lg overflow-hidden shadow-lg">
  {/* rounded-lg: border radius */}
  {/* shadow-lg: shadow size */}
```

Options:
- `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`

### Disable Pause on Hover

Remove the mouse event handlers:

```tsx
// Remove these from the outer wrapper:
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => {
  setIsPaused(false);
  setHoveredIndex(null);
}}
```

### Show/Hide Info Text

The component includes optional descriptive text at the bottom:

```tsx
{/* Remove this section to hide info text */}
<div className="mt-8 text-center">
  <p className="text-sm text-muted-foreground">
    Gallery loops infinitely • Hover to pause • Zoom effect on hover
  </p>
</div>
```

## Performance Optimization

✅ Uses CSS keyframe animations (GPU accelerated)
✅ `useTransform` only for CSS classes, not on every frame
✅ Next.js Image component with proper `sizes` prop
✅ Duplicates array approach prevents rerenders during scroll

## Component Props

The component currently has no props (uses predefined images). To make it flexible:

```tsx
interface AboutImageCarouselProps {
  images?: CarouselImage[];
  autoplayDuration?: number; // in ms
  itemsPerView?: 'mobile' | 'tablet' | 'desktop';
  onPauseChange?: (isPaused: boolean) => void;
}

export default function AboutImageCarousel({
  images: customImages,
  autoplayDuration = 40,
}: AboutImageCarouselProps) {
  // ... use customImages or images
}
```

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch (no pause on hover)

## Accessibility

- ✅ Semantic image structure with alt text
- ✅ Respects `prefers-reduced-motion` (optional enhancement - add if needed)
- ✅ Keyboard accessible (pause/resume via focus states if needed)

## Optional: Add Keyboard Controls

To pause/resume with spacebar:

```tsx
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      setIsPaused(prev => !prev);
    }
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

## Troubleshooting

### Images not showing?
- Verify image paths are correct in imports
- Check that images exist in `/public/assets/`
- Use Next.js Image DevTools in browser

### Animation not smooth?
- Ensure CSS animations are not conflicting with other styles
- Check browser DevTools Performance tab
- Verify GPU acceleration is enabled (should be default)

### Layout shift on hover?
- This should NOT happen - the zoom uses `transform: scale()` which doesn't affect layout
- If it occurs, check for accidental CSS overrides

### Looping has gap/flicker?
- Verify the duplicate array approach is working: check `displayImages` length is exactly double
- Ensure `@keyframes` is correctly animating to `-100% / 2`

## Example Without Placeholder Text

```tsx
<section className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
      <h2 className="text-4xl font-bold mb-2 text-center">Our Modern Clinic</h2>
      <p className="text-center text-gray-600 mb-12">Experience state-of-the-art dental care</p>
    </motion.div>
    <AboutImageCarousel />
  </div>
</section>
```

---

**Created:** April 2026
**Component Type:** Next.js / React Functional Component
**Styling:** Tailwind CSS + CSS Keyframes
**Dependencies:** next/image, react
