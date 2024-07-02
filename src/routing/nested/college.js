import React from "react";
import {NavLink,Outlet} from "react-router-dom";



function College() {
    return (
      <div>
        This is college component
        <br/>
        <br/>
        <ul>
            <li>
                <NavLink to="teacher" activeClassName="active">Teacher</NavLink>
            </li>
            <li>
                <NavLink to="student" activeClassName="active">Student</NavLink>

            </li>
        </ul>
        {/* to populate the data of nester routes, we use Outlet */}
        <Outlet/>
      </div>
    );
  }

  export default College;