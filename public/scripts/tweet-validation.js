/*
 * Client-side JS logic to handle tweet validation
 * jQuery is already loaded
 */

const tweetValidation = function() {
  const maxChar = 140;
  const charCounter = $('#tweet-text').val().length;
  const charAvailable = maxChar - charCounter;
  let errorResult = null;

  // Error for exceeding character limit
  if (charAvailable < 0) {
    return "Exceeded character count!";
  }

  // Error for nothing entered
  if (charCounter === 0) {
    return "Please enter a valid tweet!";
  }

  return errorResult;
};
