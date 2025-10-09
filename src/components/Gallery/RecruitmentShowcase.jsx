"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecruitmentShowcase.css";

export default function RecruitmentShowcase() {
  const cards = [
    { src: "/gallery/One.png", alt: "Panel interview" },
    { src: "/gallery/Two.png", alt: "Team discussion" },
    { src: "/gallery/Six.png", alt: "Networking lobby" },
    { src: "/gallery/Eight.png", alt: "Handshake" },
  ];

  return (
    <section className=" py-5">
      <div className="container">
        <div className="text-center my-4 mx-0 mx-md-3">
          <h2 className="recruitHeading">Where Talent Meets Opportunity</h2>
          <p className="recruitSubtext">
            Snapshots of top companies hiring from Wisdom Sprouts through campus drives,
            interviews, and recruiter panels.
          </p>
        </div>

        <div className="row g-4">
          {cards.map((card, idx) => (
            <div key={card.src} className="col-12 col-sm-6 col-lg-3">
              <div className="ratio ratio-4x3 rounded overflow-hidden position-relative">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
                {idx === cards.length - 1 && (
                  <div className="recruit-overlay">
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


