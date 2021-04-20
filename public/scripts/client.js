/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // need to use document.querySelectorAll instead of $();
  timeago.render(document.querySelectorAll('.timeago'));
});
