import dotenv from 'dotenv';
import Snooper from 'reddit-snooper';
import express from 'express';
import { RedditSimple } from '@ipmanlk/reddit-simple';

const app = express();

app.set('port', process.env.PORT || 3000);

dotenv.config();

var snooper = new Snooper({
    app_id: process.env.REDDIT_CLIENT_ID,
    api_secret: process.env.REDDIT_CLIENT_SECRET,
    automatic_retries: true,
    api_requests_per_minute: 20
});


app.get("/random", async (req, res) => {
    let results = await RedditSimple.RandomPost("yerbamate");
    
    let i = 0;

    while (results[i].is_video == false) {
        i++
    }
    console.log(results[i]);

    res.send({data: results[i]});
});

app.get("/twitter/connect", (req, res) => {
    console.log("TODO");
})


app.listen(app.get('port'), () => {
    console.log("Running on port " + app.get('port'))
});




