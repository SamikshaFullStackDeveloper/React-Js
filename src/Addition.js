import React from "react";
import "./Addition.css";

class Addition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className="container">

                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>
                < input type="number" id="Input"></input>

                =
                <button type="button" onclick={add}>Add</button>

            </div>
        );
    }
}
export default Addition;

