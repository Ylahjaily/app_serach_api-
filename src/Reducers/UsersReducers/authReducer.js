import {LOGIN_USER} from "../../Actions/AuthActions";

const initialState = {
    currentUser: {}
  }

export default function user(state = [], action = []){
    switch(action.type){
        case "LOGIN_USER" :
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
    
}