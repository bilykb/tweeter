/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(tweetData) {
    return `<article class="tweet">
    <header>
      <div class="apply-flex align-items-center">
        <img class="tweetFeedPhotos" src="${tweetData.user.avatars}" alt="Profile Picture" >
        <span>${tweetData.user.name}</span>
      </div>
      <span class="user-handle heavyFont">${tweetData.user.handle}</span>
    </header>
    <footer>
      <span class="tweet-text"><span>${tweetData.content.text}</span></span>
      <div class="posted-text-info">
        <span>${tweetData.created_at}</span>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </footer>
  </article>`
  }

  const renderTweets = function(tweets) {
    $("#tweet-container").empty();

    for (let postedTweet in tweets) {
      let $tweet = createTweetElement(tweets[postedTweet])

        $('#tweet-container').prepend($tweet);
    }
  };

  const fetchTweets = function() {
    $.get('/tweets')
    .then((data) => {
      renderTweets(data);
    });
  }
fetchTweets();

    $('.new-tweet').submit(function(event) {
    
    event.preventDefault();
    const serializedData = $(this).serialize();

    $.post("/tweets/", serializedData)

  });
});