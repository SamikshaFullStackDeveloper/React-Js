import React from "react";
import "./AddForm.css";
export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      Duration: "",
      movieDirector: "",
      moviePoster: "",
     releaseDate : ""
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handle form submission
  submitFunction = (event) => {
    event.preventDefault();
    const { movieName, Duration, releaseDate, moviePoster } = this.state;

    // Validate inputs before adding
    if (movieName.trim() && Duration.trim() && releaseDate.trim() && moviePoster.trim()) {
      this.props.addMovie({ movieName, Duration, releaseDate, moviePoster });

      // Reset form fields after submission
      this.setState({ movieName: "", Duration: "", releaseDate: "", moviePoster: ""});
    }
  };

  render() {
    return (
      <div className="main">

        <form onSubmit={this.submitFunction}>
          <fieldset>
            <h1>Movie Information</h1>
            <input
              type="text"
              name="movieName"
              value={this.state.movieName}
              onChange={this.handleChange}
              placeholder="Enter Movie Name"
              required
            />


            <input
              type="text"
              name="Duration"
              value={this.state.Duration}
              onChange={this.handleChange}
              placeholder="Enter Movie Duration"
              required
            />


            <input
              type="date"
              name="releaseDate"
              value={this.state.releaseDate}
              onChange={this.handleChange}
              placeholder="releaseDate"
              required
            />


            <input
              type="text"
              name="moviePoster"
              value={this.state.moviePoster}
              onChange={this.handleChange}
              placeholder="Enter Image URL"
              required
            />

          

            <button type="submit">Add Movie</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
