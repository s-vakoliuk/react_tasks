import React from 'react';
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from "./UserPage.module.css";
import {userService} from "../../services/user.service";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    const getUser=(user)=>{setUsers(user)}

    useEffect(()=>{
        userService.getAll().then(value=>setUsers(value))
     }, [])

    console.log(users);

    return (
        <div className={css.wrapUsers}>
            {users.map((user, key=`{user.id}`)=> (
                    <div className={css.cardUser}>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                    <button onClick={()=>getUser(user)}>Get Details</button>
                </div>
                ))}
            <Outlet/>
        </div>
    );
};

export {UsersPage};
