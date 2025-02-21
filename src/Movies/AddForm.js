import React from "react";
import "./AddForm.css";

export default class AddForm extends React.Component {
  render() {
    return (
        <div className="main">
      <form >
          <fieldset>
            <h1>Movie Information</h1>
          {/* Movie Name */}
          <label For="movieName"></label>
          <input type="text"  placeholder="Enter Movie Name" />
          <br />

          {/* Movie URL */}
          <label For="url"></label>
          <input type="text"  placeholder="Movie URL" /><br />

          {/* Release Date */}
          <label For="releaseDate"></label>
          <input type="text"  placeholder="Release Date" /><br />

          {/* Duration */}
          <label For="duration"></label>
          <input type="text"  placeholder="Duration"/><br />

          {/* Submit Button */}
          <h2>
            <button className="Button" type="submit">Submit</button>
          </h2>
          </fieldset>
      </form>
      </div>
    );
  }
}
