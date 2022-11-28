"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const reddit_snooper_1 = __importDefault(require("reddit-snooper"));
const express_1 = __importDefault(require("express"));
const reddit_simple_1 = require("@ipmanlk/reddit-simple");
const app = express_1.default();
dotenv_1.default.config();
var snooper = new reddit_snooper_1.default({
    app_id: process.env.REDDIT_CLIENT_ID,
    api_secret: process.env.REDDIT_CLIENT_SECRET,
    automatic_retries: true,
    api_requests_per_minute: 20
});
app.get("/random", async (req, res) => {
    let results = await reddit_simple_1.RedditSimple.RandomPost("yerbamate");
    let i = 0;
    while (results[i].is_video == false) {
        i++;
    }
    console.log(results[i]);
    res.send({ data: results[i] });
});
app.get("/twitter/connect", (req, res) => {
    console.log("TODO");
});
app.listen(3000, () => {
    console.log("Running on localhost:3000");
});
//# sourceMappingURL=app.js.map