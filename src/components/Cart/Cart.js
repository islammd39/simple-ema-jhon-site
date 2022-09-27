import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {img,name,seller,price,ratings} = props.product;
    const {cartHandler,product} = props
    return (
        <div className='cart'>
             <img src={img} alt=".." onError={(e)=>{e.currentTarget.src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
}}/>        <div className='cart-detiels'>
                 <h3 className='cart-font'>{name}</h3>
                 <p>{seller}</p>
                 <p>Price : ${price}</p>
                 <p>Ratings : {ratings}</p>
                 </div>
                 <button onClick={()=> cartHandler(product)} className='cart-btn'><p className='btn-text'>Add Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            
        </div>
    );
};

export default Cart;

