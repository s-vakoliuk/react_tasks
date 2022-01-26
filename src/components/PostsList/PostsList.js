import React, {useEffect, useState} from 'react';

import css from "../../pages/PostsPage/PostPage.module.css";
import {postService} from "../../services/post.service";
import Post from "./Post";

const PostsList = () => {
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        postService.getAll().then(value=>setPosts([...value]))
    }, [])

    console.log(posts);

    return (
        <div className={css.wrapPosts}>
             {
                 posts && posts.map((post)=><Post key={post.id} item={post}/>)
             }
        </div>
    );
};

export default PostsList;