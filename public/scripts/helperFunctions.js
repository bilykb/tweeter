/**
 * Function that prevents
 */

export const escape = function(str) {
  let span = document.createElement("span")
  
  span.appendChild(document.createTextNode(str));
  return span.innerHTML
};