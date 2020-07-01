import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/images.png'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span
                    key={p.id}
                    className={props.currentPage === p && styles.selectPage} onClick={() => {
                    props.onPageChanged(p)
                }}> {p}
                </span>
            })}

        </div>

        {props.users.map(u => <div key={u.id}>
            <div className={styles.users}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>
                {u.name}
            </div>
            <div>
                {u.status}
            </div>
            <div>
                {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unFollow(u.id)

                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)

                    }}>Follow</button>}
            </div>


        </div>)}
    </div>
}


export default Users



