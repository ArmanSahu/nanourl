import type { Request, Response } from "express";
import { User } from "../models/user-model.js";



export const signup = async(req: Request, res: Response) => {
    const {username,password} = req.body;
    try{
        const user = await User.findOne({
            username
        });
        if(user){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        await User.create({
            username,
            password
        });
        return res.status(201).json({
            message: "user signup successful"
        });
    }catch(error){
        return res.status(500).json({
            message: "Internal server error"
        });
    }

}