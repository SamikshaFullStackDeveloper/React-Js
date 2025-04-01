import React from "react";
import "./Panel.css";
import MovieRating from "./MovieRating";

export default class Panel extends React.Component {

  render() {
    return (
      <div className="Panel"><br />
        {this.props.movieArray.length === 0 ? (
          <p>No Movies added yet</p>
        ) : (
          <ul className="movie-list">
            {this.props.movieArray.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.moviePoster} alt={movie.movieName} className="movie-poster" />
                <div className="movie-info">
                  <strong>{movie.movieName}</strong> <br/>
                  <strong>- {movie.Duration} min</strong> <br />
                  <strong> - Directed by {movie.movieDirector}</strong><br />
                  <strong> - {movie.releaseDate}</strong><br />
                  <MovieRating />

                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )

  }
}


