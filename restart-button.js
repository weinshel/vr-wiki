/* global AFRAME */

AFRAME.registerComponent('restart-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      console.log("next button was clicked!");
      sceneEl.querySelectorAll('.orbits').forEach((function(element) {
            element.emit('startOrbit')
       }));
    });
  } 
});