import React from "react";
import "./Contact.css";
import Image from "next/image";

const ContactCards = () => {
  const cardData = [
    {
      title: "Message Us",
      text: "helpdesk@wisdomsprouts.in",
      icon: "/contactus/envelope.png",
      img: "/contactus/EnvolapCharacters.png",
    },
    {
      title: "Call Us",
      text: "+91-7770043825",
      icon: "/contactus/telephone.png",
      img: "/contactus/TelephoneCharacter.png",
    },
    {
      title: "Address",
      text: "406, White Square, Wakad-\nHinjawadi Road Wakad\nPune, Maharashtra 411045",
      icon: "/contactus/address.png",
      img: "/contactus/addressCharacter.png",
    },
    {
      title: "Social Media",
      text: "Connect with us",
      icon: "/contactus/SocialMedia.png",
      img: "/contactus/SocialMediaCharacter.png",
      socials: [
        {
          link: "https://in.linkedin.com/company/wisdom-sprouts-training-and-consulting-solutions",
          icon: "/social-Icons/LinkdIn.png",
        },
        { link: "https://www.facebook.com/wisdomsprouts/", icon: "/social-Icons/Facebook.png" },
        { link: "#", icon: "/social-Icons/Twitter.png" },
        {
          link: "https://www.youtube.com/@wisdomsprouts1276",
          icon: "/social-Icons/Youtube.png",
        },
        {
          link: "https://www.instagram.com/wisdomsprouts/?hl=en",
          icon: "/social-Icons/Instagram.png",
        },
      ],
    },
  ];
  return (
    <section className="my-2">
      <div className="contact-section container text-center">
        <h3 className="custom-heading-green">Contact Our Team</h3>
        <p className="custom-paragraph-green">
          We’re here to answer your queries and guide your career journey.{" "}
          <br />
          Have a question? Let’s connect and grow together.
        </p>
      </div>
      <div className="container text-center pb-5">
        <div className="row g-4 ">
          {cardData.map((card, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-3">
              <div className="contact-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center mb-3 justify-content-center pt-2">
                    <Image
                      src={card.icon}
                      alt={card.icon}
                      width={25}
                      height={25}
                    />
                    <h6 className="m-0 contact-card-title ms-2 ">
                      {card.title}
                    </h6>
                  </div>

                  <p
                    className="mb-0 contact-card-text"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {card.text}
                  </p>
                </div>

                {card.socials && (
                  <div className="d-flex justify-content-center gap-3 my-4">
                    {card.socials.map((s, i) => (
                      <a
                        key={i}
                        href={s.link}
                        aria-label={s.icon}
                        rel="noopener noreferrer"
                        // className="social-circle"
                      >
                        <span className="custom-icon-social-green">
                          <Image
                            src={s.icon}
                            width={13}
                            height={13}
                            alt={s.icon}
                          />
                        </span>
                      </a>
                    ))}
                  </div>
                )}
                {card.img && (
                  <div className="mt-3 card-illustration-wrapper">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={220}
                      height={200}
                      className="card-illustration"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
