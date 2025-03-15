import React from "react";
 import "./Dashboard.css"
 import Panel from "./Panel";
import CoinCard from "./CoinCard";
 export default class Dashboard  extends  React.Component{
    constructor(props){
        super(props);
        this.state= {
            total:0
        };

    }
    onCoinClick = (coin)=>{
        if(coin == "One"){
            this.setState ({total:(this.state.total += 1)})
        }else if (coin == "Two"){
            this.setState ({total:(this.state.total += 2)})
        }else if (coin == "Five"){
            this.setState ({total:(this.state.total += 5)})
        }else if (coin == "Ten"){
            this.setState ({total:(this.state.total += 10)})
        }else {
            this.setState ({total:(this.state.total += 20)})
        }
    }
render(){
    return(
        <div className="main-container">
 <div className="counter-box"> Total = {this.state.total}</div>
 <Panel onCoinClick={this.onCoinClick}/>
 
 
        </div>
    )
}
 }