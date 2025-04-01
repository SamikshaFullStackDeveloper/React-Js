import React,{ useState } from "react";
import "./Fruits.css"

export default function FruitImg() {
    const [selectedFruit, setSelectedFruit] = useState("apple"); // Default selection


    // Images for different fruits
    const fruitImages = {
        apple: "./apple.png",
        banana: "./banana.jpeg",
        orange: "./orange.webp"
     
    };

    // Handle selection change
    const onSelectChange = (event) => {
        setSelectedFruit(event.target.value);
    };

    return (
        <div className="container">

            <h1>Select a Fruit</h1>
            <select className="drop-down" onChange={onSelectChange}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
             
            </select>

            <h2>You selected:{selectedFruit}</h2>

            <img
                style={{ width: "20vw", height: "25vh", margin: "50px" }}
                src={fruitImages[selectedFruit]}
                alt={selectedFruit}
            />

        </div>
    )
}





// import React, { useState } from "react";
// import "./FruitImg.css"

// export default class FruitImg extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             selectedFruit: "apple"
//         };
//     }
//     setSelectedFruit = (value) => {
//         this.setState({ selectedFruit: value });
//     };


//     // Images for different fruits
//     fruitImages = {
//         apple: "./apple.png",
//         banana: "./banana.jpeg",
//         orange: "./orange.webp",
//         mango: "./mango.png",
//     };

//     // Handle selection change
//     onSelectChange = (event) => {
//         if (event == null) {
//             if (this.state.selectedFruit == "apple") {

//             }
//         }



//         setSelectedFruit(event.target.value);
//     };
//     render() {
//         return (
//             <div className="container">

//                 <h1>Select a Fruit</h1>
//                 <select className="drop-down" onChange={onSelectChange}>
//                     <option value="apple">Apple</option>
//                     <option value="banana">Banana</option>
//                     <option value="orange">Orange</option>
//                     <option value="mango">Mango</option>
//                 </select>

//                 <h2>You selected:{selectedFruit}</h2>

//                 <img
//                     style={{ width: "20vw", height: "25vh", margin: "50px" }}
//                     src={fruitImages[selectedFruit]}
//                     alt={selectedFruit}
//                 />

//             </div>
//         )
//     }
// }