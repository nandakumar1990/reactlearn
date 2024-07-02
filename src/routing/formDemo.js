import React, {useEffect, useState} from "react";

function FormDemo() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        console.log("values are",username,password);
    }
    return (
      <div>
        <h2>User Form</h2>
        <br/>
       <form onSubmit={(e)=>submit()}>
        <label>
            Username: {" "}
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br/>
        <label>
            Password: {" "}
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
       </form>
        
      </div>
    );
  }

  export default FormDemo;