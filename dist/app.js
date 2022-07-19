"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const reddit_snooper_1 = __importDefault(require("reddit-snooper"));
const reddit_simple_1 = require("@ipmanlk/reddit-simple");
dotenv_1.default.config();
var snooper = new reddit_snooper_1.default({
    app_id: process.env.REDDIT_CLIENT_ID,
    api_secret: process.env.REDDIT_CLIENT_SECRET,
    automatic_retries: true,
    api_requests_per_minute: 20
});
reddit_simple_1.RedditSimple.RandomPost("yerbamate").then(res => console.log(res[0]));
//# sourceMappingURL=app.js.map