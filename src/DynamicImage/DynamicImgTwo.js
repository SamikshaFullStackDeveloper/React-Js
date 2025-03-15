import React, { useState } from "react";
import "./DynamicImgTwo"
import DynamicImage from "./FruitImg";

export default function DynamicImgTwo() {
    const [selectedCar, setSelectedCar] = useState("BMW"); // deafult

const carImages = {
    BMW : "./bmw-car.avif",
    audi: "./audi-car.jpg",
    luxury: "./luxury-car.jpg",
    hyundai: "./hyundai-car.jpg",

}
const onSelectChange = (event) => {
    setSelectedCar(event.target.value);
};

return (
    <div>                 
        <h1>Select a Car</h1>
        <select className="drop-down" onChange={onSelectChange} >
            <option value="BMW">BMW</option>
            <option value="audi">Audi</option>
            <option value="luxury">Luxury</option>
            <option value="hyundai">Hyundai</option>        
        </select>
        <h2>You selected:{selectedCar}</h2>
        <img
                style={{ width: "20vw", height: "25vh", margin: "50px" }}
                src={carImages[selectedCar]}
                alt={selectedCar}
            />
    </div>
)
}