import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order summary</h2>
              <p>product added: {cart.length}</p>
        </div>
    );
};

export default Cart;