import express from 'express'
import morgan from "morgan"
import authRoutes from './routes/authRouter.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';


const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use(session(
    {
        secret:'1234',
        resave:true,
        saveUninitialized:true
    }
))
app.use(cookieParser())
app.use('/api', authRoutes);



export default app