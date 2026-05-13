import dotenv from 'dotenv'
dotenv.config()
import { app } from './app/app.js'
import { connectDatabase } from './db/db.js'


const PORT: string | number = process.env.PORT ||8000

connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listening on PORT ${PORT}`);
    })
})