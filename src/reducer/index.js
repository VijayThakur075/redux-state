import { combineReducers } from "redux";
import userData from "./userdata";
import setUserData from "./selectUserData";
import setuserstate from "./setuserstate";
import setUserForm from "./form";

const reducer=combineReducers({
   userData,
   setUserData,
   setuserstate,
   setUserForm
})

export default reducer;