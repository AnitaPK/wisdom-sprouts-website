"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CultureShowcase.css";

export default function CultureShowcase() {
  const cards = [
    { src: "/gallery/Five.png", alt: "Birthday celebration" },
    { src: "/gallery/Seven.png", alt: "Outdoor team activity" },
    { src: "/gallery/Eight.png", alt: "Creative workspace" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center my-4">
          <h2 className="cultureHeading">The People. The Culture. The Energy.</h2>
          <p className="cultureSubtext">
            From festive celebrations to day-to-day fun, here's a glimpse of the strong,
            inclusive culture that powers Wisdom Sprouts.
          </p>
        </div>

        <div className="row g-4">
          {cards.map((card, idx) => (
            <div key={card.src} className="col-12 col-md-4">
              <div className="ratio ratio-4x3 rounded overflow-hidden position-relative">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
                {idx === cards.length - 1 && (
                  <div className="culture-overlay">
                    <span className="overlay-chip">View more</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


