import mongoose, { Document, Schema,model } from 'mongoose';
import { comparePassword, hashPassword } from '../services/password-service.js';

export interface UserType extends Document {
    username: string,
    password: string,
    comparePass(password: string,hashedPassword: string): Promise<boolean>
} 

const userSchema = new Schema<UserType >({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
},{
    timestamps: true
});

userSchema.pre('save',async function(){
    if(!this.isModified("password")){
        return;
    }
    const hashedPassword: string = await hashPassword(this.password);
    this.password = hashedPassword;
});

userSchema.methods.comparePass = async function(password: string,hashedPassword:string){
    console.log(password);
    return await comparePassword(password,hashedPassword);
}

export const User = model("users",userSchema);