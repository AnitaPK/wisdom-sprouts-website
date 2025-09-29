'use client';

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './JourneyCarousel.module.css';

const journeyImages = [
  {
    id: 1,
    src: '/intership/teaching.png', 
    alt: 'Students learning in a classroom',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/1200x600?text=Laptop+Studies',
    alt: 'Laptop and notebook on a desk',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/1200x600?text=Group+Discussion',
    alt: 'Group of students discussing',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/1200x600?text=Coding+Session',
    alt: 'Student coding on a computer',
  },
];

const JourneyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? journeyImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === journeyImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.journeySection}>
      <div className="container py-5">
        <h2 className={styles.mainTitle}>
          Experience the Journey Through <br /> Moments That Matter
        </h2>
        <p className={styles.subtitle}>
          From classroom sessions to career milestones—get a visual glimpse of student achievements, <br />
          training highlights, placement drives, and more.
        </p>

        <div className={styles.carouselContainerOuter}>
          <div className={styles.carouselContainerInner}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false} // Hide default indicators
              controls={false}   // Hide default navigation controls
              interval={null}    // Disable auto-advancing
              className={styles.customCarousel}
            >
              {journeyImages.map((image) => (
                <Carousel.Item key={image.id} className={styles.carouselItemCustom}>
                  <img
                    className={`d-block w-100 ${styles.carouselImage} ${styles.carouselImageFixedSize}`}
                    src={image.src}
                    alt={image.alt}
                  />
                  {/* <Carousel.Caption>
                    <h3>{image.alt}</h3>
                  </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Custom Navigation Buttons */}
          <button
            className={`${styles.customPrevBtn} ${styles.carouselNavBtn}`}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            &#x2190; {/* Left Arrow */}
          </button>
          <button
            className={`${styles.customNextBtn} ${styles.carouselNavBtn}`}
            onClick={handleNext}
            aria-label="Next image"
          >
            &#x2192; {/* Right Arrow */}
          </button>
        </div>

        {/* Custom Indicators */}
        <div className={styles.customIndicators}>
          {journeyImages.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicatorDot} ${index === idx ? styles.active : ''}`}
              onClick={() => setIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyCarousel;