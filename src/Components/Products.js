import React, { useContext } from 'react';
import womenAccesory1 from "../images/womenAccesory1.jpg";
import { Cartcontext } from "./context/Cartcontext";


const Products = ({product}) => {

  const { carts, addToCart } = useContext( Cartcontext );

  let findExistedMovie =  carts.find(o => o.id === product.id);
  let disableButton = findExistedMovie ? true:false;

  return (
    <div className="product">
      <div className="product_box1">
        <div className="product_img">
          <img src={product.img} alt={product.img}/>
        </div>
        <div className="product_text">
          <p>{product.name}</p>
          <p>UGX {product.price}</p>
        </div>
      </div>
      <input 
        disabled={disableButton}
        type="button" 
        value="+ add"
        onClick={()=> addToCart(product)}
        />
    </div>
  )
}

export default Products;
