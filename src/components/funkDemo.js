import React, { useState } from "react";


function FuncDemo(props) {
  const [val,setVal] = useState(10);
    return (
      <div>
        <h2>Functional Component</h2>
        <p>Age: {props.age}</p>
        <button onClick={()=>setVal(25)}>Change Value</button> 
        States are : {val}

      </div>
    );
  }

  export default FuncDemo;