import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    posts: [
        {id: 1, message: 'Hi man', likesCount: 'like 35'},
        {id: 2, message: 'How are you?', likesCount: 'like 85'},
        {id: 3, message: 'Your ready to party?', likesCount: 'like 64'}
    ],
    profile: null,
    status:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newText = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: newText, likesCount: 'like 0'}],
            }
        case SET_USER_PROFILE:
            return {
            ...state,
            profile : action.profile
        }
        case SET_STATUS:
            return {
            ...state,
            status : action.status
        }

        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: 'ADD-POST', newPostText})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})

export const getProfile = (userId) =>{
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId) =>{
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status) =>{
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }})
    }
}

export default profileReducer