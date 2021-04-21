/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const submitHandler = function(event) {
  event.preventDefault(); // Prevent page from refreshing
  const newTweet = $(this).serialize(); // Serializes form data into a query string

  // Tweet validation
  const tweetError = tweetValidation();
  if (tweetError) {
    return;
  }

  // POST request to the /tweets endpoint using AJAX only if there are no errors for the tweet
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: newTweet
  }).then(() => {
    $(this).find('#tweet-text').val('');  // Clear textarea
    $(this).find('.counter').text(140);   // Reset counter
  });
};

$(document).ready(function() {
  loadTweets();
  // Add event listener for submit on the new-tweet form
  $('.new-tweet form').on('submit', submitHandler);
});