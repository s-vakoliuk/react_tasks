import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import css from "../UsersPage/UserPage.module.css";


const UserDetailsPage = () => {
    const {state} = useLocation();
    console.log(state)

    const params=useParams();
    console.log(params);


    return (
        <div className={css.cardUserDetails}>
                {/*<h4>{state.id} - {state.name} </h4>*/}
                {/*<p>Username: {state.username}</p>*/}
                {/*<p>Username: {state.username}</p>*/}
                {/*<p>Email:{state.email}</p>*/}
                {/*<p>Address:*/}
                {/*    <br/>street: {state.address.street};*/}
                {/*    <br/>suite:  {state.address.suite};*/}
                {/*    <br/>city: {state.address.city};*/}
                {/*    <br/>zipcode: {state.state.address.zipcode};*/}
                {/*<p>geo: lat: {state.address.geo.lat}, lng: {state.address.geo.lng}</p>*/}
                {/*</p>*/}
                {/*<p>Phone: {state.phone}</p>*/}
                {/*<p>Website: {state.website}</p>*/}
                {/*<p>Company:*/}
                {/*    <br/>{state.company.name}*/}
                {/*    <br/>{state.company.catchPhrase}*/}
                {/*    <br/>{state.company.bs}*/}
                {/*</p>*/}
                {/*<button >Posts User</button>*/}
            {JSON.stringify(state)}
            <Link to={params.toString()} ><button >Posts User</button></Link>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};