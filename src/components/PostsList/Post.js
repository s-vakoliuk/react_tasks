import React from 'react';
import {Link} from "react-router-dom";

import css from "../../pages/PostsPage/PostPage.module.css";

const Post = (props) => {

    //Через props з компоненти PostList з post витягую вміст полів id та name
    let {item}=props

    const {userId, title} = item;
    console.log(item);

    return (
         <div className={css.cardPost}>
             User: {userId} - Title: {title}
             {/*{JSON.stringify(item.item)}*/}
            <Link to={userId.toString()} state={item}><button>Get Posts Details</button></Link>
        </div>
    );
};

export default Post;