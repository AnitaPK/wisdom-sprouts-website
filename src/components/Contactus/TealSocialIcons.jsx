"use client";

import Image from "next/image";
import styles from "@/styles/socialIcons.css";

export default function TealSocialIcons() {
  const icons = [
    { src: "/social-Icons/LinkedIn.png", alt: "LinkedIn" },
    { src: "/icons/facebook.png", alt: "Facebook" },
    { src: "/icons/twitter.png", alt: "Twitter" },
    { src: "/icons/youtube.png", alt: "YouTube" },
    { src: "/icons/instagram.png", alt: "Instagram" },
  ];

  return (
    <div className={`d-flex ${styles.row} ${styles.center}`}>
      {icons.map((ic, idx) => (
        <div key={idx} className={`${styles.circle} ${styles.teal}`}>
          <div className={styles.imgWrap}>
            <Image
              src={ic.src}
              alt={ic.alt}
              width={28}
              height={28}
              className={styles.iconImg}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
