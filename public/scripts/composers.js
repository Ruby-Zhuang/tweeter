/*
 * Client-side JS logic to implement form togglng and scrolling
 * jQuery is already loaded
 */

// Write a new tweet handler
const handleCompose = function() {
  $('.new-tweet').slideToggle('slow');
  $('#tweet-text').focus();
};

// Scroll hander
const handleScroll = function() {
  // Show scroll to top button only if user has scrolled a certain amount
  if ($(window).scrollTop() > 100) {
    $('#back-to-top-btn').show();
  } else {
    $('#back-to-top-btn').hide();
  }
};

// Back to top button hander
const handleBackToTop = function() {
  $('.new-tweet').slideDown();
  $('#tweet-text').focus();
  $(window).scrollTop(0);
};

// Add event listeners for compose buttons when document is loaded
$(document).ready(function() {
  $('.navbar').on('click', handleCompose);
  $(window).on('scroll', handleScroll);
  $('#back-to-top-btn').on('click', handleBackToTop);
});