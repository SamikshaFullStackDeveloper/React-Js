import React from "react";
import "./ImDb.css"
import Header from "./Header";
import Panel from "./Panel";
 
 export default class ImDb  extends  React.Component{
   
    render(){
        return(
            <div className="container">
                <Header/>
                <Panel/>
            </div>

        )
    }
}
