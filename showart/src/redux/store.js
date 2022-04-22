import { combineReducers, createStore } from "redux";
import { emailReducer, emailStatusReducer, NavBgReducer, navSearchReducer, pageReducer, passwordReducer } from "./reducer";


const rootReducer = combineReducers({
    openPage:pageReducer,
    navSearch:navSearchReducer,
    setNavBg:NavBgReducer,
    email:emailReducer,
    password:passwordReducer,
    emailStatus:emailStatusReducer,
})

export const store = createStore(rootReducer)