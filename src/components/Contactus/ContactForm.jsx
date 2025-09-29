"use client";
import './Contact.css'

export default function ContactForm() {
  return (
    <section className="contact-form-wrapper">
      <div className="contact-section container text-center my-0">
        <h3 className="custom-heading-black">Leave our team a message.</h3>
        <p className="custom-paragraph-green">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non enim<br />
lacus. Nullam congue blandit quam, sit amet scelerisque turpis.
        </p>
      </div>

    <div className="contact-wrapper mt-0">
      <form className="row g-3">
        {/* First Row */}
        <div className="col-md-4">
          <label className="form-label text-white">First Name</label>
          <input type="text" className="form-control" placeholder="Enter First Name" />
        </div>
        <div className="col-md-4">
          <label className="form-label text-white">Last Name</label>
          <input type="text" className="form-control" placeholder="Enter Last Name" />
        </div>
        <div className="col-md-4">
          <label className="form-label text-white">Email</label>
          <input type="email" className="form-control" placeholder="Enter your Email" />
        </div>

        {/* Second Row */}
        <div className="col-md-4">
          <label className="form-label text-white">Phone</label>
          <input type="text" className="form-control" placeholder="Enter Phone Number" />
        </div>
        <div className="col-md-4">
          <label className="form-label text-white">Inquiry Type</label>
          <select className="form-select">
            <option>Select Inquiry Type</option>
            <option>General</option>
            <option>Support</option>
            <option>Feedback</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label text-white">How Did You Hear About Us?</label>
          <select className="form-select">
            <option>Select</option>
            <option>Google</option>
            <option>Friend</option>
            <option>Social Media</option>
          </select>
        </div>

        {/* Message */}
        <div className="col-12">
          <label className="form-label text-white">Message</label>
          <textarea className="form-control" rows="4" placeholder="Enter your Message here.." />
        </div>

        {/* Checkbox + Button */}
        <div className="col-12 d-flex justify-content-between align-items-center mt-3">
          <div className="form-check">
            <input className="form-check-input custom-check" type="checkbox" id="agree" />
            <label className="form-check-label text-white" htmlFor="agree">
              I agree with <a href="#" className="custom-link">Terms of Use</a> and <a href="#" className="custom-link">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="btn btn-connect">
            Send your Message
          </button>
        </div>
      </form>
    </div>
    </section>
  );
}
