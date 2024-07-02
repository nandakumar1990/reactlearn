import React from "react";


function Login() {
    const navigate = useNavigate();
    return (
      <div>
        <h2>Login Page Component</h2>
        <br/>
        <button onClick={()=>navigate("/dashboard/home")}>Login</button>
        
      </div>
    );
  }

  export default Login;