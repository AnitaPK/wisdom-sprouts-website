import React from 'react'
import './CertificateSection.css'

export default function CertificateSection() {
  return (
    <section className="container my-5">
      <div className="certificate-card shadow-sm px-2 px-md-4 py-3 py-md-5">
        <div className="row align-items-center g-2">
          <div className="col-12 col-md-6 text-center">
            <img src="/courses/certificate.png" alt="Certificate mockup" className="img-fluid certificate-illustration" />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="certificate-card-title my-3 text-center mx-auto">Professionally Aligned Syllabus</h2>
            <p className="certificate-card-text mb-1 mb-md-4 text-center py-2">
              A comprehensive curriculum crafted by industry experts to help you secure a
              position at your dream agency
            </p>
            <hr className="certificate-divider d-none d-md-block" />
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#contact" className="btn certificate-orange-button mx-auto">Request a call back</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


