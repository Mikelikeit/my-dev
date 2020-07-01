import React from 'react';
import {addPost} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


class MyPostsContainer extends React.Component {

    render() {
        return (
        <MyPosts {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapStateToDispatch = (dispatch) =>{
    return {
        addPost: (newPostText) =>{
            dispatch(addPost(newPostText))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(MyPostsContainer)

