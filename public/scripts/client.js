/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

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
  const $tweet =
    `<article class="tweet">
      <header>
        <span class="username"><img src="${avatarSrc}" alt="user-avatar"> ${name}</span>
        <span class="handle">${handle}</span>
      </header>
      <p>${tweetContent}</p>
      <footer>
        <span class="timeago" datetime="${dateCreated}"></span>
        <span>${icons}</span>
      </footer>
    </article>`;

  return $tweet;
};



$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});