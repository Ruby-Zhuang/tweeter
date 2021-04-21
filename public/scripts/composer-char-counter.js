/*
 * Client-side JS logic to implement character counter for the tweet compose form
 * jQuery is already loaded
 */

$(document).ready(function() {
  $('#tweet-text').on('input', inputEvent);
});

const inputEvent = function(event) {
  const maxChar = 140;
  const charCounter = $(this).val().length;
  const charAvailable = maxChar - charCounter;
  const counter = $(this).parent().find('.counter');

  //debugger
  // Change counter colour if user exceeds character limit
  if (charAvailable < 0) {
    counter.addClass('exceeded-limit');
  } else {
    counter.removeClass('exceeded-limit');
  }
  counter.text(charAvailable);
};

// 140 CHARACTERS TEST (DELETE AFTER)
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miasd