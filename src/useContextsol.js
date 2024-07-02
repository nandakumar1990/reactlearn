import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UseContextSol(props) {
  const [user,setUser] = useState("Mitchel");
 
    return (
      <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}`}</h1>
        <Component2/>
      </UserContext.Provider>
      </>
    );
  }

  export default UseContextSol;