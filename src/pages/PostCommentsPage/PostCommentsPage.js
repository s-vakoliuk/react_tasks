import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";


const PostCommentsPage = () => {

    const {id}=useParams();
    console.log("id", id);

    const {state} = useLocation();
    console.log("comments", state);

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        postService.getByPostComments(id).then(value=>setComments([...value]))
     }, [id])

    return (
        <div>
            PostCommentsPage
            JSON.stringify(state);
            <Outlet/>
        </div>
    );
};

export {PostCommentsPage};