const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Do you like coding?'},
        {id: 3, message: 'Yes! I like it'}
    ],
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Julia'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Igor'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: newText}]
            }
        default:
            return state
    }

}

export const addMessage = (newMessageText) => ({type: 'ADD-MESSAGE', newMessageText})


export default dialogsReducer

