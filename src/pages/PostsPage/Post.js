import css from './PostPage.module.css'

const Post = ({post, getPost}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={css.cardPost}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <button onClick={()=>getPost(post)}>GetPosts Details</button>
        </div>
    );
};

export default Post;