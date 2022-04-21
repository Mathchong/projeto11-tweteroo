import express from 'express';
import cors from 'cors';

let app = express();
app.use(cors());

let user = {username: 'user', avatar: 'user-avatar'}
let tweets = [{username: 'tweets', avatar: 'user-avatar', tweet: 'tweet'}]

app.listen(5000)