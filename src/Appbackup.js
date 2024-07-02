import {BrowserRouter,NavLink, Navigate, Route, Routes} from "react-router-dom";
import Home from "./routing/home";
import About from "./routing/about";
import ContactUs from "./routing/contactUs";
import MapDemo from "./routing/mapDemo";

import NoPageFound from "./routing/noPageFound";
import "./App.css";
import College from "./routing/nested/college";
import Teacher from "./routing/nested/teacher";
import Student from "./routing/nested/student";
import Login from "./routing/login";
import Dashboard from "./routing/dashboard";
import Axios from "./routing/axios";
import FormDemo from "./routing/formDemo";
import ReactHookForm from "./routing/hookFomDemo";
import "./routing/commonStyle.css";
import UnControlled from "./routing/unControlled";
import Counter from "./routing/counter";
import ReduxCounter from "./routing/reduxCounter";
export default function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Navigate replace to="/login"/>}/>
      <Route path="/dashboard" element={<Dashboard />}>
      <Route path="home" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contactUs" element={<ContactUs />}/>
      <Route path="mapDemo" element={<MapDemo />}/>
      <Route path="axios" element={<Axios />}/>
      <Route path="formDemo" element={<FormDemo />}/>
      <Route path="hookFomDemo" element={<ReactHookForm />}/>
      <Route path="unControlled" element={<UnControlled />}/>
      <Route path="counter" element={<Counter />}/>
      <Route path="reduxCounter" element={<ReduxCounter />}/>

        <Route path="college" element={<College />}>
          <Route path="teacher" element={<Teacher />}/>
          <Route path="student" element={<Student />}/>
        </Route>
      </Route>
        {/* Wildcard Route */}
      <Route path="*" element={<NoPageFound />}/>
      </Routes>
    </BrowserRouter>
   
  );
}