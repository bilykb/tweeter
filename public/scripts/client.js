import { fetchTweets } from "./apiTweet.js";

$(document).ready(function client() {
  fetchTweets();

  /**
   * jQuery function which toggles .new-tweet when .write-new is clicked
   */

  $(".write-new").on("click", function () {
    $(".hide").toggle("5000");
  });

  $(window).scroll(() => {
    const $absoluteContainer = $(".absolute-container");

    $absoluteContainer.append(
      '<button class="scroll-to-top" onclick="scrollToTop()"><i class="fas fa-angle-double-up"></i></button>'
    )
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
