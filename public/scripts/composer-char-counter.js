/*
 * Client-side JS logic to implement character counter for the tweet compose form
 * jQuery is already loaded
 */

$(document).ready(function() {
  $('.new-tweet textarea').on('input', inputEvent);
});

const inputEvent = function(event) {
  const maxChar = 140;
  const charCounter = $(this).val().length;
  console.log(maxChar - charCounter);
};
