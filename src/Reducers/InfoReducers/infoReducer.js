import {FETCH_INFOS} from "../../Actions/InfosActions";


const initialState = {
    infos: {}
  }

export default function infos(state = [], action = []){
    switch(action.type){
        case "FETCH_INFOS" :
            return {...state, infos : action.payload}
        default:
            return state;
    }
    
}