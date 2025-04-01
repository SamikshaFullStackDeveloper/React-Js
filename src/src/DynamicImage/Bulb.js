import React,{useState} from "react";
import "./Bulb.css"

export default function BulbImage(){
 const [bulbReact, setBulbReact] = useState("off"); // default 

const colorChange = {
    on: "./yellow-bulb.png",
    off: "./white-bulb.png",
}

const onchangeColor = (event)=>{

    setBulbReact (event.target.value);
};
  
return(
    <div style={{marginTop:"80px"}}>
        <img src={colorChange[bulbReact]}/>
        <div>
            <button onClick={() => setBulbReact("on")}>On</button>
            <button onClick={() => setBulbReact("off")}>Off</button>
        </div>
    </div>

)
}  
       
