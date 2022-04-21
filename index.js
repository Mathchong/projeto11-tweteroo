import express from 'express';
import cors from 'cors';

let app = express();
app.use(cors());
app.use(express.json())

const users = new Map();
users.set('Tesla', 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg')
let tweets = [{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` },
{ username: 'Tesla', avatar: 'https://i.pinimg.com/originals/7b/80/b3/7b80b3276866f2258b570aa6c07e54ca.jpg', tweet: `Let's buy twitter` }]
let tweets2 = []

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;
    console.log(avatar)
    //if (users.has(username))
    users.set(username, avatar)
    res.send(`OK`)
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;
    const avatar = users.get(username)
    tweets.push({username, avatar, tweet})
    res.send(`OK`)
})

app.get('/tweets', (req, res) => {
    let returnedTweets = []
    const size = tweets.length - 1
    const start = size > 10 ? size - 10 : 0
    console.log(`start ${start} size ${size}`)
    for (let i = start; i < size; i++) {
        console.log(i)
        returnedTweets.push(tweets[i])
    }
    console.log('cheguei aqui')
    res.send(returnedTweets)
})

app.listen(5000)