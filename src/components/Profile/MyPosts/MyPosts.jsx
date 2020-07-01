import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>

            <div className={styles.profile}>
                <div>
                    <h1>My Posts</h1>
                    <PostsReduxForm onSubmit={ addNewPost }/>
                </div>

            </div>
            <div className={styles.myposts}>
                <div>
                    {postElement}
                </div>

            </div>
        </div>
    );
}

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={ 'textarea' } name={ 'newPostText' } placeholder={ 'Enter text your post' }/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostsReduxForm = reduxForm ({ form: 'myPosts' })(PostsForm)

export default MyPosts;