/* global AFRAME */

AFRAME.registerComponent('reset-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      AFRAME.log("next button was clicked!");
      sceneEl.querySelectorAll('.webpage').forEach(el => {
        el.setAttribute('webpage', 'url', 'https://en.wikipedia.org/wiki/Human')
      })
    });
  } 
});
