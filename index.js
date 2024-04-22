import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import helmet  from 'helmet';
import bodyParser from 'body-parser';
import connectDb from './config/connectDb.js'


// import routes 
import authRouter from './routes/authRoutes.js';
// configuration 
const app = express();
dotenv.config({path:'./config/.env'});
const PORT = process.env.PORT ||3000;
connectDb();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());


//  routes 
app.use('/api/v1',authRouter);



// server listening 
app.listen(PORT,(error)=>{
  try {
    console.log(`Server is listening on http://localhost:${PORT}`);

  } catch (error) {
    console.log(`server is not listening on http://localhost/${PORT} error: ${error.message}`);
  }
})