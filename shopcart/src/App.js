import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "./products";
import Navbar from "./navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
    };
  }

  increaseBtn = (addvalue) => {
    if (addvalue.quantity < 10) {
      const updateValue = addvalue.quantity++;
      this.setState({ updateValue });
    }
  };

  decreaseBtn = (subvalue) => {
    if (subvalue.quantity > 0) {
      const updateValue = subvalue.quantity--;
      this.setState({ updateValue });
    }
  };

  //add sort 
  onSort = (listNum, sortType) => {
    switch (sortType){
      case 'lowest':
        listNum.sort(function(a,b){
          return a.price - b.price
        });
      case 'highest':
        listNum.sort(function(a,b){
          return b.price - a.price
        });
      default:
        listNum.sort(function(a,b){
          return a.id - b.id
        });
    }
    this.setState({ itmes: listNum});
  };

render () {
  return (
    { /* Output final view */},
    <div className="App">
    <Navbar
          ItemCount={this.state.products
            .map((prod) => prod.quantity)
            .reduce((acc, curr) => acc + curr, 0)}
          prods={this.state.products}
          increaseBtn={this.increaseBtn}
          decreaseBtn={this.decreaseBtn}
          onSort={this.onSort}
   />
      </div>
    );
  }
}

export default App;
