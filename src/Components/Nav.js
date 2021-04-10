import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "./context/Cartcontext";


const Nav = () => {
  const { carts } = useContext( Cartcontext );
  const [activeColor, setactiveColor] = useState("home")

  let home_active = activeColor === "home" ?"active":"notActive";
  let bag_active = activeColor === "bag" ?"active":"notActive";
  let account_active = activeColor === "account" ?"active":"notActive";

  const handleActive = (value) => {
    if(value === "home"){
      setactiveColor("home")
    }else if(value === "bag"){
      setactiveColor("bag")
    }else if(value === "account"){
      setactiveColor("account")
    }
  }

  return (
    <nav>
    <Link to="/Soko-Shopping-carts">
      <div 
      className={home_active}
      onClick={() => handleActive("home")}
      >
        <i className="fa fa-home"></i>
        <p>Home</p>
      </div>
    </Link>
    <Link to="/bag">
      <div 
      className={bag_active}
      onClick={() => handleActive("bag")}
      >
        <i className="fas fa-shopping-bag"></i>
        <span className="cart_count">{carts.length}</span>
        <p>Bag</p>
      </div>
    </Link>
    <Link to="/account">
      <div 
      className={account_active}
      onClick={() => handleActive("account")}
      >
        <i className=" fas fa-align-left"></i>
        <p>Account</p>
      </div>
    </Link>
</nav>
  )
}

export default Nav
