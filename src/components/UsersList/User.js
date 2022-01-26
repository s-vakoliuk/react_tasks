import React from 'react';
import {Link} from "react-router-dom";

import css from "../../pages/UsersPage/UserPage.module.css";


const User = (item) => {
    //З user витягую вміст полів id та name
    const {id, name}=item;
    console.log(item);

    return (
        <div className={css.cardUser}>
            {/*<div>{id} - {name}</div>*/}
            JSON.stringify(item)
            <button>User Details</button>
            {/*<Link to={id.toString()} state={{item}}><button>User Details</button></Link>*/}
        </div>
    );
};

export default User;