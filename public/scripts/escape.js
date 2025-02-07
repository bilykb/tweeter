/**
 * Function that prevents cross site scripting.  Used in htmlTemplates.js for createTweetElement() function
 */

export const escape = function(str) {
  let span = document.createElement("span")
  
  span.appendChild(document.createTextNode(str));
  return span.innerHTML
};