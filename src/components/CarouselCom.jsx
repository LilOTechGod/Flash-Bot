import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import imgOne from '../assets/jordan5.jpg'
import imgTwo from '../assets/nikes.jpg'
import imgThree from '../assets/nikexsupreme.jpg'


function CarouselCom() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <>
      <style type="text/css">
        {`
          .carouselImg {
            width: 100%;
            height: 33rem;
            margin-bottom:3rem;
          }
        `}
      </style>

    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-fade' >
      <Carousel.Item>
        <img className='carouselImg' src={imgOne} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carouselImg' src={imgThree} text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carouselImg' src={imgTwo} text="Third slide" />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default CarouselCom;
