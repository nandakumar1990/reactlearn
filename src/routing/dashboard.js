import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate();
    return (
      <>
        <ul>
        <li>
            <NavLink exact to="home" >Home</NavLink>
        </li>
        <li>
            <NavLink to="about">About</NavLink>
        </li>
        <li>
            <NavLink to="contactUs">Contact Us</NavLink>

        </li>
        <li>
            <NavLink to="college">College</NavLink>

        </li>
        <li>
            <NavLink to="mapDemo">Map</NavLink>
        </li>
        <li>
            <NavLink to="axios">Axios</NavLink>
        </li>
        <li>
            <NavLink to="formDemo" activeClassName="active">Form</NavLink>
        </li>
        <li>
            <NavLink to="hookFomDemo" activeClassName="active">Hook Form</NavLink>
        </li>
        <li>
            <NavLink to="unControlled">UnControlled</NavLink>
        </li>
        <li>
            <NavLink to="counter" activeClassName="active">Counter</NavLink>
        </li>
        <li>
            <NavLink to="reduxCounter" activeClassName="active">Redux Counter</NavLink>
        </li>
        <li>
            <NavLink to="materialDemo" activeClassName="active">Material</NavLink>
        </li>
        <li>
            <NavLink to="formikForm" activeClassName="active">Formik Form</NavLink>
        </li>
        <li>
            <NavLink to="fetchDemo" activeClassName="active">Fetch Demo</NavLink>
        </li>
        <li className="move_right">
          <button onClick={()=>navigate("/")}>LogOut</button>
        </li>
        </ul>
         {/* to populate the data of nester routes, we use Outlet */}
        <Outlet/>
        <br/>
        <br/>
      </>
    );
  }

  export default Dashboard;