const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const tweet = require('./tweet');
const cache = require('./cache');

// Format tweet text
function formatAndSendTweet() {
    // Handle both individual items + bundle sales
    const tweetText = `test tweet!`;
    console.log(tweetText);
    return tweet.tweet(tweetText);
}

// Poll every 60 seconds & retrieve all tweets from AG to respond to
setInterval(() => {
    const lastTweet = moment().startOf('minute').subtract(59, "seconds").unix();
    //return formatAndSendTweet();
}, 60000);
