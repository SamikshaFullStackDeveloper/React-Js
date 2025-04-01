//  Team Eleven 

import React from "react";
import "./MyComponent.css";
import { Button } from "@coreui/coreui";
// import { CAlert } from '@coreui/react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastClicked: null,
      counterone: 0,
      countertwo: 0,
      buttonArray: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ]
      
    };
  }

  counterIncr = (index, playerName) => {
    let copiedArray = [this.state.buttonArray];

    copiedArray[index] = false;
    this.setState({ buttonArray: copiedArray });

    this.setState({ lastClicked: playerName });
    this.setState({ counter: ++this.state.counterone });
  };

  renderScore = () => {

    return <text>{this.props.teamName}</text>

  };

  renderButtons = (index,playerName) => {
    // let buttonStyle = { backgroundColor: "lightcoral", fontSize: "20px" }
    // if (this.state.lastClicked === playerName)
    //   buttonStyle = {backgroundColor: "green", fontSize:"2px"}

    let buttonStyle = this.props.buttonStyle;
    return (
      <button
        className="button"
        onClick={() => this.counterIncr(index,playerName)}
        style={buttonStyle}
      >
        {playerName}
      </button>
    );
  };
  render() {

    return (
            <div className="team">
              {this.renderScore()}
              {this.state.buttonArray[0] && this.renderButton(0, "playerOne", index)}
              {this.state.buttonArray[1] && this.renderButton(1, "playerTwo", index)}
              {this.state.buttonArray[2] && this.renderButton(2, "playerThree", index)}
              {this.state.buttonArray[3] && this.renderButton(3, "playerFour", index)}
              {this.state.buttonArray[4] && this.renderButton(4, "playerFive", index)}
              {this.state.buttonArray[5] && this.renderButton(5, "playerSix", index)}
              {this.state.buttonArray[6] && this.renderButton(6, "playerSeven", index)}
              {this.state.buttonArray[7] && this.renderButton(7, "playerEight", index)}
              {this.state.buttonArray[8] && this.renderButton(8, "playerNine", index)}
              {this.state.buttonArray[9] && this.renderButton(9, "playerTen", index)}
              {this.state.buttonArray[10] && this.renderButton(10, "playerEleven", index)}
            </div>
          );
  }
}
export default MyComponent;




// import React from "react";
// import "./MyComponent.css";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//       lastClicked: null,
//       buttonArray: new Array(11).fill(true), // Initialize button array with true values
//     };
//   }

//   counterIcre = (index, playerName) => {
//     // Create a copy of the buttonArray to update the state
//     const copiedArray = [...this.state.buttonArray];
//     copiedArray[index] = false; // Disable the clicked button

//     // Update the state
//     this.setState((prevState) => ({
//       buttonArray: copiedArray,
//       lastClicked: playerName,
//       counter: prevState.counter + 1,
//     }));
//   };

//   renderScore = () => {
//     return <span>{this.props.teamName}</span>;
//   };

//   renderButton = (index, playerName, passedStyle) => {
//     let buttonStyle = { ...passedStyle };

//     return (
//       <div key={playerName}>
//         <button
//           className="button"
//           onClick={() => this.counterIcre(index, playerName)}
//           style={buttonStyle}
//           disabled={!this.state.buttonArray[index]} // Disable button if false
//         >
//           {playerName}
//         </button>
//       </div>
//     );
//   };

//   render() {
//     const buttonStyle = { background: "pink", fontSize: "20px" };

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.state.buttonArray[0] && this.renderButton(0, "playerOne", buttonStyle)}
//         {this.state.buttonArray[1] && this.renderButton(1, "playerTwo", buttonStyle)}
//         {this.state.buttonArray[2] && this.renderButton(2, "playerThree", buttonStyle)}
//         {this.state.buttonArray[3] && this.renderButton(3, "playerFour", buttonStyle)}
//         {this.state.buttonArray[4] && this.renderButton(4, "playerFive", buttonStyle)}
//         {this.state.buttonArray[5] && this.renderButton(5, "playerSix", buttonStyle)}
//         {this.state.buttonArray[6] && this.renderButton(6, "playerSeven", buttonStyle)}
//         {this.state.buttonArray[7] && this.renderButton(7, "playerEight", buttonStyle)}
//         {this.state.buttonArray[8] && this.renderButton(8, "playerNine", buttonStyle)}
//         {this.state.buttonArray[9] && this.renderButton(9, "playerTen", buttonStyle)}
//         {this.state.buttonArray[10] && this.renderButton(10, "playerEleven", buttonStyle)}
//       </div>
//     );
//   }
// }

// export default MyComponent;
