import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./action"
const initState = {
    loading:false,
    error:false,
}

 export const signupReducer = (store=initState, {type, payload})=>{
    switch(type){
        case SIGNUP_LOADING:
            return {...store, loading:true};
        case SIGNUP_SUCCESS:
            return {
                ...store,
                loading:false,
                error:false,
            }
        case SIGNUP_FAILURE:
            return {
                ...store,
                loading:false,
                error:true,
            }
        default:
            return store;
    }
}