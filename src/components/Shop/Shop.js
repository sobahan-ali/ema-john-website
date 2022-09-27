import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect( () => {
        console.log('product load befor fetch 1');
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data =>  {
            setProducts(data);
            console.log('product loaded 2');
        })
    }, []);

    // useEffect( () => {
    //     console.log('local storage first line 3', products);
    //     const storedCart = getStoredCart();
    //     // console.log(storedCart);
    //     const saveCart = [];
    //     for (const id in storedCart){
    //         const addededProduct = products.find(product => product.id === id)
    //         if(addededProduct){
    //             const quantity = storedCart[id];
    //             addededProduct.quantity = quantity;
    //             // console.log(quantity);
    //             // console.log(addededProduct);
    //             saveCart.push(addededProduct);
    //         }
    //     }
    //     setCart(saveCart)
    //     // console.log('local storage finsied 4');
    // },[products])

    useEffect( () => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart){
            // console.log(id);
            const addededProduct = products.find(product => product.id === id)

            if(addededProduct){
                const quantity = savedCart[id];
                addededProduct.id = quantity;
                savedCart.push(addededProduct)
            }
        }
        setCart(savedCart)
    } ,[products])

    const handleAddToCart = selectedProduct => {
        let newCart = [];

        const exist = cart.find(product => product.id === selectedProduct.id)

        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }

        // const newCart = [...cart, selectedProduct];
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop_container'>
           <div className="products_container">
           {
                products.map( product => <Product
                key={product.id}
                product = {product}
                handleAddToCart = {handleAddToCart}
                ></Product>)
            }
           </div>
           <div className="cart_container">
              <Cart cart = {cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;