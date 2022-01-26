import React from 'react';
import {Link} from "react-router-dom";

import css from "../../pages/UsersPage/UserPage.module.css";


const User = (props) => {
    //Через props з компоненти UserList з user витягую вміст полів id та name
    let {item}=props

    const {id, name} = item;
    console.log(item);

    return (
        <div className={css.cardUser}>
            <div>{id} - {name}</div>
            {/*{JSON.stringify(item.item)}*/}
            {/*<button>User Details</button>*/}
            <Link to={id.toString()} state={item}><button>User Details</button></Link>
        </div>
    );
};

export default User;