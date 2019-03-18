/* global AFRAME */

AFRAME.registerComponent('click-link-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
      AFRAME.log("click link button was clicked!");
      const l = getRandomLink()
      sceneEl.querySelectorAll('.webpage').forEach(el => {
        el.setAttribute('webpage', 'url', l)
      })
    });
  } 
});

function getRandomLink () {
  const doc = document.getElementById('htmlElement')
  const links = doc.getElementsByTagName('a')
  const i = getRandomInt(0, links.length)
  const l = links[4].href
  console.log(l)
  AFRAME.log(l)
  return l
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
