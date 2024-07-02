import React from "react";


function MapDemo() {
    let cars = [
        {
            color:"puple",
            type:"minivan",
            registration:new Date("2020-01-03"),
            capacity:10
        },
        {
            color:"red",
            type:"Station Wagon",
            registration:new Date("2024-01-03"),
            capacity:5
        }
    ]
    return (
      <div>
        <h2>MapDemo Component</h2>
        <br/>
        {
            cars.map((car,index) => (
                <p key={index}>{`${car.color} ${car.type} which has a capacity of ${car.capacity}, was registered on ${car.registration.toLocaleDateString('en-CA')}`}</p>
            ))
        }
      </div>
    );
  }

  export default MapDemo;