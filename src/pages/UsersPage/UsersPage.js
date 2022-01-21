import React from 'react';
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import User from "./User";

import {userService} from "../../services/user.service"
import css from './UserPage.module.css';

const UsersPage = ({getUser}) => {
    const [users, setUsers]=useState([]);
     useEffect(()=>{
        userService.getAll().then(value=>setUsers(value))
    }, [])

    return (
        <div className={css.wrapUsers}>
            {users.map(user=> <User key={user.id} user={user} getUser={getUser}/>)}
            <Outlet/>
        </div>
    );
};

export {UsersPage};