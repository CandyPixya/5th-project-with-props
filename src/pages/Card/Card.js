import React from "react";
import flower from "../Media/flower.jpg"
import star from "../Media/star.png"

export default function Card(props) {
  return (
    <div className="card">
      <img className="img-flower" src={props.img} />
      <div className="card-stats">
        <img src={star} className="star" />
        <span>{props.rating}</span>
        <span className="gray"> ({props.reviewCount}) </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="candy">{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}