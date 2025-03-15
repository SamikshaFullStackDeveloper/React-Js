import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
    render() {
        console.log("CoinCard props:", this.props); // Debugging step
        
        return (
            <div className="coin-card"
                onClick={() => {
                    if (typeof this.props.onCoinClick === "function") {
                        this.props.onCoinClick(this.props.coin); 
                    } else {
                        console.error("onCoinClick is missing or not a function", this.props);
                    }

                    if (typeof this.props.incrementCounter === "function") {
                        this.props.incrementCounter(this.props.coin);
                    } else {
                        console.error("incrementCounter is missing or not a function", this.props);
                    }
                }}
            >
                <img className="coin-image" src={this.props.imageName} alt={this.props.coin} />
                <h2>{this.props.coinText}</h2>
                <h3>Add Coin: {this.props.coinCounter}</h3>
            </div>
        );
    }
}
