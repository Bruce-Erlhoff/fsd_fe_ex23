import { useEffect, useState } from "react";

const Users = () => {
    // useState is necessary to make jsonData accessible outside blockscope
    // of async function, i.e. need to use in jsonData.map below
    
    let [jsonData,setJsondata] = useState([]);

useEffect ( () => {
    // https://reqres.in/api/users?page=2
    // this provides fake user json data
    
    async function fetchUsers() {
        //wait for the response
       let response = await fetch ('https://reqres.in/api/users?page=2');
        //wait for the conversion to json
       let respJSON = await response.json();
       console.log(respJSON);
       setJsondata(respJSON.data);
    }
    fetchUsers();
});

    return ( 
    <div>
        <h1>Welcome to users page</h1>
        <h2>check console</h2>
        {
        jsonData.map( (elem) => <h4> {elem.email} </h4>)
        }
    </div>
     );
}
 
export default Users;