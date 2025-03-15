import React from "react";
import "./MovieRating.css"

export default class MovieRating extends React.Component{
    render(){
        return(
            <div className="rating">
                <button className="btn">☆Rate</button>
            </div>
        )
    }
}

