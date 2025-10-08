"use client";
import { useState } from "react";
import Image from "next/image";
import "./FAQ.css";

const DEFAULT_ITEMS = [
  {
    id: 1,
    q: "What is Mobbin?",
    a: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more. Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster.",
  },
  { id: 2, q: "How often do you update the library?", a: "We add and refresh patterns every week to keep the library current." },
  { id: 3, q: "Can I get a free trial?", a: "Yes, we offer a limited free plan so you can explore before upgrading." },
  { id: 4, q: "Do you have a monthly plan?", a: "We provide both monthly and annual plans for flexibility." },
  { id: 5, q: "Discounts for students and educators?", a: "Yes, eligible students and educators can apply for special pricing." },
  { id: 6, q: "What forms of payment do you accept?", a: "We accept major credit/debit cards and popular wallets." },
  { id: 7, q: "Can I cancel my subscription?", a: "You can cancel anytime from your account billing settings." },
];

export default function FAQ({ items = DEFAULT_ITEMS }) {
  const [active, setActive] = useState(items[0]?.id ?? null);

  return (
    <section className="faqSection">
      <div className="container">
        <div className="faqGrid">
          {/* Left column: title + subhead + optional artwork */}
          <div className="faqLeft">
            <h2 className="faqHeading">Frequently Asked Questions</h2>
            <h3 className="faqSubheading mb-5">Mern Full Stack Web Developer Course</h3>

            <div className="faqArtWrap d-none d-md-block">
              <Image src="/courses/pana.png" width={369} height={229} alt="FAQ" className="faqArt" />
            </div>
          </div>

          {/* Right column: accordion */}
          <div className="faqRight">
            <ul className="faqList accordion" id="faqAccordion">
              {items.map((it) => {
                const open = active === it.id;
                return (
                  <li key={it.id} className={`faqItem accordion-item border-0 ${open ? "open" : ""}`}>
                    <button
                      type="button"
                      className="faqHeader accordion-button d-flex align-items-center justify-content-between gap-3 px-3 py-3"
                      aria-expanded={open}
                      onClick={() => setActive(open ? null : it.id)}
                    >
                      <span className="faqQuestion">{it.q}</span>
                      <span className={`faqIcon ${open ? "close" : "plus"}`} aria-hidden />
                    </button>

                    <div className="faqBody accordion-collapse" style={{ display: open ? "block" : "none" }}>
                      <p className="mb-0">{it.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


