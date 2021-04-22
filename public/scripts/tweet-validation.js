/*
 * Client-side JS logic to handle tweet validation
 * jQuery is already loaded
 */

const tweetValidation = function() {
  const maxChar = 140;
  const charCounter = $('#tweet-text').val().trim().length;
  const charAvailable = maxChar - charCounter;
  let errorResult = null;

  // Error for exceeding character limit
  if (charAvailable < 0) {
    return `<div><i class="fas fa-ban"></i><span><strong>Error:</strong> Exceeded character count!</span></div>`;
  }

  // Error for nothing entered
  if (charCounter === 0) {
    return `<div><i class="fas fa-ban"></i><span><strong>Error:</strong> Please enter a valid tweet!</span></div>`;
  }

  return errorResult;
};
