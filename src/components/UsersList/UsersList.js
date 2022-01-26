import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from "../../pages/UsersPage/UserPage.module.css";
import {userService} from "../../services/user.service";
import User from "./User";

const UsersList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value=>setUsers([...value]))
     }, [])

    console.log(users);

    return (
        <div className={css.wrapCardUsers}>
            {/*Виводжу вміст users методом map і зберігаю в масив user інформацію з компоненти User*/}
            {
                users && users.map((user)=> <User key={user.id} item={user}/>)
            }
            <Outlet/>
        </div>
    );
};

export default UsersList;