import React, { useEffect, useState } from 'react'
import { rootUrl } from '../utils/rootUrl'
import axios from 'axios';
// interface User {
//     id: number
// }
async function fetchUsers() {
    const res = await fetch(`${rootUrl}/api/users`);
    // const res = await axios.get(`${rootUrl}/api/users`);
    const data = res;
    console.log("data", data);
}



function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>UserList</div>
    )
}

export default UserList