import express from 'express';
import cors from 'cors';

let app = express();
app.use(cors());

app.listen(5000)