import React from "react";
import {useForm } from "react-hook-form";

function ReactHookForm() {
    const { register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
      <div>
        <h2>React Hook Form</h2>
        <br/>
       <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Email: 
            <input type="text" name="email"  {...register("email", {required:true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,})} />
            {errors.email && errors.email.type === "required" && (<p className="errorMsg">Email is required.</p>)}
        </label>
        <br/>
        <label>
            Password: 
            <input type="password" name="password" {...register("password",{required:true,minLenght:6})} />
            {errors.password && errors.password.type === "required" && (<p className="errorMsg">Password should be minimum 6 character.</p>)}
        </label>
        <button type="submit">Login</button>
       </form>
        
      </div>
    );
  }

  export default ReactHookForm;