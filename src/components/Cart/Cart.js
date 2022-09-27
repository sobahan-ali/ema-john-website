import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total += product.price *  product.quantity ;
        shipping += product.shipping * product.quantity;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));

    let grantTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order summary</h2>
              <p>product added: {quantity}</p>
              <p>total price:{total}</p>
              <p>shipping price: {shipping}</p>
              <p>tax: {tax}</p>
              <h5>Grand total: {grantTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;