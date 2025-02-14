import React from "react";
import "./Table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tableOf: 1 };
  }
  renderCell(tableOf, number) {
    return (
      <div className="row" key={number}>
        <button className="cell-button" style={{ backgroundColor: "lightblue" }}>
          {tableOf}
        </button>
        <span className="multi">{" X "}</span>
        <button className="cell-button" style={{ backgroundColor: "lightblue" }}>
          {number}
        </button>
        <span className="multi">{" = "}</span>
        <button className="cell-button" style={{ backgroundColor: "lightcoral" }}>
          {tableOf * number}
        </button>
      </div>
    );
  }
  renderTable() {
    const { tableOf } = this.state;
    let tableCellArray = [];
    for (let i = 1; i <= 10; i++) {
      tableCellArray.push(this.renderCell(tableOf, i));
    }
    return tableCellArray;
  }


  
  render() {
    return (
      <div className="table">
        {/* {this.renderTableOf()} */}
        {this.renderTable()}
      </div>
    );
  }
}

export default Table;
