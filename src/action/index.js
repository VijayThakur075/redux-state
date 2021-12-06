export const SET_DATA = "SET_DATA";
export const SET_WEIGHT = "SET_WEIGHT";
export const SET_USER_STATE = "SET_USER_STATE";
export const SET_FORM= "SET_FORM";


export const setdata=(payload)=>({type: SET_DATA, payload})
export const setUser=(payload)=>({type: SET_WEIGHT, payload})
export const setUserData=(payload)=>({type: SET_USER_STATE, payload})
export const setForm=(payload)=> ({type: SET_FORM, payload})