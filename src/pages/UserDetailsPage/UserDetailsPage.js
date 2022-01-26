import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

import css from "../UsersPage/UserPage.module.css";

const UserDetailsPage = () => {
    // Використовуємо useLocation для відхоплення user в полі state об'єкту useLocation
    const {state} = useLocation();
    console.log("useLocation", useLocation());
    console.log("user", state.user);

    return (
        <div className={css.cardUserDetails}>
                <h4>{state.user.id} - {state.user.name} </h4>
                <p>Username: {state.user.username}</p>
                <p>Email:{state.user.email}</p>
                <p>Address:
                    <br/>street: {state.user.address.street};
                    <br/>suite:  {state.user.address.suite};
                    <br/>city: {state.user.address.city};
                    <br/>zipcode: {state.user.address.zipcode};
                <p>geo: lat: {state.user.address.geo.lat}, lng: {state.user.address.geo.lng}</p>
                </p>
                <p>Phone: {state.user.phone}</p>
                <p>Website: {state.user.website}</p>
                <p>Company:
                    <br/>{state.user.company.name}
                    <br/>{state.user.company.catchPhrase}
                    <br/>{state.user.company.bs}
                </p>
            {/*{JSON.stringify(state.user)}*/}
            <Link to={'posts'} ><button>Posts User</button></Link>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};