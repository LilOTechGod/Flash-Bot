import React, {useState} from 'react';
import ServiceCard from './ServiceCard';
import bape from '../assets/bape.jpg';
import jordan from '../assets/j1.jpg';
import hat from '../assets/new-era-2308912_640.jpg'

export const service = [
  {
    id:"2", img:jordan, title: 'Sneakers App Bot', description: 'This Bot will checkout any item within the Nike website.', price: 99.99
  },
  {
    id:"1", img: bape, title: 'Bape Appeal Bot', description: 'This Bot will checkout any item within the Bape website.', price: 69.99
  },
  {
    id:"3", img: hat, title: 'Lids App Bot', description: 'This Bot will checkout any item within the Lids website', price: 59.99
  }
]

export const getProductData = (id) => {
  // this will look for the object where the id matches the id entered and return everything inside the object
  let productData = service.find(product => product.id === id)

  if(productData === undefined) {
    console.log('No product with the ID of' + id + 'exist')
    return undefined;
  }

  return productData;
}

export const ServicePage = () => {


  let serviceDisplay = service.map((product, index) => {
    return <ServiceCard key={index} product={product}/>
  })

  return (
    <div className='service'>
      <style>
        {`
          .service{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            margin: 7rem auto;
          }
        `}
      </style>

      {serviceDisplay}
    </div>
  )
}
