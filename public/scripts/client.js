/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const submitHandler = function(event) {
  event.preventDefault(); // Prevent page from refreshing
  const newTweet = $(this).serialize(); // Serializes form data into a query string

  // Always slide up before validation to hide error message before re-rendering if necessary
  $('#error-message').slideUp(400, function() {
    // Check for tweet errors and make AJAX request after error message slides up (so that new error if any won't be rendered right away)
    const tweetError = tweetValidation();
    if (tweetError) {
      $('#error-message').html(tweetError).slideDown('slow');
      return;
    }

    // POST request to the /tweets endpoint using AJAX only if there are no errors for the tweet
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: newTweet
    }).then(() => {
      // Reset new tweet form and load only the new tweet
      resetForm();
      loadNewTweet();
    });
  });
  
  
};

$(document).ready(function() {
  // Loads and renders current database of tweets
  loadTweets();
  // Add event listener for submit on the new-tweet form
  $('.new-tweet form').on('submit', submitHandler);
});