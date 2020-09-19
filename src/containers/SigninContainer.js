import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    getUserSignin,
} from '../actions'
import Signin from '../components/user/Signin';

class SignupContainer extends Component {


    render() {
        return (
            <Signin
                {...this.props}
            />
        )
    }
}


const mapStateToProps = state => {
    return state.auth
}

const mapDispatchToProps = {
    getUserSignin,
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)
