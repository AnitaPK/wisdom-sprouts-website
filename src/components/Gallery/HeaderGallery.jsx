"use client";
import React from 'react';
import './HeaderGallery.css';
import Image from 'next/image';

const HeaderGallary = () => {
 
  return (
    <section className="conatiner pb-5 pt-0 mt-0">
    <div className="ImageContainer">
      <div className="contentDiv">
        <h2><span className='hightlightColor'>A glimpse </span>into our vibrant learning journey.</h2>
        <p>
          Explore the events, memories, and milestones that make Wisdom Sprouts
          more than just a training center.
        </p>
      </div>

      <div className="first ">
        <Image
          src="/gallery/One.png"
          alt="Image 1"
          fill
          className="gallery-img"
        />
      </div>

      <div className="second">
        <Image
          src="/gallery/Two.png"
          alt="Image 2"
          fill
          className="gallery-img"
        />
      </div>

      <div className="third customBGColor">
        <div className="imageWrap">
          <Image
            src="/gallery/Three.png"
            alt="Image 3"
            fill
            className="gallery-img"
          />
        </div>
      </div>

      <div className="fourth customBGColor">
        <div className="imageWrap">
          <Image
            src="/gallery/Four.png"
            alt="Image 4"
            fill
            className="gallery-img"
          />
        </div>
      </div>

      <div className="fifth ">
        <Image
          src="/gallery/Five.png"
          alt="Image 5"
          fill
          className="gallery-img"
        />
      </div>

      <div className="sixth">
        <Image
          src="/gallery/Six.png"
          alt="Image 6"
          fill
          className="gallery-img"
        />
      </div>

      <div className="seventh">
        <Image
          src="/gallery/Seven.png"
          alt="Image 7"
          fill
          className="gallery-img"
        />
      </div>

      <div className="eight customBGColor">
        <div className="imageWrap">
          <Image
            src="/gallery/Eight.png"
            alt="Image 8"
            fill
            className="gallery-img"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeaderGallary;


