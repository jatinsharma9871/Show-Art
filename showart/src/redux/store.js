import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./login/reducer";
import { signupReducer } from "./signup/reducer";



const composeEnhancers = 
typeof window === 'object' &&
window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const rootReducer = combineReducers({
    login:loginReducer,
    signup:signupReducer,
   
})

export const store = createStore(rootReducer, enhancer);
