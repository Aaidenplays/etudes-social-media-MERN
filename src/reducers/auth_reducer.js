import{ getUserSignin, getUserSignup} from '../actions';

defaultState = {
    user:{
      id: undefined,
      name: "",
      email: ""
    }
  }

  export default function(state = defaultState, action) {
      switch(action.type) {
          case GET_USER_SIGNUP:
              return{
                  ...state,
                  id: action.payload.id,
                  name: action.payload.name,
                  email: action.payload.email
              }
            case GET_USER_SIGNIN:
                return {
                    ...state,
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            default:
                return state;
      }
  }