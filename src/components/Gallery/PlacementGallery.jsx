"use client";
import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlacementGallery.css";

export default function PlacementGallery() {
  const [activeTab, setActiveTab] = useState("placement");
  const tabImages = {
    training: {
      large: "/gallery/One.png",
      topRight: "/gallery/Two.png",
      bottomRight: "/gallery/Three.png",
    },
    placement: {
      large: "/gallery/placement/tabOne/certificateImage1.png",
      topRight: "/gallery/placement/tabOne/trainer.png",
      bottomRight: "/gallery/placement/tabOne/trophy.png",
    },
    workshops: {
      large: "/gallery/Six.png",
      topRight: "/gallery/Seven.png",
      bottomRight: "/gallery/Eight.png",
    },
    culture: {
      large: "/gallery/Five.png",
      topRight: "/gallery/Four.png",
      bottomRight: "/gallery/One.png",
    },
  };
  const tabText = {
    training: {
      heading: "Learning That Builds Strong Foundations",
      description:
        "Hands-on sessions and guided practice to master core concepts before stepping into real-world challenges.",
    },
    placement: {
      heading: "From Training to Triumph",
      description:
        "Celebrating every student’s commitment, growth, and achievement with certificate ceremonies that mark a new beginning.",
    },
    workshops: {
      heading: "Workshops That Spark Curiosity",
      description:
        "Focused bootcamps and expert sessions designed to upskill quickly and stay current with industry trends.",
    },
    culture: {
      heading: "A Culture That Inspires",
      description:
        "Collaborative events, celebrations, and everyday moments that build community and foster growth.",
    },
  };

  return (
    <section className="py-5 mx-md-5">
      <div className="container">
        {/* ===== Tabs ===== */}
        <ul className="placement-tabs p-0">
          {[
            { key: "training", label: "Training" },
            { key: "placement", label: "Placement" },
            { key: "workshops", label: "Workshops" },
            { key: "culture", label: "Culture" },
          ].map((tab) => (
            <li key={tab.key} className={activeTab === tab.key ? "active" : ""}>
              <button
                type="button"
                className={`placement-tab`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ===== Heading ===== */}
        <div className="text-center my-5 ">
          <h2 className="galleryHeading  mx-2">{tabText[activeTab]?.heading}</h2>
          <p className="gallerySubtext mx-2">{tabText[activeTab]?.description}</p>
        </div>

          <div className="cotainer mx-auto">
        {/* ===== Image Grid ===== */}
        <div className="gallery-grid">
          {/* Left large image */}
          <div className="gallery-item large">
            <Image
              src={tabImages[activeTab]?.large}
              alt="Graduation ceremony"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              className="img-fluid rounded"
              priority
            />
          </div>

          {/* Top right image */}
          <div className="gallery-item small">
            <Image
              src={tabImages[activeTab]?.topRight}
              alt="Team presentation"
              fill
              sizes="(max-width: 768px) 100vw, 34vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              className="img-fluid rounded"
            />
          </div>

          {/* Bottom right image with overlay */}
          <div className="gallery-item small position-relative">
            <Image
              src={tabImages[activeTab]?.bottomRight}
              alt="Awards"
              fill
              sizes="(max-width: 768px) 100vw, 34vw"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              className="img-fluid rounded"
            />
            <div className="overlay">
              <span className="overlay-chip">View more</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
