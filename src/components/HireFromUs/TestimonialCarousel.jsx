'use client';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; 
import styles from './TestimonialCarousel.module.css';

// Using a real YouTube video ID and URL for the first testimonial
const YOUTUBE_VIDEO_ID = 'DzbFBgGUGdU'; 

const testimonialData = [
  {
    id: 1,
    videoThumbnail: `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/mqdefault.jpg`, // Actual YouTube thumbnail URL
    videoId: YOUTUBE_VIDEO_ID, // Video ID used for embedding
    logo: 'https://via.placeholder.com/30x30?text=Logo', 
    companyName: 'Feedspace',
    quote: `"The mentorship and real-world projects were invaluable. This video is great advice, just like the training we received."`,
    authorImage: 'https://via.placeholder.com/50x50?text=Sameer', 
    authorName: 'Sameer Rai',
    authorTitle: 'Product Head',
  },
  {
    id: 2,
    videoThumbnail: 'https://via.placeholder.com/400x300?text=Video+Thumbnail+2', // Placeholder for others
    videoId: null, 
    logo: 'https://via.placeholder.com/30x30?text=Logo2',
    companyName: 'Tech Innovations',
    quote: `"This program completely transformed my career path. The mentorship and real-world projects were invaluable. Highly recommend to anyone looking to enter the tech industry."`,
    authorImage: 'https://via.placeholder.com/50x50?text=Jane',
    authorName: 'Jane Doe',
    authorTitle: 'Software Engineer',
  },
  // ... rest of the testimonials remain the same or use placeholders
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  // State to track if the current video is playing (only applies to the active slide)
  const [isPlaying, setIsPlaying] = useState(false); 

  const handlePrev = () => {
    // Reset play state when changing slides
    setIsPlaying(false); 
    setIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    // Reset play state when changing slides
    setIsPlaying(false);
    setIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePlayClick = () => {
    // Only allow play if a video ID is available for the current testimonial
    if (testimonialData[index].videoId) {
      setIsPlaying(true);
    }
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
            indicators={false}
            controls={false}
            interval={null}
          >
            {testimonialData.map((testimonial, i) => (
              <Carousel.Item key={testimonial.id}>
                <div className={`row ${styles.carouselContentRow}`}>
                  {/* Left Column: Video/Image */}
                  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center align-items-center">
                    <div className={styles.videoContainer}>
                      
                      {/* Check if this is the active slide AND if play is initiated */}
                      {isPlaying && i === index && testimonial.videoId ? (
                        <iframe
                          className={styles.videoPlayer}
                          // Ensure the URL is correct, including autoplay and audio control (mute=0)
                          src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=0&rel=0`}
                          frameBorder="0"
                          // IMPORTANT: Use the full set of necessary allow attributes
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          allowFullScreen
                          // IMPORTANT: Add a descriptive title for accessibility
                          title="YouTube Video Testimonial" 
                        ></iframe>
                      ) : (
                        // Thumbnail mode (Default state or if no videoId)
                        <div onClick={handlePlayClick} className={styles.videoPlaceholder}>
                           {/* Using background image to ensure content is fully clickable */}
                          <img
                            src={testimonial.videoThumbnail}
                            alt="Testimonial Video Thumbnail"
                            className={`img-fluid ${styles.videoThumbnail}`}
                          />
                          <div className={styles.playButtonOverlay}>
                            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Content (Unchanged) */}
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

          {/* Custom Navigation Buttons */}
          <button
            className={`${styles.customPrevBtn} ${styles.carouselNavBtn}`}
            onClick={handlePrev}
            aria-label="Previous Testimonial"
          >
            &#x2039;
          </button>
          <button
            className={`${styles.customNextBtn} ${styles.carouselNavBtn}`}
            onClick={handleNext}
            aria-label="Next Testimonial"
          >
            &#x203A;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;