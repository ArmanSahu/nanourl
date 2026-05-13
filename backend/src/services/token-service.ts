import jwt, { type JwtPayload } from 'jsonwebtoken';
import type { Types } from 'mongoose';


export const generateToken = (userId: Types.ObjectId) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    if(!JWT_SECRET){
        console.log("jwt seceret not found");
        throw new Error("jwt_secret not found");
    }

    return jwt.sign({
        userId
    },JWT_SECRET,{
        expiresIn: "3d"
    });
}

export const verifyToken = (token: string) => {
    const JWT_SECRET = process.env.JWT_SECRET;
    if(!JWT_SECRET){
        console.log("jwt seceret not found");
        throw new Error("jwt_secret not found");
    }

    return jwt.verify(token,JWT_SECRET) as JwtPayload;
}