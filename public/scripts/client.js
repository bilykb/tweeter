/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

import { fetchTweets } from './apiTweet.js';

$(document).ready(function() {

  fetchTweets();

  $('.write-new').on('click', function() {
    $('.hide').toggle("5000");
  })

  $('.new-tweet').submit(function(event) {
      
    event.preventDefault($(this));
    const serializedData = $(this).serialize();
    const $error = $('.error');
    const $counter = $('.counter');
    const $tweetText = $('.tweet-text');

      if($tweetText.val().length > 140) {
          $error.append("<span>Tweets are allowed a max of 140 characters before submitting!</span>");
          $error.slideDown(1000);
      
      } else {
        $.post("/tweets/", serializedData)
          .then(() => {
            $error.empty();
            $tweetText.val("");
            $counter.css("color", "rgb(244, 241, 236)");
            $counter.val("140");
            $('.hide').toggle("5000");
            fetchTweets();
          })
          .catch((error) => {
            if(error.status === 400) {
              $tweetText.css("background-color", "#E5CB20");
            }
          });
      }
  });
});