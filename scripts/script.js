(function() {
  'use strict';
  const menuBtn = document.getElementById('jsMobMenuBtn');
  const headerWrapper = document.body.querySelector('.header');
  
  menuBtn.addEventListener('click', () => {
    console.log('--open menu--');
    headerWrapper.classList.toggle('opened');
    menuBtn.classList.toggle('opened');
  });
})();
