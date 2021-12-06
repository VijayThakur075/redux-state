import { SET_DATA } from "../action";

const intialState = {
    data:{},

}

const setUserData = (state = intialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}
export default setUserData;