import React from 'react';
import {Outlet} from "react-router-dom";

import PostsList from "../../components/PostsList/PostsList";
import css from './PostPage.module.css';


const PostsPage = () => {
    return (

        <div className={css.wrapPostsPage}>

            <PostsList/>
        <Outlet/>

        </div>
    );
};

export {PostsPage};