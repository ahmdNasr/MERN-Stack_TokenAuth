import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/api';

function Dashboard(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers({ token: props.token })
        .then(result =>  {
            if(result.err) {
                alert(result.err)
                return;
            }
            setUsers(result)
        })
    }, [props.token]) // dependency array
    
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={props.logout}>Logout</button>
            {
                users.map((user, index) => (
                    <div key={index}>
                        <h3>
                         {user.firstname} {user.lastname}
                        </h3>
                        <p> {user.email} </p>
                    </div>
                ))
            }
        </div>
    )
}


// <button onClick={() => alert("implement logout!!")}>Logout</button>
export default Dashboard;