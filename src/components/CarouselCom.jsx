import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';


function CarouselCom() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <img src="https://th.bing.com/th/id/OIP.7U04VgXgEOjam3-A_RMutgHaJ4?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://th.bing.com/th/id/OIP.w7qhZHVOXiUytJL7KBsZ5QHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://th.bing.com/th/id/OIP.Cecvmy0Ea70v_m4S4_mXlQHaFW?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCom;
