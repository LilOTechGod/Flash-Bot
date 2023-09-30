import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <style type="text/css">
        {`
          .testimonial {
            margin-bottom: 5rem;
            background-color: blue;
            height: 10rem;
            color:white;
          }
          h4 {
            padding: 2.5rem;
          }
          .carousel-indicators {
            display:none;
          }
          .carousel-control-next {
            display:none;
          }
          .carousel-control-prev {
            display:none;
          }
        `}
      </style>

      <h1>Testimonial</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} className="testimonial">
        <Carousel.Item>
          <h4>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h4>
        </Carousel.Item>
        <Carousel.Item>
          <h4>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h4>
        </Carousel.Item>
        <Carousel.Item>
          <h4>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </h4>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Testimonial;
