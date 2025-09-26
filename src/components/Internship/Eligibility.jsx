import React from 'react'
import './Internship.css'

const Eligibility = () => {
     const categories = ["BE/B.Tech", "BCA", "Career switchers", "IT aspirants"];
  return (
    <>
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
