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
    return `<div><i class="fas fa-ban"></i><span><strong>Error:</strong> your tweet exceeds thers character count!</span></div>`;
  }

  // Error for nothing entered
  if (charCounter === 0) {
    return `<div><i class="fas fa-ban"></i><span><strong>Error:</strong> your tweet is empty!</span></div>`;
  }

  return errorResult;
};
