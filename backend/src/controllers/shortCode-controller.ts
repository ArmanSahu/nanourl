import { type Request, type Response } from "express";
import { Link } from "../models/short-url-model.js";
import mongoose from "mongoose";


export const redirectUrl = async(req: Request, res: Response) => {
    const shortCode = req.params.shortCode as string;
    if(!shortCode){
        return res.status(400).json({
            message: "Bad request"
        })
    }
     if(!mongoose.Types.ObjectId.isValid(shortCode)){
            return res.status(400).json({
                message: "Bad request"
            })
        }
    try{
        const data = await Link.findOne({
            shortCode
        });
        if(!data){
            return res.status(404).json({
                message: "No url found"
            })
        }
        data.clicks += 1;
        await data.save();
        const originalUrl = data.originalUrl;
        return res.redirect(originalUrl);
    }catch(error){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}