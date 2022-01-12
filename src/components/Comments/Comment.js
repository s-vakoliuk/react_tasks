import './Comment.css';

const Comment = (props) => {
    const {id, name, surname, email} = props;
    return (
        <div className={'cardComment'}>
            <div>id: {id}</div>
            <div>title: {name}</div>
            <div>body: {surname}</div>
        </div>
    );
};

export default Comment;