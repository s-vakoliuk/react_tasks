import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

const PostDetailsPage = () => {

    // Використовуємо useLocation для відхоплення post в полі state об'єкту useLocation
    const {state} = useLocation();
    console.log(useLocation());
    console.log("post", state.post);

    const {id}=useParams();
    console.log("id", id);



    return (
        <div>
            PostDetailsPage
            JSON.stringify(state.post)
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};