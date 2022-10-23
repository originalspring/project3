import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart(props) {
  return (
    <div className="m-5 px-5 w-75">
      {props.ItemCount === 0 ? (
        <EmptyCart 
        products={props.products} 
        ItemCount={props.ItemCount} 
        />
      ) : (
      <ShowCart
        products={props.products}
        ItemCount={props.ItemCount}
      />
      )}
  </div>
  );
}

function EmptyCart(props) {
  return (
    <div>
      <h2>Your Cart Items</h2>
      <span>There are {props.ItemCount} in your cart. </span>
      <div className="mt-3">
        <Link to="/">
        <button href="/" className="btn btn-success">
          Continue Shop
        </button>
        </Link>
      </div>
    </div>
  )
}

function ShowCart(props) {
    return (
    <div className="w-150">
    <h2>Your Cart Items</h2>
    {props.products.map((prod) => {
      if (prod.quantity > 0) {
        return (
          <div key={prod.id} className="border">
            <img src={prod.img} alt={prod.title} width="150" />
            <p className="qty d-inline mx-5 fw-bold">Quantity: {prod.quantity}</p>
            <p className="px-4">{prod.title}</p>
          </div>
        );
      }
    })}
    <Link to="/Checkout">
      <button href="/Checkout" className="btn btn-primary mt-3">
          Check Out
        </button>
      </Link>
    </div>
  );
}