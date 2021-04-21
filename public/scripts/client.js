/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const submitHandler = function(event) {
  event.preventDefault();

  const newTweet = $(this).serialize();
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: newTweet
  }).then(() => {
    console.log(newTweet);
  });
};

$(document).ready(function() {
  // Add event listener for submit on the new-tweet form
  $('.new-tweet form').on('submit', submitHandler);
});