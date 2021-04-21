/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

/*
 * Render all the tweets in the tweet-container section
 * Input: an array of tweet objects
 * Function: calling createTweetElement on each tweet object and appending each one to the #tweets-container
 */
const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  }
};

/*
 * Create HTML markup of a single tweet element
 * Input: a single tweet object
 * Return: <article> element containing entire HTML structure of the tweet
 */
const createTweetElement = function(tweet) {
  // Tweet header
  const name = tweet.user.name;
  const avatarSrc = tweet.user.avatars;
  const handle = tweet.user.handle;
  
  // Tweet content
  const tweetContent = tweet.content.text;
  
  // Tweet footer
  const dateCreated = tweet.created_at;
  const icons = `<i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i>`;
  
  // Create tweet markup
  const $tweet = `
    <article class="tweet">
      <header>
        <span class="username"><img src="${avatarSrc}" alt="user-avatar"> ${name}</span>
        <span class="handle">${handle}</span>
      </header>
      <p>${tweetContent}</p>
      <footer>
        <span class="timeago" datetime="${dateCreated}"></span>
        <span>${icons}</span>
      </footer>
    </article>
  `;

  return $tweet;
};

$(document).ready(function() {
  renderTweets(data);
});