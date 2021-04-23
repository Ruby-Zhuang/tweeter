/*
 * Client-side JS logic to render tweets
 * jQuery is already loaded
 */

const resetForm = function() {
  $('#tweet-text').val('');  // Clear textarea
  $('.counter').text(140);   // Reset counter
};

const loadNewTweet = function() {
  // GET request to the /tweets endpoint using AJAX to get all the tweets (default is JSON)
  $.ajax('/tweets')
    .then((tweets) => {
      // Get last/most recent tweet element and prepend it
      const newTweet = tweets[tweets.length - 1];
      const newTweetElement = createTweetElement(newTweet);
      $('#tweets-container').prepend(newTweetElement);
    });
};

// Fetch and load all the current tweets (this only occurs once at the beginning)
const loadTweets = function() {
  // GET request to the /tweets endpoint using AJAX to get all the tweets (default is JSON)
  $.ajax('/tweets')
    .then((tweets) => {
      renderTweets(tweets);
    });
};

/*
 * Render all the tweets in the tweet-container section
 * Input: an array of tweet objects
 * Function: calling createTweetElement on each tweet object and appending each one to the #tweets-container
 */
const renderTweets = function(tweets) {
  const orderedTweets = tweets.sort((a, b) => b.created_at - a.created_at); // Sorts with most recent tweets first
  for (const tweet of orderedTweets) {
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
  const tweetContent = escape(tweet.content.text);
  
  // Tweet footer
  const dateCreated = timeago.format(tweet.created_at);
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
        <span>${dateCreated}</span>
        <span>${icons}</span>
      </footer>
    </article>
  `;

  return $tweet;
};

//Preventing XSS with escaping
const escape = function(strFromUser) {
  const div = document.createElement('div');
  const strFromUserNode = document.createTextNode(strFromUser);
  div.appendChild(strFromUserNode);

  const safeStrFromUser = div.innerHTML;
  return safeStrFromUser;
};
