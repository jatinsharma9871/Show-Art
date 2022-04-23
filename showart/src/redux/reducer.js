import { EMAIL, NAV_SEARCH, OPEN_PAGE, NAV_BG, PASSWORD, EMAIL_STATUS } from "./action";


export const NavBgReducer = (store={setNavBg:'transparent'},{type,payload})=>{
    switch(type){
        case NAV_BG:
            return{setNavBg:payload}
        default:
            return store;
   }
}

export const pageReducer = (store={openPage:false},{type,payload})=>{
    switch(type){
        case OPEN_PAGE:
          return {openPage:payload}
        default:
            return store;
    }
}

export const navSearchReducer = (store={navSearch:false},{type,payload})=>{
    switch(type){
        case NAV_SEARCH:
            return {navSearch:payload}
        default:
            return store;
    }
}
export const emailReducer = (store={email:''},{type,payload})=>{
    switch(type){
        case EMAIL:
           return {email:payload}
        default:
            return store;
    }
}

export const passwordReducer = (store={password:''},{type,payload})=>{
    switch(type){
        case PASSWORD:
            return {password:payload}
        default:
            return store;
    }
}

export const emailStatusReducer = (store={emailStatus:false},{type,payload})=>{
    switch(type){
        case EMAIL_STATUS:
            return {emailStatus:payload}
        default:
            return store;
    }
}


