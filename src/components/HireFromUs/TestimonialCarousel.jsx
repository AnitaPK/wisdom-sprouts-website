'use client';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Uses react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import styles from './TestimonialCarousel.module.css'; // Custom CSS module

const testimonialData = [
  {
    id: 1,
    videoThumbnail: 'https://via.placeholder.com/400x300?text=Video+Thumbnail+1', // Replace with your video thumbnail
    logo: 'https://via.placeholder.com/30x30?text=Logo', // Replace with company logo
    companyName: 'Feedspace',
    quote: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud"`,
    authorImage: 'https://via.placeholder.com/50x50?text=Sameer', // Replace with author image
    authorName: 'Sameer Rai',
    authorTitle: 'Product Head',
  },
  {
    id: 2,
    videoThumbnail: 'https://via.placeholder.com/400x300?text=Video+Thumbnail+2',
    logo: 'https://via.placeholder.com/30x30?text=Logo2',
    companyName: 'Tech Innovations',
    quote: `"This program completely transformed my career path. The mentorship and real-world projects were invaluable. Highly recommend to anyone looking to enter the tech industry."`,
    authorImage: 'https://via.placeholder.com/50x50?text=Jane',
    authorName: 'Jane Doe',
    authorTitle: 'Software Engineer',
  },
  {
    id: 3,
    videoThumbnail: 'https://via.placeholder.com/400x300?text=Video+Thumbnail+3',
    logo: 'https://via.placeholder.com/30x30?text=Logo3',
    companyName: 'Global Solutions',
    quote: `"Exceptional training and placement support. I secured my dream job within months after completing their course. The instructors are truly knowledgeable."`,
    authorImage: 'https://via.placeholder.com/50x50?text=John',
    authorName: 'John Smith',
    authorTitle: 'Data Analyst',
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className={styles.testimonialSection}>
      <div className="container py-5">
        <h2 className={styles.mainTitle}>
          Real Transformations. Career Success <br /> That Speaks for Itself.
        </h2>

        <div className={styles.carouselWrapper}>
          <Carousel
            activeIndex={index}
            indicators={false} // Hide default indicators
            controls={false}   // Hide default navigation controls
            interval={null}    // Disable auto-advancing
          >
            {testimonialData.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className={`row ${styles.carouselContentRow}`}>
                  {/* Left Column: Video/Image */}
                  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
                    <div className={styles.videoContainer}>
                      <img
                        src={testimonial.videoThumbnail}
                        alt="Testimonial Video Thumbnail"
                        className={`img-fluid ${styles.videoThumbnail}`}
                      />
                      <div className={styles.playButtonOverlay}>
                        {/* Simple SVG Play Icon */}
                        <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className="col-lg-6 col-md-12 d-flex align-items-center">
                    <div className={styles.testimonialContent}>
                      <div className={styles.companyInfo}>
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.companyName} Logo`}
                          className={styles.companyLogo}
                        />
                        <span className={styles.companyName}>
                          {testimonial.companyName}
                        </span>
                      </div>
                      <p className={styles.quote}>{testimonial.quote}</p>
                      <div className={styles.authorInfo}>
                        <img
                          src={testimonial.authorImage}
                          alt={testimonial.authorName}
                          className={styles.authorImage}
                        />
                        <div>
                          <p className={styles.authorName}>
                            {testimonial.authorName}
                          </p>
                          <p className={styles.authorTitle}>
                            {testimonial.authorTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Custom Navigation Buttons (Prev/Next) */}
          <button
            className={`${styles.customPrevBtn} ${styles.carouselNavBtn}`}
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            &#x2039; {/* Left Chevron */}
          </button>
          <button
            className={`${styles.customNextBtn} ${styles.carouselNavBtn}`}
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            &#x203A; {/* Right Chevron */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;