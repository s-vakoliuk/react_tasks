import css from "./UserPage.module.css";

const User = ({user, getUser}) => {
    // з масиву об'єктів user витягуємо ключі id та name, тобто деструктуроване присвоювання
    const {id, name} = user;

    return (
        <div className={css.cardUser}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>getUser(user)}>Get Details</button>
        </div>
    );
};

export default User;