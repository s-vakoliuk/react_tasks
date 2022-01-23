import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service"
import css from './PostPage.module.css';


const PostsPage = ({getPost}) => {

    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        postService.getAll().then(value=>setPosts(value))
    }, [])

    return (
         <div className={css.wrapPosts}>
             {posts && posts.map((post, key={})=>(
                 <div className={css.cardPost}>
                     <div>UserId: {post.id}</div>
                     <div>Title: {post.title}</div>
                     <div>Body: {post.body}</div>
                     <Link to={post.id.toString()}><button>Get Posts Details</button></Link>
             </div>))}
             <Outlet/>
         </div>
    );
};

export {PostsPage};