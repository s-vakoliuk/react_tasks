import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service"
import Post from './Post';
import css from './PostPage.module.css'


const PostsPage = ({userId}) => {
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        postService.getByUserId(userId).then(value => setPosts(value))
    }, [userId])

    return (
         <div className={css.wrapPosts}>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
             <Outlet/>
         </div>
    );
};

export {PostsPage};