/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const data = [
   {
     "user": {
       "name": "Newton",
       "avatars": "https://i.imgur.com/73hZDYK.png"
       ,
       "handle": "@SirIsaac"
     },
     "content": {
       "text": "If I have seen further it is by standing on the shoulders of giants"
     },
     "created_at": 1461116232227
   },
   {
     "user": {
       "name": "Descartes",
       "avatars": "https://i.imgur.com/nlhLi3I.png",
       "handle": "@rd" },
     "content": {
       "text": "Je pense , donc je suis"
     },
     "created_at": 1461113959088
   }
 ]

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

  for (let [postedTweet] in tweets) {
    let $tweet = createTweetElement(tweets[postedTweet])

      $('#tweet-container').append($tweet);
  }
};

renderTweets(data);
  
});