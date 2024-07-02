import React, { useEffect, useState } from "react";


function UseEffectDemo(props) {
  const [val,setVal] = useState(10);
  // componeneDidMount

  useEffect(()=>{
    alert("component mound");
  },[]);
  

  // componentDidMount && componetDidUpdate
  useEffect(()=>{
    alert("Component has mounte/updated");
  });
    return (
      <div>
        <h2>Use Effect Component</h2>
        <p>Age: {props.age}</p>
        <button onClick={()=>setVal(25)}>Change Value</button> 
        States are : {val}

      </div>
    );
  }

  export default UseEffectDemo;