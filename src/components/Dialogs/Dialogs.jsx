import React from 'react';
import styles from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DItems";
import MessagesItems from "./MessagesItems/MessgaesItems";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {
    let dialogElement = props.dialogs
        .map(d => <DialogsItems name={d.name} id={d.id}/>)

    let messageElement = props.messages
        .map(m => <MessagesItems message={m.message} id={m.id}/>)




    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }

    if (!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElement}
            </div>
            <div className={styles.messages}>
                {messageElement}
            </div>
            <DialogsReduxForm onSubmit={ addNewMessage }/>
        </div>
    )

}

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} component={'textarea'} name={'newMessageText'}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs;