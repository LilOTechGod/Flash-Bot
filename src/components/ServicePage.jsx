import React, {useState} from 'react';
import ServiceCard from './ServiceCard';

export const service = [
  {
    id:"1", img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text', price: 99.99
  },
  {
    id:"2", img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text', price: 99.99
  },
  {
    id:"3", img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text', price: 99.99
  },
  {
    id:"4", img: 'https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', title: 'Placeholder title', description: 'Placeholder Text', price: 99.99
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
    <div>
      {serviceDisplay}
    </div>
  )
}
