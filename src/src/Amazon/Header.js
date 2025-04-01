import React from "react";
import amazon from "./images/amazon.png";
import Cart from './Cart';
import './Amazon.css';


export default class Header extends React.Component {
  render() {
    return (
      <div className="cart-main-container">
        {/* Header */}
        <div className="cart-container">
          <img src={amazon} style={{ height: "200px", width: "240px" }} />
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="Search..." />
          </div>
          <Cart />
        </div>
      </div>
    );
  }
}
