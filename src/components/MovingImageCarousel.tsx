import { useState } from 'react';
import { motion } from 'framer-motion';

interface CarouselImage {
  src: string;
  alt: string;
}

interface MovingImageCarouselProps {
  images: CarouselImage[];
  title?: string;
  description?: string;
  autoplayDuration?: number; // seconds
}

export default function MovingImageCarousel({
  images,
  title,
  description,
  autoplayDuration = 50,
}: MovingImageCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

  // Duplicate images for seamless infinite loop
  const displayImages = [...images, ...images];

  return (
    <section className="w-full py-16 md:py-20 overflow-hidden">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .carousel-container {
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          animation: scroll-left ${autoplayDuration}s linear infinite;
        }

        .carousel-track.paused {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .carousel-track {
            gap: 0.75rem;
          }
        }

        .carousel-item {
          flex-shrink: 0;
          position: relative;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .carousel-item:hover .carousel-image {
          transform: scale(1.08);
        }

        /* Responsive image sizing */
        @media (max-width: 640px) {
          /* Mobile: show 1-2 images */
          .carousel-item {
            width: calc((100vw - 2rem) / 1.5);
            height: 250px;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          /* Tablet: show 2-3 images */
          .carousel-item {
            width: calc((100vw - 3rem) / 2.5);
            height: 280px;
          }
        }

        @media (min-width: 1025px) {
          /* Desktop: show 4 images */
          .carousel-item {
            width: calc((100vw - 4rem) / 4);
            height: 300px;
          }
        }

        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }

        .carousel-item:hover .carousel-overlay {
          opacity: 1;
        }

        .carousel-shadow {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1);
          border-radius: 1rem;
          pointer-events: none;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {description}
              </p>
            )}
          </motion.div>
        )}

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredImageIndex(null);
          }}
        >
          <div className={`carousel-track ${isHovered ? 'paused' : ''}`}>
            {displayImages.map((image, index) => (
              <div
                key={`${index}-${image.alt}`}
                className="carousel-item rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
                onMouseEnter={() => setHoveredImageIndex(index)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                  loading="lazy"
                />
                <div className="carousel-overlay" />
                <div className="carousel-shadow" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground animate-pulse">
            ✨ Hover to pause • Smooth infinite scroll • Premium animations
          </p>
        </div>
      </div>
    </section>
  );
}
