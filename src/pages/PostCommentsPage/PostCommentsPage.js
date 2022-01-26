import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import css from "../PostsPage/PostPage.module.css";

const PostCommentsPage = () => {

    const {id}=useParams();
    console.log("id", id);

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        postService.getByPostComments(id).then(value=>setComments([...value]))
     }, [id])

    return (
        <div className={css.cardCommentsDetails}>
            PostCommentsPage
            {JSON.stringify(comments)}
            <Outlet/>
        </div>
    );
};

export {PostCommentsPage};