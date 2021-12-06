import { SET_FORM } from "../action";

const intialState = {
   name:"",

}

const setUserForm = (state = intialState, action) => {
    switch (action.type) {
        case SET_FORM:
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}
export default setUserForm;