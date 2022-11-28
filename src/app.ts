import dotenv from 'dotenv';
import Snooper from 'reddit-snooper';
import express from 'express';
import { RedditSimple } from '@ipmanlk/reddit-simple';

const app = express();

dotenv.config();

var snooper = new Snooper({
    app_id: process.env.REDDIT_CLIENT_ID,
    api_secret: process.env.REDDIT_CLIENT_SECRET,
    automatic_retries: true,
    api_requests_per_minute: 20
});


app.get("/random", (req, res) => {
    RedditSimple.RandomPost("yerbamate").then(res => console.log(res[0]));
});


app.listen(3000, () => {
    console.log("Running on localhost:3000")
});




