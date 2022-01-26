import React from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import css from "../../pages/PostsPage/PostPage.module.css";

const PostDetailsPage = () => {

    // Використовуємо useLocation для відхоплення post в полі state об'єкту useLocation
    const {state} = useLocation();

    console.log(useLocation());
    console.log("post", state);

    return (
        <div className={css.cardPostDetails}>
            PostDetailsPage
            {JSON.stringify(state)}
            <Link to={'comments'} state={state}><button>Get Comments</button></Link>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};