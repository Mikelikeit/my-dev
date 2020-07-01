import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'/>
            </div>
            <div className={styles.loginBlock}>
                { props.isAuth ? <div>{ props.login }<button onClick={ props.logout }>Log out</button></div>
                :<NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    );
}

export default Header;