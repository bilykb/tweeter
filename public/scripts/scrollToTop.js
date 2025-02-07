/**
 * Function used with .scrollToTop button which allows user to scroll to top of page
 */

export const scrollToTop = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};