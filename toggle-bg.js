/* global AFRAME */

AFRAME.registerComponent('toggle-bg', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      AFRAME.log("toggle bg button was clicked!");
      sceneEl.querySelectorAll('.webpage').forEach(el => {
        el.setAttribute('webpage', 'showBgd', true)
      })
    });
  } 
});
