/*
 * Client-side JS logic to implement form toggling using navbar compose section
 * jQuery is already loaded
 */

const composeHandler = function() {
  $('.new-tweet').slideToggle();
  $('#tweet-text').focus();
};

$(document).ready(function() {
  $('.navbar').on('click', composeHandler);
});