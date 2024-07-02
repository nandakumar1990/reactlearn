// import React, { useEffect } from "react";


// function FetchDemo() {
//     useEffect(()=>{
//         // fetch("https://reqres.in/api/user?page=2")
//         // .then((response => response.json()))
//         // .then((resp) => console.log("resp is",resp.data));

//         fetch("https://reqres.in.api/users", {
//             method: "POST",
//             headers: {
//                 Authorization: "Bearer token here ",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name : "nandu",
//                 job : "devloper"
//             }),
//             })
//             .then((response) => response.json())
//             .then((resp) => console.log("resp is",resp.data));


//     },[]);

//     return (
//       <div>
//         Fetch Demo
        
//       </div>
//     );
//   }

//   export default FetchDemo;
//console.log("response headers", response.headers.get("Content-Type"));


import React, { useEffect } from "react";

function FetchDemo() {
  useEffect(() => {
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        Authorization: "Bearer token here", // Replace with actual token if needed
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "nandu",
        job: "developer",
      }),
    })
      .then((response) => response.json())
      .then((resp) => console.log("Response is:", resp))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      Fetch Demo
    </div>
  );
}

export default FetchDemo;
