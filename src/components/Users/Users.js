import {useEffect, useState} from "react";
import User from "./User";
import './Users.css';

const Users = () => {
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value=>value.json())
            .then(value=>setUsers(value))
    }, [])
    return (
        <div className={'wrapUsers'}>
            {users.map(value=> <User key={value.id} id={value.id} name={value.name} surname={value.surname} email={value.email} />)}
        </div>
    );
};

export default Users;