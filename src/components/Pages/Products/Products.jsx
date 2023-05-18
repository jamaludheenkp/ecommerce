import React, { useState } from 'react'
import {phonesData} from './Products.data'
import { Card, Button } from 'react-bootstrap'


const Products = () => {

  const [items, setItems] =useState(phonesData);

  const decQty = (id)=>{
   const newItem = items.map((item)=>
   item.id === id && item.qty > 1 ? {...item, qty: item.qty-1} : item
   );
   setItems(newItem)
  }
  
  const incQty = (id)=>{
    const newItem = items.map((item)=>
    item.id === id? {...item, qty: item.qty+1} : item
    );
    setItems(newItem)
   }

  return (
    <div className='m-3'>
        <h1 className='fw-bold lh-1 mt-3' > Products </h1>

        {items.map((item) =>(
        <div className='d-inline-flex' key={item.id}>
        <Card className="shadow-lg p-3 m-3 ms-md-3 bg-body rounded" style={{ width: '16rem'}}>
      <Card.Img className='' variant="top" style={{ height: '13rem' }} src={require(`./assets/${item.image}.jpeg`)} />
        <Card.Body>
          <Card.Title className='text-primary'>{item.name}</Card.Title>
          <Card.Text> {item.desc} </Card.Text>
          <h5> Price : ₹ {item.price} </h5>
          <div className='text-center'>
          <p>
            <span className='fw-bold m-1'> Qty :</span>
            <Button className='m-1 text-black' style={{background:"Azure"}} onClick={()=>decQty(item.id)}>-</Button>
            <span className='fw-bold m-1'> {item.qty}</span>
            <Button className='m-1 text-black' style={{background:"Azure"}} onClick={()=>incQty(item.id)}>+</Button>
          </p>
          </div>
          <Button variant="primary">Add to Basket</Button>
        </Card.Body>
      </Card>
        </div>
        ))}
    </div>
  )
}

export default Products