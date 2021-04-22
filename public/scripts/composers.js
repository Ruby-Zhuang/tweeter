/*
 * Client-side JS logic to implement form togglng
 * jQuery is already loaded
 */

const composeHandler = function() {
  $('.new-tweet').slideToggle();
  $('#tweet-text').focus();
};

const handleScroll = function() {
  $('.fa-angle-double-up').show();

  $('.fa-angle-double-up').on('click', () => {
    $('.fa-angle-double-up').hide();
    $('.new-tweet').slideDown();
    $(window).scrollTop(0);
  });
};

$(document).ready(function() {
  $('.navbar').on('click', composeHandler);
  $(window).on('scroll', handleScroll);
});