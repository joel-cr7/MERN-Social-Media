import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if(confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Passwords don't match!");
        } else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                
            }
        }
    }

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">SocialMedia</h3>
                    <span className="registerDesc">Connect with friends and the world around you on SocialMedia.</span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder="Username" required className="registerInput" ref={username} />
                        <input placeholder="Email" type="email" required className="registerInput" ref={email} />
                        <input placeholder="Password" minLength="6" type="password" required className="registerInput" ref={password} />
                        <input placeholder="Confirm Password" type="password" required className="registerInput" ref={confirmPassword} />
                        <button className="registerButton" type="submt">Sign Up</button>
                        <button className="loginButton">Login to account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
