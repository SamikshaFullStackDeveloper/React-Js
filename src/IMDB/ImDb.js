import React from "react";
import "./ImDb.css"
import Header from "./Header";
import Panel from "./Panel";
import AddForm from "./AddForm";
import MovieRating from "./MovieRating";

export default class ImDb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieArray: [],
            showForm: false,

        }


    }
    // Function to show form
    openForm = () => {
        this.setState({ showForm: !this.state.showForm });
    };

    // 
    addMovie = (movie) => {
        console.log("Added movie:",movie)
        this.setState((prev) => ({
            movieArray: [movie, ...prev.movieArray],
            showForm: false,
        }));

    };
    render() {
        return (
            <div className="container">
                <Header openForm={this.openForm} />
                {this.state.showForm ? (
                    <AddForm addMovie={this.addMovie} />
                ) : (
                    <Panel movieArray={this.state.movieArray}  />
                )
            
                }

            </div>

        )
    }
}
