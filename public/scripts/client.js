/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



  const createTweetElement = function(tweetData) {
    // const $username = $("<span>")
    //   .text(tweetData.user.name)
    // const $avatar = $("<img>")
    //   .addClass("tweetFeedPhotos")
    //   .attr("src", tweetData.user.avatars)
    //   .attr("alt", "Profile Picture")
    // const $usernameAndAvatar = $('<div>')
    //   .addClass("apply-flex align-items-center")

    // $usernameAndAvatar
    //   .append($avatar, $username)
    
    // console.log($usernameAndAvatar)

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
            $counter.css("color", "#545149");
            $counter.val("140");
            fetchTweets();
          })
          .catch((error) => {
            if(error.status === 400) {
              $tweetText.css("background-color", "#E5CB20");
            }
          });
      }
  });
