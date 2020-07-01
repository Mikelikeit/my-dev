import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import styles from "../common/FormControls/FormControls.module.css"

const LoginForm = (props) => {

    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ Input } name={ 'email' } placeholder={'Email'} validate={ [required] }/>
            </div>
            <div>
                <Field component={ Input } type={'password'} name={ 'password' } placeholder={ 'Password' } validate={ [required] }/>
            </div>
            <div>
                <Field component={ 'input' } name={ 'rememberMe' } type={ 'checkbox' }/> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

export const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)




