export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginLoading=()=>({
    type:LOGIN_LOADING,
});

export const loginSuccess = (payload)=>({
    type:LOGIN_SUCCESS,
    payload
});

export const loginFailure = ()=>({
    type:LOGIN_FAILURE,
})

export const login = ({email, password})=>(dispatch)=>{
    dispatch(loginLoading())
        fetch(`https://show-art.herokuapp.com/login`,{
          method:"post",
          body:JSON.stringify({
              "email":email,
              "password":password
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(loginSuccess({email:email,token:res.token})))
        .catch(error=>dispatch(loginFailure()))
}