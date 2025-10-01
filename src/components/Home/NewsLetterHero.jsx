"use client";
import React from "react";
import "./NewsLetterHero.css";
import Image from "next/image";

export default function NewsletterHero() {
  return (
    <section className="newsletter-hero">
      <div className="container">
        <div className="card-wrap p-4 p-md-5">
          <div className="row align-items-center gx-4">
            {/* Illustration */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="illustration">
                <Image
                  src="/home/newsLetterHeroImage.png"
                  alt="Illustration of person with tablet"
                  width={600}
                  height={450}
                  className="hero-img"
                  sizes="(max-width: 767px) 300px, 600px"
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-12 col-md-6">
              <h2 className="title ms-0">Stay tuned!</h2>
              <p className="desc">
                Get the latest articles and updates that you need to know,
                you'll even get special recommendations weekly.
              </p>

              <form
                className="subscribe-form mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="subscribe-input">
                  <input
                    type="email"
                    className="form-control email-input"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    required
                  />
                  <button className="btn subscribe-btn" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
