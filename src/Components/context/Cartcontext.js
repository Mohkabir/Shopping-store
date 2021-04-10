import React,{ createContext, useReducer, useEffect } from "react";
import Cartreducer from "./Appreducer";

const initialState = {
  carts: localStorage.getItem("carts")?JSON.parse(localStorage.getItem("carts")):[]
}

export const Cartcontext = createContext(initialState);

export const Cartprovider = (props)=>{
  const [state, dispatch ] = useReducer( Cartreducer, initialState );

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  },[state])

  const addToCart = (product) =>{
    dispatch({type: "ADD_TO_CART", payload: product})
  }

  const removeFromCart = (product) => {
    dispatch({type: "REMOVE_FROM_CART", payload: product.id})
  }
  
  return(
    <Cartcontext.Provider
    value={{
      carts: state.carts,
      statemain: state,
      addToCart,
      removeFromCart
    }}
    >
      {props.children}
    </Cartcontext.Provider>
  )
}