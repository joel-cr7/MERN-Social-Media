import "./login.css";
import { useContext, useRef } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";


// Called when hit on login button and dispatches actions based on conditions
const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const res = await axios.post("auth/login", userCredentials);
        dispatch(({type: "LOGIN_SUCCESS", payload: res.data})); 
    } catch (err) {
        dispatch(({type: "LOGIN_FAILURE", payload: err})); 
    }
}


export default function Login() {

    const email = useRef();
    const password = useRef();

    // we get all value from provider (we needed the dispatch to pass to "loginCall")
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);  // call the above method for dispatching actions
    }

    console.log(user);
    
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialMedia</h3>
                    <span className="loginDesc">Connect with friends and the world around you on SocialMedia.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                        <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}/>
                        <button disabled={isFetching} className="loginBtn">{isFetching ? <CircularProgress color="inherit" size="30px"/> : "Login"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" style={{textAlign: "center", color: "#1775ee", fontSize: "18px"}}>
                            Don't have an account? Register
                        </Link> 
                    </form>
                </div>
            </div>
        </div>
    )
}
