import React from "react";
import "./Header.css"
import AddMovies from "./AddMovies";

export default class Header extends React.Component{
   render(){
    return(
        <div className="header">
           <img src={"./Imdb.png"}/>
           <div className="search-container">
            <input type="text" id="searchInput" placeholder="Search..." />
          </div>
             
            <AddMovies openForm={this.props.openForm}/>
        </div>
    )
   }
}
