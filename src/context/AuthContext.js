import { createContext, useEffect, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    // user: {
    //     _id: "62974cfffee758a0f417d739",
    //     username: "joy",
    //     email: "joy@gmail.com",
    //     followers: [],
    //     following: [],
    //     profilePicture: "person/7.jpeg",
    //     coverPicture: "",
    //     isAdmin: false,
    // },

    //if user present in local storage then accept that or else null
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    //saving the user into local storage
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    return(
        <AuthContext.Provider 
            value={{
                user: state.user, 
                isFetching: state.isFetching, 
                error: state.error,
                dispatch,
            }}    // we will be able to use these values later in application
        >

            {children}

        </AuthContext.Provider>
    );
}