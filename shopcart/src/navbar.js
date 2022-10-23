import './App.css';
import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { faShoppingCart, faRegistered,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./displayProducts";
import Cart from "./Cart";
import CheckOut from './CheckOut'; 

export default function Navbar (props) {
    return (
        <Router>
          <nav>
            <Link className="logo" to="/">
              <h1>
                Meishen's Ecommerce Shop
               
              </h1>
            </Link>
            <Link to="/showcart" className="cart">
              <FontAwesomeIcon icon={faShoppingCart} size="sm" />
              <span> {props.ItemCount} </span>
              <span> items</span>
            </Link>
          </nav>

        <Routes>
        <Route path="/" 
                element={
                <DisplayProducts
                     products={props.prods}
                     increaseBtn={props.increaseBtn}
                     decreaseBtn={props.decreaseBtn}
        />
        } 
        />
        <Route path="/showcart" 
                element={
                <Cart 
                     products={props.prods}
                     ItemCount={props.ItemCount}
                />
            } 
            />
        <Route path="/checkout" 
                element={
                    <CheckOut />
                } 
                />
        </Routes>
        </Router>
    );
}


