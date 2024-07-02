import axios from "axios";
import React, {useEffect, useState} from "react";

function Axios() {
    const [users, setUsers] = useState([]);
useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((resp) => {
        console.log(resp.data.data);
        setUsers(resp.data.data);
    })
},[]);
    return (
      <div>
        <table striped bordered hover size="sm"border="1" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,key)=>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.email}</td>
                        <td><img src={user.avatar}/></td>
                     </tr>
                )}
                </tbody>
            </table>
        
      </div>
    );
  }

  export default Axios;