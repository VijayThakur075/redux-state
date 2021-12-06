import { SET_WEIGHT } from "../action";

const intialState = {
    info:{
    weight: '',
    height: '',
    date: ''
}
}
const userData = (state = intialState, action) => {
    switch (action.type) {
        case SET_WEIGHT:
            return {
                ...state,
                info: action.payload,
            };
        default:
            return state;
    }
}
export default userData;