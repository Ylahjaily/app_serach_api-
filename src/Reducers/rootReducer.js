import {combineReducers} from "redux";
import infos from "./InfoReducers/infoReducer";
import user from "./UsersReducers/authReducer";

export default combineReducers({
    user,
    infos
})