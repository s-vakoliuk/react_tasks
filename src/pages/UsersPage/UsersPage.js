import React from 'react';
import {Outlet} from "react-router-dom";

import css from "./UserPage.module.css";
import UsersList from "../../components/UsersList/UsersList";

const UsersPage = () => {

    return (
        <div className={css.wrapPage}>
            {/*Виводжу вміст з компоненти UsersList*/}
            <UsersList/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};