import React from "react";
import propTypes from "prop-types";

function about({age = "100"}) {
  // const  addData = (val) => {
  //   alert("data added"+val);
  // }
    return (
      <div>
        <h2>This is about component and I am {age} years old. </h2>
        {/* <button onClick={() => addData("user 1")}>Add Data</button> */}
      </div>
    );
  }
about.propTypes = {
age:propTypes.number,
};

  export default about;