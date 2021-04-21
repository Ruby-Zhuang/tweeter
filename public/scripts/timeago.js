/*
 * Client-side JS logic to implement timeago for tweets
 * jQuery is already loaded
 */
$(document).ready(function() {
  timeago.render(document.querySelectorAll('.timeago'));    // need to use document.querySelectorAll instead of $();
});
