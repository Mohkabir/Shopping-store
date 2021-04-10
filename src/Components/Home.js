import React, { useState } from 'react';
import support1 from "../images/support1.jpg";
import support2 from "../images/support2.jpg";
import support3 from "../images/support3.jpg";
import logo from "../images/logo.jpg";
import Products from "./Products";
import Category from './Category';
import Bag from "./Bag";

// imports of product arrays
import { electronics } from "../productArray";
import { kids } from "../productArray";
import { home } from "../productArray";
import { grocery } from "../productArray";
import { freshFoods } from "../productArray";
import { faceMasks } from "../productArray";
import { viewAll } from "../productArray";
import Account from './Account';

const Home = () => {

const [currentCategory, setCurrentCategory] = useState(1);
const [nav, setNav] = useState(false);
const [bagAccountNav, setBagAccountNav] = useState(1);
const [searchProduct, setSearchProduct] = useState("");


const handleSearch = (e) => {
  let lowwecased = e.target.value.toLowerCase();  

  setSearchProduct(e.target.value)
  setCurrentCategory(7)

  if(lowwecased === "electronics"){
    setCurrentCategory(1);
  }else if(lowwecased === "face mask"){
    setCurrentCategory(2);
  }else if(lowwecased === "  fresh food"){
    setCurrentCategory(3);
  }else if(lowwecased === "grocery"){
    setCurrentCategory(4);
  }else if(lowwecased === "home"){
    setCurrentCategory(5);
  }else if(lowwecased === "kids"){
    setCurrentCategory(6);
  }else{
    setCurrentCategory(0);
  }
}

const handleBagAccountNav = (value) => {
  if(value === "bag"){
    setBagAccountNav(1)
  }else{
    setBagAccountNav(2)
  }
}

  const handleNav = ()=>{
    setNav(!nav);
  }
  let navContent = nav?"display":"remove";

  const handleCategory = (value) => {
    if(value === "electronics"){
      setCurrentCategory(1);
    }else if(value === "faceMasks"){
      setCurrentCategory(2);
    }else if(value === "freshFoods"){
      setCurrentCategory(3);
    }else if(value === "grocery"){
      setCurrentCategory(4);
    }else if(value === "home"){
      setCurrentCategory(5);
    }else if(value === "kids"){
      setCurrentCategory(6);
    }else if(value === "viewAll"){
      setCurrentCategory(7);
    }else{
      setCurrentCategory(1);
    }
  }

  return (
    <div className="home">
      <div className="main_head">
        <p>store made with soko</p>
      </div>
      <div className="home_header">
        <div className="logo">
          <img src={logo} alt="logo"/>
          <div className="header_text">
            <h3>Target</h3>
            <p>Cham towers plot 12 nkruma Rd, kampala, Ug</p>
          </div>
        </div> 
        <div className="largescreen_nav">
          <div onClick={()=> handleBagAccountNav("bag")}>
            <i className="fas fa-shopping-bag"></i>
            <p>Bag</p>
          </div>
          <div  onClick={()=> handleBagAccountNav("account")}>
            <i className=" fas fa-align-left"></i>
            <p>Account</p>
          </div>
        </div>
        <i className="fa fa-bars" onClick={handleNav}></i>
      </div>
      <div className="search">
        <input 
        onChange={handleSearch}
        type="text"
        value={searchProduct}
        placeholder="search for product..."
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="sections_container">
        <div className={`section1 ${navContent}`}>  
          <Category handleCategory={handleCategory}/>
        </div>
        <div className="section2">  
          <div className="products">
            {currentCategory === 1?electronics.map( product => (
                < Products 
                  key={product.id} 
                  product={product}
                />
              )):currentCategory === 2?faceMasks.map( product => (
                < Products 
                  key={product.id} 
                  product={product}
                />
              )):currentCategory === 3?freshFoods.map( product => (
                < Products 
                  key={product.id} 
                  product={product}
                />
              )):currentCategory === 4?grocery.map( product => (
                < Products 
                  key={product.id} 
                  product={product}
                />
              )):currentCategory === 5?home.map( product => (
                < Products 
                  key={product.id} 
                  product={product}
                />
              )):currentCategory === 6?kids.map( product => (
                < Products 
                  key={product.id} 
                  product={product}
                />
              )):currentCategory === 7?
              viewAll.map( product =>(< Products 
                key={product.id} 
                product={product}/>           
              )):(
                <div style={{textAlign: "center", padding:"2em"}}>
                  <h2>No result ....</h2>
                  <i>please search for a category.</i>
                </div>
              )
            }
          </div>
        </div>
        <div className="section3"> 
        {bagAccountNav === 1? <Bag/>:<Account />}
        </div>
      </div>  
      <div className="support">
        <div>
          <img src={support1} alt="support1"/>
          <p>Fast Delivery</p>
        </div>
        <div>
          <img src={support2} alt="support2"/>
          <p>Buyer Protection</p>
        </div>
        <div>
          <img src={support3} alt="support3"/>
          <p>Customer Support</p>
        </div>
      </div>   
      <footer>
        <p><small>store details</small></p>
        <h3>Target</h3>
        <p>Cham towers plot 12 nkruma Rd, kampala, Ug</p>
        <div className="whatsapp">
        <i className="fab fa-whatsapp"></i>
          <span>Chat with us</span>
        </div>
      </footer>
   </div>
  )
}

export default Home;
