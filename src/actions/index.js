import {DBURL} from "../constants";

//action types for App
export const GET_USER_SIGNUP = "GET_USER_SIGNUP"
export const GET_USER_SIGNIN = "GET_USER_SIGNIN"

// action types for both
export const SHOW_LOADING_SPINNER;

// action creator for App

export function getUserSignup(){
    // console.log(DBURL)
   const request = await axios.post(`${DBURL}/signup`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    })
    .then((res) => {
        return res.data
    })

    return {
        type: GET_USER_SIGNUP,
        payload: request
    }
}

export function getUserSignin () {
    const request = await axios.post(`${DBURL}/signup`, {
        email: this.state.email,
        password: this.state.password
    })
    .then((res) => {
        return res.data
    })

    return {
        type: GET_USER_SIGNIN,
        payload: request
    }
}