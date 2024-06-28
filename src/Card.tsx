import React from "react"
import './Card.css'
type CardProps = {
  title: string;
  img_uri: string;
}

function Card({ title, img_uri }: CardProps) {
  return (
    <div className="card_div">
      <img src={img_uri} alt={'planechaser card: ' + title} />
    </div>
  );
}

export default Card;
