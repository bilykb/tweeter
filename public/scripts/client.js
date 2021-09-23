import { fetchTweets } from "./apiTweet.js";
import { scrollToTop } from "./scrollToTop.js"

$(document).ready(function client() {

  // included to load already existing tweets in database
  fetchTweets();

  /**
   * jQuery function which toggles .new-tweet when .write-new is clicked
   */

  $(".write-new").on("click", function () {
    $(".hide").toggle("5000");
  });

  /**
   * jQuery function which watches for scroll events.  If .scrollTop() >= 100 .scrollToTop class is visible.  Else, hidden.
   */
  $(window).scroll(() => {
    const $scrollToTop = $(".scroll-to-top");

    if ($(window).scrollTop() >= 100) {
      $scrollToTop.css({"visibility": "visible"});
    } else {
      $scrollToTop.css({"visibility": "hidden"});
    }
  });

  /**
   * jQuery function which watches for a click on .scroll-to-top button.  If clicked, scrollToTop() function fires.
   */

  $(".scroll-to-top").on("click", function() {
    scrollToTop();
  });

  /**
   * jQuery function which facilitates an AJAX post request to /tweets
   */

  $(".new-tweet").submit(function (event) {
    event.preventDefault($(this));
    const serializedData = $(this).serialize();
    const $error = $(".error");
    const $counter = $(".counter");
    const $tweetText = $(".tweet-text");
    const $hide = $(".hide");
    const $onSuccess = () => {
      $error.empty();
      $tweetText.val("");
      $counter.css("color", "rgb(244, 241, 236)");
      $counter.val("140");
      $hide.toggle("5000");
      fetchTweets();
    }

    if ($tweetText.val().length > 140) {
      $error.append(
        "<span>Tweets are allowed a max of 140 characters before submitting!</span>"
      );
      $error.slideDown(1000);
    } else {
      $.post("/tweets/", serializedData)
        .then($onSuccess)
        .catch((error) => {
          if (error.status === 400) {
            $tweetText.css("background-color", "#E5CB20");
          }
        });
    }
  });
});
