/**
 * jQuery event method that keeps track of the number of characters in .tweet-text, changes the color of counter text depending on num of remaining chars
 */

$(document).ready(function characterCounter() {
  console.log("DOM is loaded");

  $(".tweet-text").on("input", function() {
    const $numOfCharsInText = $(this).val().length;
    const $remainingChars = `${140 - $numOfCharsInText}`;
    const $counterUI = $(this).closest("section").find("output").html($remainingChars);

    if ($remainingChars <= 10 && $remainingChars > 0) {
      $($counterUI).css("color", "#E5CB20");
    } else if ($remainingChars <= 0) {
      $($counterUI).css("color", "#C70000");
    } else {
      $($counterUI).css("color", "rgb(244, 241, 236)");
    }
  });
});