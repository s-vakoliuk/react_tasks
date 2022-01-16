import './User.css';

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div className={'cardUser'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>getUser(user)}>GetDetails</button>
        </div>
    );
};

export default User;