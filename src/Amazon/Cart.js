import React from "react";
import logo from "./images/cart.jpg";
import "./Amazon.css";

export default class Cart extends React.Component {
constructor(props) {
        super(props);
        this.state = {
         cartCount: 0, 
            };
        }
    
        // Method to increase cart count
        addToCart = () => {
            this.setState({ cartCount: this.state.cartCount + 1 });
          };                                                    
    
render() {
return (
<div className="cart-container">
<img src={logo} alt="Cart Logo" className="cart-logo"/>
</div>
    );
};
};