import express from 'express';
import cors from 'cors';
import authRouter from '../routes/auth-route.js';
import linkRouter from '../routes/link-routes.js';
import redirectRouter from '../routes/redirect-route.js';
export const app = express();

//Middleware

app.use(express.json());
app.use(cors());


//Routes
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/link",linkRouter);
app.use("/",redirectRouter);