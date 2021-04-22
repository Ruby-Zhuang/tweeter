/*
 * Client-side JS logic to implement form togglng
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
    $('.fa-angle-double-up').show();
  } else {
    $('.fa-angle-double-up').hide();
  }
};

// Back to top hander
const handleBackToTop = function() {
  $('.new-tweet').slideDown();
  $('#tweet-text').focus();
  $(window).scrollTop(0);
};

// Add event listeners for compose buttons when document is loaded
$(document).ready(function() {
  $('.navbar').on('click', handleCompose);
  $(window).on('scroll', handleScroll);
  $('.fa-angle-double-up').on('click', handleBackToTop);
});