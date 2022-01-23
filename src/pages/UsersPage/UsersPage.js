import React from 'react';
import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import css from "./UserPage.module.css";
import {userService} from "../../services/user.service";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value=>setUsers(value))
     }, [])

    console.log(users);

    return (
        <>
            <div className={css.wrapCardUsers}>
                {users.map((user)=> (
                    <div className={css.cardUser}>
                        <div>{user.id} - {user.name}</div>
                        <Link to={user.id.toString()} state={{user}}><button>User Details</button></Link>
                    </div>
                    ))}
                <Outlet/>
            </div>
        </>
    );
};

export {UsersPage};