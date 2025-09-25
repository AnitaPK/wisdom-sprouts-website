import React from 'react'
import InternJourney from './InternJourney'
import Stats from './Stats'


const Journ = () => {
  return (
    <section>
      <div className="container-fluid bg-white p-4 mt-4">
        <div className="container w-75 mx-auto mt-5 text-center ">
        <h2 className="fw-bold custom-text-color-green">Where Our Interns End Up</h2>
        <p className=" custom-text-color-green-small">
          From non-CS grads to top IT companies — our internship opens real doors.
        </p>
      </div>
      <InternJourney />
      <Stats />
      </div>
    </section>
  )
}

export default Journ
