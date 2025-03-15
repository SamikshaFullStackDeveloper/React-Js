import React, { Component } from "react";
import "./HomePage.css";
import ImDb from "../IMDB/ImDb"
import CoinCard from "../Rj.Coins/CoinCard";
import Actors from "../Actor/Actors";
import Bulb from "../DynamicImage/Bulb";
import Fruits from "../DynamicImage/Fruits";


export default class RJHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "ImDb", component: <ImDb /> },
        { name: "CoinCard", component: <CoinCard /> },
        { name: "Actors", component: <Actors /> },
        { name: "Bulb", component: <Bulb /> },
        { name: "Fruits", component: <Fruits /> },
        
      ],
      selectedProject: null, // Initially no project is selected
    };
  }

  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component });
  };

  render() {
    return (
      <div className="Home-main-container">
        <h1>React Projects</h1>
        <div className="Projects-Container">
          {this.state.projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              onClick={() => this.handleProjectClick(project)}
            >
              {project.name}
            </div>
          ))}
        </div>
        <br />
        <div className="Project-Content">
          {this.state.selectedProject ? this.state.selectedProject : <p>Select a project to view details.</p>}
        </div>
      </div>
    );
  }
}
