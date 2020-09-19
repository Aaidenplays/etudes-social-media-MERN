import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    getUserSigning,
    getUserSignup
} from '../actions'

class HomeContainer extends Component {

}

const mapStateToProps = state => {
    return state.app
}

const mapDispatchToProps = {
    getUserSigning,
    getUserSignup
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)


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
  