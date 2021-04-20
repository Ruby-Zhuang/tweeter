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
  const charLeft = maxChar - charCounter;
  const counter = $(this).parent().find('.counter');

  counter.text(charLeft);

};
