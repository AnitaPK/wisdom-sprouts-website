"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkshopsShowcase.css";

export default function WorkshopsShowcase() {
  const leftTop = [
    { src: "/gallery/One.png", alt: "Brainstorm board" },
    { src: "/gallery/Two.png", alt: "Team workshop" },
  ];
  const leftBottom = { src: "/gallery/Five.png", alt: "Group activity" };
  const rightHero = { src: "/gallery/Three.png", alt: "Guest lecture" };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="workshopHeading">Learning Beyond the Curriculum</h2>
          <p className="workshopSubtext">
            Workshops, guest lectures, and hackathons that expose our students
            to real industry challenges and experts.
          </p>
        </div>

        <div className="row g-4 g-lg-0 align-items-stretch">
          {/* Left mosaic */}
          <div className="col-12 col-lg-5">
            <div className="row g-4">
              {leftTop.map((img) => (
                <div key={img.src} className="col-6">
                  <div className="ratio ratio-4x3 rounded overflow-hidden position-relative">
                    <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              ))}
              <div className="col-12">
                <div className="ratio ratio-4x3 rounded overflow-hidden position-relative">
                  <Image src={leftBottom.src} alt={leftBottom.alt} fill style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right hero */}
          <div className="col-12 col-lg-7 p-0">
            <div className="w-100 rounded overflow-hidden position-relative" style={{ aspectRatio: "16 / 9" }}>
              <Image src={rightHero.src} alt={rightHero.alt} fill style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <div className="ws-overlay d-flex align-items-center justify-content-center">
                <span className="overlay-chip">View more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


