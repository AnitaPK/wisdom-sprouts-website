"use client";
import Card from "./Card";
import "./WSCardSection.css";

export default async function CardSection({  features } ) {

  return (
    <>
      <div className="container-fluid customContainer">
        <h2 className="text-center">
          Things Students love <br />
          about Wisdom Sprouts
        </h2>
        <div className="row">
          {features.map((card, i) => (
            <div key={i} className="col-12 col-md-6">
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                buttonText={card.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
       
    </>
  );
}
