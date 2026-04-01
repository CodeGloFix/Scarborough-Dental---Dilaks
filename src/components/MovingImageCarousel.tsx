import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/carousel.css';

interface CarouselImage {
  src: string;
  alt: string;
}

interface MovingImageCarouselProps {
  images: CarouselImage[];
  title?: string;
  description?: string;
  autoplayDuration?: number;
}

export default function MovingImageCarousel({
  images,
  title,
  description,
  autoplayDuration = 50,
}: MovingImageCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate images for seamless infinite loop
  const displayImages = [...images, ...images];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
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

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`carousel-track ${isHovered ? 'paused' : ''}`}
            style={{
              // Use CSS variable for animation duration
              '--animation-duration': `${autoplayDuration}s`,
            } as React.CSSProperties & { '--animation-duration': string }}
          >
            {displayImages.map((image, index) => (
              <div
                key={`${index}-${image.alt}`}
                className="carousel-item rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ✨ Hover to pause animation • Smooth infinite scroll
          </p>
        </div>
      </div>
    </section>
  );
}
