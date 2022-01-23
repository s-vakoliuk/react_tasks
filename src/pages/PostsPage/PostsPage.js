import React from 'react';
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service"
import Post from './Post';
import css from './PostPage.module.css';


const PostsPage = ({getPost}) => {

    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        postService.getAll().then(value=>setPosts(value))
    }, [])

    return (
         <div className={css.wrapPosts}>
             {posts && posts.map((post)=>(
                 <div className={css.cardPost}>
                     <div>UserId: {post.id}</div>
                     <div>Title: {post.title}</div>
                     <div>Body: {post.body}</div>
                     <button >Get Posts Details</button>
                     <Post key={post.id} getPost={getPost}/>)}
             </div>))}
             <Outlet/>
         </div>
    );
};

export {PostsPage};