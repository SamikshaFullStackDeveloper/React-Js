import React from "react";
import "./AddMovies.css";
import AddForm from "./AddForm";


export default class AddMovies extends React.Component {
    

    //  add movie function
    // MovieFormshow = () => {
    //     this.setState({MovieForm: true});
    //   }

    render() {
        return (
            <div className="add-container">
                 <button className="button" onClick={()=>this.props.openForm()}>Add Movies</button>
               
            </div>
        );
    }
}

