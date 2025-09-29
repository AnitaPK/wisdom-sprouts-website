import React from 'react'
import './InternshipPage.css'

const Eligibility = () => {
     const categories = ["BE/B.Tech", "BCA", "Career switchers", "IT aspirants"];
  return (
    <>
          <div className="container w-75 mx-auto mt-5 text-center ">
        <h2 className="fw-bold custom-text-color-green">
          Ready to Launch Your IT Career?
          </h2>
               <p className="mt-3 custom-text-color-green-small">
                Open to freshers, graduates, and career changers from tech  and non-tech backgrounds.
            </p>
      </div>
       <div className="container w-75">

        <div className="row">
      {categories.map((category, index) => (
        <div key={index} className="col">
        <button  className="custom-eligibily-button">
          {category}
        </button>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Eligibility
