import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Bag from "./Components/Bag";
import Home from "./Components/Home";
import Account from "./Components/Account";
import "./style.css";
import { Cartprovider } from "./Components/context/Cartcontext";
import Nav from "./Components/Nav";



function App(props) {
 

  return (
    <Cartprovider>
     <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/Soko-Shopping-carts">
              <Home />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/bag">
              <Bag />
            </Route>
          </Switch>
          <Nav />
        </div> 
     </div>
    </Router>
    </Cartprovider>
  );
}

export default App;
