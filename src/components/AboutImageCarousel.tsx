import { useState } from 'react';

// Placeholder images - replace with your actual image imports
import placeholder1 from '@/assets/doctor-1.jpg';
import placeholder2 from '@/assets/doctor-2.jpg';
import placeholder3 from '@/assets/doctor-3.jpg';
import placeholder4 from '@/assets/doctor-4.jpg';

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  { src: placeholder1, alt: 'Dental clinic interior - treatment area' },
  { src: placeholder2, alt: 'Modern dental equipment and chairs' },
  { src: placeholder3, alt: 'Patient consultation room' },
  { src: placeholder4, alt: 'Sterilization and preparation area' },
];

export default function AboutImageCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Create duplicate array for seamless looping
  const displayImages = [...images, ...images];

  return (
    <div className="w-full py-12 md:py-16">
      <style jsx>{`
        @keyframes carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .carousel-track {
          animation: carousel-scroll 40s linear infinite;
        }

        .carousel-track.paused {
          animation-play-state: paused;
        }

        .carousel-item {
          flex-shrink: 0;
          transition: transform 0.3s ease-out;
        }

        .carousel-item.hovered {
          transform: scale(1.08);
        }
      `}</style>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(null);
        }}
      >
        <div
          className={`carousel-track flex gap-4 md:gap-6 ${isPaused ? 'paused' : ''}`}
        >
          {displayImages.map((image, index) => (
            <div
              key={`${index}-${image.alt}`}
              className={`carousel-item relative ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Mobile: 1 image visible, Tablet: 2 images, Desktop: 3 images */}
              <div className="w-[100vw] md:w-[50vw] lg:w-[calc(100%/3)] aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better visual hierarchy */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Carousel indicator/info section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Gallery loops infinitely • Hover to pause • Zoom effect on hover
        </p>
      </div>
    </div>
  );
}
