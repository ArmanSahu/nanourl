import { useNavigate } from "react-router-dom";
import type { AuthType } from "../../types/auth-type";

const labelDivStyle = "flex flex-col gap-2"
const inputStyle = "rounded-md py-2 px-4 bg-stone-800 outline-none border border-gray-400/40 placeholder:text-sm placeholder:text-white/50 "


export const AuthCard = ({type}:AuthType) => {

    const isSignup = type === "signup";
    const navigate = useNavigate();

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
                <input type="text" placeholder="Enter your username" className={`${inputStyle}`}/>
            </div>
             <div className={`${labelDivStyle}`}>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" className={`${inputStyle}`}/>
            </div>
        </div>
        <div>
           <button className="bg-primary-button w-full rounded-lg py-2 mt-2 cursor-pointer hover:bg-primary-hover">
                {isSignup ? "Signup" : "Login"}
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
    </form>
}