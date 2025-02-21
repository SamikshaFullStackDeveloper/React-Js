import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
    render() {
        return (
            <div className="coin-card"
                onClick={() => {
                    this.props.onCoinClick(this.props.coinText); 
                    this.props.incrementCounter(this.props.coinText)
                }}
            >
              
                <img className="coin-image" src={this.props.imageName}  />
                <h2>{this.props.coinText}</h2>
                <h3>Add Coin: {this.props.coinCounter}</h3>
              
            </div>
        );
    }
}

