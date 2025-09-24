import React from 'react'
import './Contact.css'


const ContactMap = () => {
  const mapStyle = {
    width: "100%",
    height: "500px",
    border: "0",
    borderRadius: "8px"
  };
  return (
    <section className="">
      <div className="contact-section container text-center">
        <h3 className="custom-heading-green">We’re Closer Than You Think</h3>
        <p className="custom-paragraph-green">
          Find the nearest Wisdom Sprouts location and drop by to say hello — we’re happy to meet you in person.
        </p>
      </div>
       <div className="container w-75 mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6240991074305!2d73.75057237496478!3d18.590978282516293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb5315379ab%3A0x7745e38574812a65!2sWisdom%20Sprouts%20IT%20Training%20Hub!5e0!3m2!1sen!2sin!4v1758611271655!5m2!1sen!2sin"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Google Map"
      ></iframe>
      {/* <p style={{ textAlign: 'right', marginTop: '10px' }}>
        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6240991074305!2d73.75057237496478!3d18.590978282516293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb5315379ab%3A0x7745e38574812a65!2sWisdom%20Sprouts%20IT%20Training%20Hub!5e0!3m2!1sen!2sin!4v1758611271655!5m2!1sen!2sin" target="_blank" rel="noopener noreferrer">
          View larger map
        </a>
      </p> */}
    </div>
      </section>
  )
}

export default ContactMap
