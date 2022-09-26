import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    // console.log(props);
    // const {handleAddToCart, product} = props
    const {name, ratings, img, price, seller} = product
    return (
        <div className='product_container'>
            <img src= {img} alt="" />
            <div className='product_info'>
                <p className='product_name'>Name : {name}</p>
                <p style={{marginTop: "12px"}}>Price: {price}</p>
                <p><small>Seller: {seller} </small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <div>
                 <button onClick={() => handleAddToCart(product)} className='btn'>add to cart
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                 </button>
                
            </div>
        </div>
    );
};

export default Product;