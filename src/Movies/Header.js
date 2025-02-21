import React from "react";
import "./Header.css"
import AddMovies from "./AddMovies";

export default class Header extends React.Component{
   render(){
    return(
        <div className="header">
           <img src={"./Imdb.png"}/>
           <div className="Movies"><b> Movies </b></div>
             
            <AddMovies/>
        </div>
    )
   }
}
