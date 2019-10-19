/*
 * Add and remove animations after the animation end.
 *
 */

const animateCSS = function (element, animationNames, callback) {
  const node = document.querySelector(element)

  if (!node) {
    // Null check for when people spam next route.
    return;
  }

  node.classList.add('animated');

  animationNames.forEach((animation) => {
    if (animation) {
      node.classList.add(animation)
    }
  }); 

  function handleAnimationEnd() {
    node.classList.remove('animated')

    animationNames.forEach((animation) => {
      node.classList.remove(animation)
    }); 

    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
};

exports.animateCSS = animateCSS;