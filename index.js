import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './Routes/index.route.js';
import connect from './Configs/mongoose.js'

dotenv.config();
connect();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

router(app);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})