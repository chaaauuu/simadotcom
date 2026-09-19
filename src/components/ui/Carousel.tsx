import { useState, useEffect } from 'react';
import './Carousel.css';
import type { ArtPracticeItem } from '@/types/content';

interface CarouselProps {
  items: ArtPracticeItem[];
}

function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Preload adjacent images
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % items.length;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;

    // Preload next image
    const nextImg = new Image();
    nextImg.src = items[nextIndex].imageUrl;

    // Preload previous image
    const prevImg = new Image();
    prevImg.src = items[prevIndex].imageUrl;
  }, [currentIndex, items]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swiped right
      handlePrev();
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel-container">
      <button
        className="carousel-button carousel-button-prev"
        onClick={handlePrev}
        aria-label="Previous image"
        disabled={isTransitioning}
      >
        <img src="/arrow_left.svg" alt="" />
      </button>

      <div
        className="carousel-content"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-image-wrapper">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.imageAlt}
            className="carousel-image"
          />
        </div>
      </div>

      <button
        className="carousel-button carousel-button-next"
        onClick={handleNext}
        aria-label="Next image"
        disabled={isTransitioning}
      >
        <img src="/arrow_right.svg" alt="" />
      </button>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
