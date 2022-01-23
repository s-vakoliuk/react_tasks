import React from 'react';
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service"
import Post from './Post';
import css from './PostPage.module.css';

const PostsPage = ({getPost}) => {

    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts(value))
    }, [])

    return (
         <div className={css.wrapPosts}>
            {posts.map(post=> <Post key={post.id} getPost={getPost}/>)}
             <Outlet/>
         </div>
    );
};

export {PostsPage};