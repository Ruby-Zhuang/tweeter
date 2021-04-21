/*
 * Client-side JS logic to handle tweet validation
 * jQuery is already loaded
 */

const tweetValidation = function() {
  const maxChar = 140;
  const charCounter = $('#tweet-text').val().length;
  const charAvailable = maxChar - charCounter;
  let errorResult = false;

  if (charAvailable < 0) {
    alert("Exceeded character count!");
    return true;
  }

  if (charAvailable === maxChar) {
    alert("Please enter a valid tweet!");
    return true;
  }

  return errorResult;
};
