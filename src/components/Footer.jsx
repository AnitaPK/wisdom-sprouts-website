"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn ,
  FaTwitter ,
  FaInstagram,
  FaYoutube,
  FaFacebookF
} from "react-icons/fa";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-4 mt-2 border-top custom-footer">
      <Container>
        <Row className="text-center text-md-start">
          {/* Left Column */}
          <Col md={4} className="mb-4">
            <Image 
              src='/logo.png'
              alt='wisdom sprouts'
              width={200}
              height={111}
            />
            <p className="custom-info-ws mt-4">
              Wisdom Sprouts IT Training Hub is a leading IT training provider
              institute in Pune. Wisdom Sprouts is owned by ScaleFull
              Technologies LLP.
            </p>
          </Col>

          {/* Check Out */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold">Check out</h6>
            <ul className="list-unstyled">
              <li>College Trainings | Internships | Workshops</li>
              <li>Our Placements</li>
              <li>Contact us</li>
            </ul>
          </Col>

          {/* Get in Touch */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold ">Get In Touch</h6>
            <p className="custom-get-in-touch"><FaMapMarkerAlt className="me-2 custom-icon-color" />406, White Square, Wakad-Hinjawadi Road, Pune, Maharashtra 411045</p>
            <p className="custom-get-in-touch"><FaEnvelope className="me-2 custom-icon-color" />helpdesk@wisdomsprouts.in</p>
            <p className="custom-get-in-touch"><FaPhoneAlt className="me-2 custom-icon-color" />+91-7770043825</p>
            <p className="custom-get-in-touch"><FaPhoneAlt className="me-2 custom-icon-color" />+91-7770023825</p>

          </Col>

          {/* Social Media */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold">Follow us on</h6>
            <div className="row g-3 w-25">
              <div className="col">
              <a href="https://in.linkedin.com/company/wisdom-sprouts-training-and-consulting-solutions">
              <span className="custom-icon-social">
                <Image src="/social-Icons/LinkdIn.png" width={13} height={13} alt='linkedIn image' /></span>
              </a>
              <a href="https://www.instagram.com/wisdomsprouts/?hl=en">
                <span className="custom-icon-social"><Image src="/social-Icons/Instagram.png" width={13} height={13} alt='Instagram image' /></span>
              </a>
              </div>
              <div className="col">

              <a href="https://www.facebook.com/wisdomsprouts/">
                <span className="custom-icon-social"><Image src="/social-Icons/Facebook.png" width={13} height={13} alt='Facebook image' /></span>

              </a>
              <a href="https://www.youtube.com/@wisdomsprouts1276">
                <span className="custom-icon-social"><Image src="/social-Icons/Youtube.png" width={13} height={13} alt='youtube image' /></span>
              </a>
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        {/* Bottom Row */}
        <Row>
          <Col md={6} className="">
            <p className="mb-0">
              Copyright © 2025 Wisdom Sprouts IT Training Hub. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">Hinjawadi | Akurdi | Sinhagad Road | Tilak Road</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
