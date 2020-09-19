import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    getUserSignup
} from '../actions'
import Signup from '../components/user/Signup';

class SignupContainer extends Component {


    render() {
        return (
            <Signup
                {...this.props}
                userSignup = {this.props.getUserSignup}
            />
        )
    }
}


const mapStateToProps = state => {
    return state.auth
}

const mapDispatchToProps = {
    getUserSignup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)


// export default class App extends Component {
//     constructor(){
//       super()
  
//     //   this.state = {
//     //     user:{
//     //       id: undefined,
//     //       name: "",
//     //       email: ""
//     //     }
//     //   }
//       this.captureUserData = this.captureUserData.bind(this);
  
//     }
  
//     captureUserData(user) {
//       this.setState({
//         user:{
//           id: user._id,
//           name: user.name,
//           email: user.email
//         }
//       })
//     }
  