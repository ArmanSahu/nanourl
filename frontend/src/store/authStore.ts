import { create } from "zustand";
import type { UserType } from "../types/userType";

interface AuthType{
    loading: boolean;
    error: string | null;
    user: {
        username: string
    }| null;
    setLoading: (value: boolean) => void;
    setError?: (value: string) => void;
    signup: (data:UserType) => Promise<boolean>;
    login?: (data: UserType) => Promise<boolean>;
    logout?: () => void;
}


export const useAuth = create<AuthType>((set)=>({
    loading: false,
    error: null,
    user: null,
    setLoading: (value:boolean) => set({loading: value}),
    signup: async(data:UserType) => {
        try{
            set({
                loading: true,
                error: null
            });
            const res = await fetch("http://localhost:3000/api/v1/auth/signup",{
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if(!res.ok){
                set({
                    error: result.message,
                    loading: false
                });
                return false;
            }
            set({
                loading: false,
                error: null
            });
            return true;
        }catch(error){
            set({
                error: "Something went wrong! Please try again",
                loading: false
            });
            console.log(error);
            return false;
        }
    }
}));