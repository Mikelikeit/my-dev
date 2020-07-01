import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import Header from "./Header";



class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} profile={this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {logout})(HeaderContainer);