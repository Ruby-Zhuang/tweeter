/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const submitHandler = function(event) {
  event.preventDefault(); // Prevent page from refreshing
  const newTweet = $(this).serialize(); // Serializes form data into a query string

  $('#error-message').slideUp();
  
  // Tweet validation
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
    resetForm();
    addNewTweet();
  });
};

$(document).ready(function() {
  loadTweets();
  // Add event listener for submit on the new-tweet form
  $('.new-tweet form').on('submit', submitHandler);
});