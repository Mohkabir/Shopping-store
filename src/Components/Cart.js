import React, { useContext } from 'react';
import { Cartcontext } from "./context/Cartcontext";


const Cart = ({product}) => {

  const { removeFromCart } = useContext( Cartcontext );

  return (
    <div className="cart">
            <div className="cart_box1">
              <div className="cart_img">
                <img src={product.img} alt={product.img}/>
              </div>
              <div className="cart_text">
                <p>{product.name}</p>
                <p>UGX {product.price}</p>
              </div>
            </div>
            <div className="btn_wrapper">
            <button onClick={()=> removeFromCart(product)}>Remove</button>
            </div>
    </div>
  )
}

export default Cart;
