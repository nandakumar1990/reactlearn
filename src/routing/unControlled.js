import React, { useRef } from 'react';

function UnControlled() {

    const usernameRef = useRef(null)
    const pwdRef = useRef(null);

    const submit = (e) => {
        e.preventDefault();
        console.log("values - ",usernameRef.current.value,pwdRef.current.value);
    }
    return (
      <div>
        <h2>This is Uncontrolled Component</h2>
        <br/>
       <form onSubmit={(e)=>submit(e)}>
        <label>
            Username: {" "}
            <input type="text" name="username" ref={usernameRef} />
        </label>
        <br/>
        <label>
            Password: {" "}
            <input type="password" name="password" ref={pwdRef}  />
        </label>
        <button type="submit">Login</button>
       </form>
        
      </div>
    );
  }

  export default UnControlled;