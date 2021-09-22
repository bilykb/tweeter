import { escape } from './escape.js';


/**
 * Function that contains the html template for new tweets
 * @param {object} tweetData 
 * @returns html template
 */

export const createTweetElement = function(tweetData) {
    
  return `<article class="tweet">
    <header>
      <div class="apply-flex align-items-center">
        <img class="tweet-feed-photos" src="${tweetData.user.avatars}" alt="Profile Picture" >
        <span>${tweetData.user.name}</span>
      </div>
      <span class="user-handle heavy-font">${tweetData.user.handle}</span>
    </header>
    <footer>
     <span class="tweet-text">
       <span>${escape(tweetData.content.text)}</span>
      </span>
      <div class="posted-text-info">
        <span id="update-time">${timeago.format(tweetData.created_at)}</span>
        <div>
          <i class="fas fa-flag"></i>
         <i class="fas fa-retweet"></i>
         <i class="fas fa-heart"></i>
       </div>
      </div>
   </footer>
  </article>`
};
