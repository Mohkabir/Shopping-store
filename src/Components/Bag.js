import React, { useContext } from 'react';
import smile from "../images/smile.jpg";
import { Link } from "react-router-dom";
import { Cartcontext } from "./context/Cartcontext";
import Cart from './Cart';

const Bag = () => {

  const { carts } = useContext( Cartcontext )

  const total = carts.reduce( (total, current)=> total + current.price, 0 );

  return (
    <div className="bag">
      <div className="bag_header">
        <h2>Bag <span>{carts.length}</span></h2>
      </div>
      <div className="carts_items">
        {carts.map((product)=>(
          <Cart key={product.id} product={product}/>
        ))}
      </div>
      {
        carts.length < 1?(
          <div className="info">
        <img src={smile} alt="smile"/>
        <p>It's Empty here</p>
        <p>Start shopping to add items to your bag</p>
      </div>
        ):""
      }
      

      <div className="invoice">
        <div>
          <p>Item Total</p>
          <p>Delivery</p>
          <p>Total</p>
          <p><small><i>Inclusive of all taxes</i></small></p>
        </div>
        <div className="price">
          <p>UGX {total}</p>
          <p>free</p>
          <p>UGX {total}</p>
        </div>
      </div>
      
      <div className="total">
        <p>Total</p>
        <p>UGX {total}</p>
      </div>
      <Link to="/account">   <button>
        Checkout
      </button></Link>
    </div>
  )
}

export default Bag;
