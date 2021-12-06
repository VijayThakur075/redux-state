import { SET_USER_STATE } from "../action";
import { getData } from "../helpers/localStorage";

const intialState = {
   data:  getData('data') || [],

}

const setuserstate = (state = intialState, action) => {
    switch (action.type) {
        case SET_USER_STATE:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}
export default setuserstate;