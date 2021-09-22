import { createTweetElement } from './htmlTemplates.js';

/**
 * Function that prepends new tweets onto #tweet-container
 * @param {object} tweets - an existing database of tweets found in server-side tweeter
 */

const renderTweets = function(tweets) {
  const $tweetContainer = $('#tweet-container');

  $tweetContainer.empty();

  for (let postedTweet in tweets) {
    let $tweet = createTweetElement(tweets[postedTweet])

    $tweetContainer.prepend($tweet);
  }
};

/**
 * Function that performs an AJAX get request to /tweets, and utilizes the renderTweets function in order to present the tweets
 */
  export const fetchTweets = function() {
    $.get('/tweets')
    .then((data) => {
      renderTweets(data);
    });
  };