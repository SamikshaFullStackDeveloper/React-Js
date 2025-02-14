import React from "react";
import "./NewTable.css";

class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableOf: 1 };
  }

  renderTableOf() {
    let array = [];
    for (let i = 1; i <= 10; i++) {
      // Define button for each number
      let ui = (
        <button
          key={i}
          className="cell-button"
          style={{ backgroundColor: "lightgray", fontWeight: "bold" }}
          onClick={() => this.buttonClicked(i)}
        >
          {i}
        </button>
      );
      array.push(ui);
    }
    return <div className="row">{array}</div>;
  }

  buttonClicked(index) {
    console.log("INDEX ==", index);
    this.setState({ tableOf: index });
  }

  render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        {/* {this.renderTable()} */}
      </div>
    );
  }
}