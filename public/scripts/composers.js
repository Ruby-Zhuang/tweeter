/*
 * Client-side JS logic to implement form togglng and scrolling
 * jQuery is already loaded
 */

// Toggle the form and auto-focus inside the textarea when navbar compose button is clicked
const handleCompose = function() {
  $('.new-tweet').slideToggle('slow');
  $('#tweet-text').focus();
};

// Show/hide second toggle bottom on bottom/right corner if user scrolls a certain amount from the top
const handleScroll = function() {
  if ($(window).scrollTop() > 75) {
    $('#back-to-top-btn').show();
  } else {
    $('#back-to-top-btn').hide();
  }
};

// Scroll back to top and show focused form if second toggle button is clicked
const handleBackToTop = function() {
  $('.new-tweet').slideDown();
  $('#tweet-text').focus();
  $(window).scrollTop(0);
};

$(document).ready(function() {
  $('.navbar').on('click', handleCompose);            // Event listener for clicks on the navbar button
  $(window).on('scroll', handleScroll);               // Event listener for when user scrolls
  $('#back-to-top-btn').on('click', handleBackToTop); // Event listener for clicks on the lower right button
});