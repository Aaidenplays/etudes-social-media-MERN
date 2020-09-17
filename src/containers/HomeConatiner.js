export default class App extends Component {
    constructor(){
      super()
  
    //   this.state = {
    //     user:{
    //       id: undefined,
    //       name: "",
    //       email: ""
    //     }
    //   }
      this.captureUserData = this.captureUserData.bind(this);
  
    }
  
    captureUserData(user) {
      this.setState({
        user:{
          id: user._id,
          name: user.name,
          email: user.email
        }
      })
    }
  