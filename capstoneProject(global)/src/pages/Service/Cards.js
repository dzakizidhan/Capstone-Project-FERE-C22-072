import React from "react";
import Card from "./Service";

import image1 from "../img/layanan1.jpg";
import image2 from "../img/emosi.jpg"
import image3 from "../img/perasaan.jpg"

import "./style.css"

const cards = [
  {
    id: 1,
    title: "INTERAKSI",
    image: image1,
    url: "/services/interaksi",
  },
  {
    id: 2,
    title: "EMOSIONAL",
    image: image2,
    url: "/services/emosional",
  },
  {
    id: 3,
    title: "PERASAAN",
    image: image3,
    url: "/services/perasaan",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 services">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
