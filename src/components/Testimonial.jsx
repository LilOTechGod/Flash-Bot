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
            height: 12rem;
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

      <h1 className="text-center">Testimonials</h1>
      <Carousel activeIndex={index} onSelect={handleSelect} className="testimonial bg-secondary text-white">
        <Carousel.Item>
          <h4 className="p-4">
            “I am a hobbyist at heart, and collect numerous rare, hard to find items…including Nike (mostly Jordans, but there are some others, like the Air Max Pennys that I like a lot). I can count on one hand how many “collectible” sites have a fair way for everyone to have a chance to buy at retail.”
          </h4>
          <p className="float-right mr-4">By: THE DJ NEW, 11/16/2022</p>
        </Carousel.Item>
        <Carousel.Item>
          <h4 className="p-4">
            “I love everything about this app and I’m going to more than likely get on it every single day for the rest of my life. One of the things I really love are the videos about the shoes that are releasing, because it gives us a story behind it and i feel it gives us more of a history lesson behind it. ”
          </h4>
          <p className="float-right mr-4">
            Its_Mr_Robinsonnn, 05/12/2021
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <h4 className="p-4">
            “This app is absolutely terrific! At first I was feeling dreaded on constantly trying to go to stores to get my Jordan’s just to find out that it’ll be sold out in my size anyway. When I came across this app I contemplated because I didn’t know if it was a scam or if it was actually legit. ”
          </h4>
          <p className="float-right mr-4">
            Nia Ricks, 05/20/2018
          </p>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Testimonial;
