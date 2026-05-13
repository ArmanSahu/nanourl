import { z } from 'zod'
import type { NextFunction, Request, Response } from 'express';

const validationSchema = z.object({
    username: z.string().min(3,"username must have atleast 3 characters").max(40,"username can have atmost 40 characters"),
    password: z.string().min(6,"password must have atleast 6 character").max(30,"password can have atmost 30 characters ")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,"password must contain one uppercase, one lowercase, one number and one special character")
});


export const userDataValidation = (req: Request, res: Response, next: NextFunction) => {
    const result  = validationSchema.safeParse(req.body);
    if(!result.success){
        console.log(result.error.flatten());
        return res.status(400).json({
            message: "Validation failed"
        });
    }
    req.body = result.data;
    next();
}