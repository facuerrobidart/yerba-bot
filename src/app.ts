import dotenv from 'dotenv';
import Snooper from 'reddit-snooper';
import { RedditSimple } from '@ipmanlk/reddit-simple';

dotenv.config();

var snooper = new Snooper({
    app_id: process.env.REDDIT_CLIENT_ID,
    api_secret: process.env.REDDIT_CLIENT_SECRET,
    automatic_retries: true,
    api_requests_per_minute: 20
});


RedditSimple.RandomPost("yerbamate").then(res => console.log(res[0]));
