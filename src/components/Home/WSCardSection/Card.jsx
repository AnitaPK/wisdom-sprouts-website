"use client";   
import styles from './Card.css';
import Image from "next/image";

export default function Card({ title, description, image }) {
  return (
    <>
   
<div className={`card mb-3 ${styles.customCard}`} >
  <div className="row g-0 flex-column flex-md-row align-items-center">
    <div className="col-md-8 order-2 order-md-1 text-center text-md-start p-2">
      <div className="card-body">
        <h5 className="card-title mb-4">{title}</h5>
      <button className="custom_orange_button_card">Learn More</button>
      </div>
    </div>

      <div className="col-md-4 order-1 order-md-2 text-center p-2">
      <img src={image} className="img-fluid customCardImage" alt={title} />
    </div>
  </div>
</div>
</>
  );
}





