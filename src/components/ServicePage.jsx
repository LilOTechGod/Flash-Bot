import React from 'react';
import ServiceCard from './ServiceCard';

export const ServicePage = ({service}) => {

  let serviceDisplay = service.map((s, index) => {
    return <ServiceCard img={s.img} title={s.title} description={s.description}/>
  })

  return (
    <div>
      {serviceDisplay}
    </div>
  )
}
