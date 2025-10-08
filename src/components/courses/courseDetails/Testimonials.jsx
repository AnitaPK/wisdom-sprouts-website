"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  { id: 1, name: "Mrunmayi Shinde", img: "/courses/testimonial-mrunmai.png", text: "This course exceeded my expectations—clear, practical, and very engaging! Perfect for beginners—step-by-step guidance and real-world relevance." },
  { id: 2, name: "Pawan Patil",    img: "/testimonials/pawan.jpg",    text: "The instructors made complex topics so easy to understand. One of the best learning experiences I’ve had online." },
  { id: 3, name: "Ankit Sharma",   img: "/testimonials/ankit.jpg",    text: "Hands-on examples helped me apply what I learned right away, I actually landed a freelance job after completing this course!" },
  { id: 4, name: "Sneha Kapoor",   img: "/testimonials/sneha.jpg",    text: "Loved the real-world projects, I could directly apply concepts to my job!" },
  { id: 5, name: "Rohit Mehra",    img: "/testimonials/rohit.jpg",    text: "Great structure, engaging instructors, and practical learning experience." },
];

export default function Testimonials() {
  const total = testimonials.length;
  const [index, setIndex] = useState(1);      // active testimonial index (0..total-1)
  const [direction, setDirection] = useState(1); // 1 => forward (right->left slide), -1 => backward

  const handleDotClick = (newIdx) => {
    if (newIdx === index) return;
    setDirection(newIdx > index ? 1 : -1);
    setIndex(newIdx);
  };

  // helpers for desktop slots
  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;
  const slots = [prevIndex, index, nextIndex]; // left, center, right

  // framer motion variants - use custom direction to control enter/exit x
  const slotInitial = (dir) => ({ opacity: 0, x: dir > 0 ? 120 : -120 });
  const slotAnimate = (slotPos) => ({ opacity: 1, x: 0, y: slotPos === 1 ? -22 : 0 }); // center lifted by y
  const slotExit = (dir) => ({ opacity: 0, x: dir > 0 ? -120 : 120 });

  // mobile variants (single card)
  const mobileInitial = (dir) => ({ opacity: 0, x: dir > 0 ? 150 : -150 });
  const mobileAnimate = { opacity: 1, x: 0 };
  const mobileExit = (dir) => ({ opacity: 0, x: dir > 0 ? -150 : 150 });

  return (
    <section class={`container-fluid ${styles.testmonialContainer } py-5`}>
    <div className="container text-center my-5">
      <h2 className={`${styles.title} mb-5`}>What Our Learners Say About Us</h2>

      {/* ---------- Desktop: 3 fixed slots ---------- */}
      <div className="row d-none d-md-flex justify-content-center align-items-start">
        {slots.map((tIdx, slotPos) => {
          const t = testimonials[tIdx];
          return (
            <div className="col-md-4" key={`slot-${slotPos}`}>
              {/* keep column fixed; animate content inside */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={t.id}
                  custom={direction}
                  initial={slotInitial(direction)}
                  animate={slotAnimate(slotPos)}
                  exit={slotExit(direction)}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="w-100"
                >
                  <div className={`${styles.cardBox} p-3 mb-1 ${slotPos === 1 ? styles.raised : ""}`}>
                    <span className={styles.quote}>
                      <img src="/courses/quote.png" alt="quote" />
                    </span>
                    <h5 className={`${styles.name} py-4 mb-5`}>{t.name}</h5>
                    <div className={`${styles.textBox} m-3 px-1 pt-5`}>

                    <Image
                      src={t.img}
                      alt={t.name}
                      width={72}
                      height={72}
                      className={`${styles.avatar} rounded-circle`}
                    />
                      <p className={styles.text}>{t.text}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ---------- Mobile: single card with directional slide ---------- */}
      <div className="d-md-none">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={mobileInitial(direction)}
            animate={mobileAnimate}
            exit={mobileExit(direction)}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            <div className={`${styles.cardBox} p-4 mb-4 ${styles.raised}`}>
            <span className={styles.quote}>
                      <img src="/courses/quote.png" alt="quote" />
                    </span>
              <h5 className={`${styles.name} py-4`}>{testimonials[index].name}</h5>
              <div className={styles.textBox}>
                <Image
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  width={72}
                  height={72}
                  className={`${styles.avatar} rounded-circle`}
                />
                <p className={styles.text}>{testimonials[index].text}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- Dots (always visible) ---------- */}
      <div className="d-flex justify-content-center mt-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`${styles.dotBtn} ${i === index ? styles.activeDotBtn : ""}`}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
