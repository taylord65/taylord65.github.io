/*
* Logic to handle going to another route
* All the animations and things that go along with it

* Why is teabot to sun life an issue
*/
export function goToRoute(currentRoute, nextRoute, history, animateCSS, isTClick) {
  const routesWithoutScrollUp = ['/', '/sunlife'];
  const menuCloseTime = isTClick ? 0 : 320;

  const panelClass = '.scrollUpSection';

  setTimeout(() => {
    // Wait for menu to close 
    if (currentRoute === '/') {
      /*
      * On the home page, add the fade out
      * and then route to the new page when the animation is finished
      * Would  be cool if the three scene dismantled with some animation and then did this.
      */
      animateCSS('#three', ['fadeOut', 'faster'], () => {

        if (!routesWithoutScrollUp.includes(nextRoute)) {
          history.push(nextRoute);
          animateCSS(panelClass, ['fadeInUp', 'faster']);
        } else {
          history.push(nextRoute);
        }
      });
    } else {
      let delayForScroll = window.scrollY === 0 ? 0 : 220;

      document.body.scrollTop = document.documentElement.scrollTop = 0;

      setTimeout(() => {
        if (nextRoute === '/sunlife') {
          // Going to sun life, need to fade out the .scrollUpBack

          animateCSS('.cover', ['fadeOut', 'faster']); 
          animateCSS(panelClass, ['fadeOutDown', 'faster'], () => {
            history.push(nextRoute);
          }); 
        } else if (nextRoute === '/' && !routesWithoutScrollUp.includes(currentRoute)) {
          // Going from a page with scroll up to Home page

          animateCSS('.portfolio-feature', ['fadeOut', 'faster']);
          animateCSS(panelClass, ['fadeOutDown', 'faster'], () => {
            history.push(nextRoute);
          }); 
        } else {
          animateCSS('.cover', ['fadeOut', 'faster'], () => {
            // Going from page without scroll up to Home page

            history.push(nextRoute);

            // Fade in up the scroll up section if it appears for the first time
            if (!routesWithoutScrollUp.includes(nextRoute) && routesWithoutScrollUp.includes(currentRoute)) {
              animateCSS(panelClass, ['fadeInUp', 'faster']); 
            }
          }); 
        }
      }, delayForScroll);
    }
  }, menuCloseTime)
}