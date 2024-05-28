import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

app.use(cors());

app.get('/', (req, res) => {
    res.json({"Menu":["salad","qeema", "curry", "butter chicken", "icecream"]})
})

const Port = process.env.PORT;

app.listen(Port, ()=>{
    console.log(`listening on ${Port}`);
})