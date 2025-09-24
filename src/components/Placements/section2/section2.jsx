import React,{useState} from 'react'
import './section2.css'

const section2 = ({alumni}) => {
    const [visibleCount, setVisibleCount] = useState(8);
       const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8); 
  };
  
  return (
    <section className="container-fluid text-center py-5 custom-section2">
      <div className="container w-50">
        <h2 className="fw-bold custom-text-color-green">
          Real Journeys. Lasting Impact.
        </h2>
        <p className="mt-3 custom-text-color-green-small">
          See how our alumni transformed their careers—from first line of code to first big offer.        </p>
      </div>
       <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {alumni.slice(0, visibleCount).map((person) => (
          <div className="col-md-3 col-sm-6 d-flex justify-content-center" key={person.id} style={{ marginBottom: "60px" }}>
            <div className="card shadow-lg border-0 text-center p-3 h-100 custom-card">
              <img
                src={person.image}
                alt={person.name}
                className="rounded mx-auto custom-image"
              />
              <div className="card-body">
                <h6 className="fw-bold">{person.name.toUpperCase()}</h6>
                <p className="text-muted mb-1">{person.designation}</p>
                <div className="d-flex justify-content-center align-items-center mt-2">
                  <img
                    src={person.companyLogo}
                    alt={person.company}
                    style={{ width: "90px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
</div>
      
      </div>
            {/* View More Button */}
      {visibleCount < alumni.length && (
      <div className="text-center mt-1">
          <button
            className="btn custom-orange-button px-4 py-2 rounded-pill"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      )}

    </section>
  )
}


export default section2
