import { useNavigate } from "react-router-dom";
import type { AuthType } from "../../types/auth-type";
import { useRef } from "react";
import { useAuth } from "../../store/authStore";

const labelDivStyle = "flex flex-col gap-2"
const inputStyle = "rounded-md py-2 px-4 bg-stone-800 outline-none border border-gray-400/40 placeholder:text-sm placeholder:text-white/50 "


export const AuthCard = ({type}:AuthType) => {

    const isSignup = type === "signup";
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const signup = useAuth(state => state.signup);
    const loading = useAuth(state => state.loading);
    const error = useAuth(state => state.error);

    async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if(!username || !password){
            return;
        }
        const success = await signup({
            username: username,
            password: password
        });
        if(success){
            navigate("/login");
        }
        
    }

    return <form className="text-primary-text bg-primary-bg w-full px-10 flex flex-col gap-8 rounded-2xl">
        <div>
            <h2 className="text-2xl font-semibold">
                {isSignup ? "Create your Account" : "Welcome Back"}
            </h2>
            <p className="text-base font-medium text-secondary-text">
                {isSignup ? "Welcome to NanoUrl" : "Login to your account and continue"}
            </p>
        </div>
        <div className="flex flex-col gap-5">
            <div className={`${labelDivStyle}`}>
                <label>Username</label>
                <input ref={usernameRef} type="text" placeholder="Enter your username" className={`${inputStyle}`}/>
            </div>
             <div className={`${labelDivStyle}`}>
                <label>Password</label>
                <input ref={passwordRef} type="password" placeholder="Enter your password" className={`${inputStyle}`}/>
            </div>
        </div>
        <div>
           <button onClick={handleClick} disabled={loading} className={`bg-primary-button w-full rounded-lg py-2 mt-2 cursor-pointer hover:bg-primary-hover ${loading ? `opacity-20 cursor-none`: ""}`}>
                {isSignup ? "login" : "signup"}
           </button>
           <div className="text-secondary-text text-sm text-center mt-2">
                <span>
                    {isSignup ? "Already have an account? " : "Dont have an account? "}
                </span>
                <span className="text-primary-button cursor-pointer" onClick={() => isSignup ? navigate("/login") : navigate("/signup")}>
                    {isSignup ? "Signup" : "Login"}
                </span>
           </div>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
}