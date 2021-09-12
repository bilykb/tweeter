

$(document).ready(function() {
  console.log("DOM is loaded");

  $(".tweet-text").on("input", function() {
    const numOfCharsInText = $(this).val().length;
    const remainingChars = `${140 - numOfCharsInText}`;
    const counterUI = $(this).closest("section").find("output").html(remainingChars);

    if (remainingChars <= 10 && remainingChars > 0) {
      $(counterUI).css("color", "#E5CB20");
    } else if (remainingChars <= 0) {
      $(counterUI).css("color", "#C70000");
    } else {
      $(counterUI).css("color", "#545149");
    }
  });
});