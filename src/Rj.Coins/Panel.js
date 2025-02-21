import React from "react";
import "./Panel.css";
import CoinCard from "./CoinCard";

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinOneCounter: 0,
            coinTwoCounter: 0,
            coinFiveCounter: 0,
            coinTenCounter: 0,
            coinTwentyCounter: 0,

        };
    }
         incrementCounter = (coin) => {
        if (coin === "One") {
            this.setState({ coinOneCounter: this.state.coinOneCounter += 1 });
        } else if (coin === "Two") {
            this.setState({ coinTwoCounter: this.state.coinTwoCounter += 1 });
        } else if (coin === "Five") {
            this.setState({ coinFiveCounter: this.state.coinFiveCounter += 1 });
        } else if (coin === "Ten") {
            this.setState({ coinTenCounter: this.state.coinTenCounter += 1 });
        } else {
            this.setState({ coinTwentyCounter: this.state.coinTwentyCounter += 1 });
        }
    };
    render() {
        return (
            <div className="panel">
                <CoinCard
                    imageName="one-coin.png"
                    coinText="One"
                    coinCounter={this.state.coinOneCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                <CoinCard
                    imageName="two-coin .png"
                    coinText="Two"
                    coinCounter={this.state.coinTwoCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                <CoinCard
                    imageName="five-coin.png"
                    coinText="Five"
                    coinCounter={this.state.coinFiveCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />

                <CoinCard
                    imageName="ten-coin.png"
                    coinText="Ten"
                    coinCounter={this.state.coinTenCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                <CoinCard 
                 imageName="twenty-coin.png"
                 coinText="Twenty"
                 coinCounter={this.state.coinTwentyCounter}
                  onCoinClick={this.props.onCoinClick}
                  incrementCounter={this.incrementCounter}
                />


            </div>
        )
    }

}






