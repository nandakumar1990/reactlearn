import React, { useState } from "react";


function RoomOne(props) {
    const [val1,setVal1]= useState(1000);
    const [val2,setVal2]= useState(2000);
      return (
        <div>
          <h2>Room1 Component</h2>
          <p>Car: {props.car}</p>
          <p>Bike: {props.bike}</p>
       
          <p>Car Price : {val1}</p>
          <p>Bike Price : {val2}</p>
        </div>
      );
    }
  
    export default RoomOne;