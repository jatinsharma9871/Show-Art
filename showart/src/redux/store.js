import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { emailReducer, emailStatusReducer, NavBgReducer, navSearchReducer, pageReducer, passwordReducer } from "./reducer";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { signupReducer } from "./Signup/reducer";



const composeEnhancers = 
typeof window === 'object' &&
window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
  }) : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer,
    openPage:pageReducer,
    navSearch:navSearchReducer,
    setNavBg:NavBgReducer,
    email:emailReducer,
    password:passwordReducer,
    emailStatus:emailStatusReducer,
})

export const store = createStore(rootReducer, enhancer)