AFRAME.registerComponent('webpage', {
  schema: {
    // width: {type: 'number', default: 20},
    // height: {type: 'number', default: 20},
    // color: {type: 'color', default: '#AAA'},
    url: {type: 'string', default: 'https://en.wikipedia.org/wiki/Special:Random'},
    showBgd: {type: 'boolean', default: false}
  },

  /**
   * Initial creation and setting of the mesh.
   */
  init: function () {

  },

  update: function (oldData) {
    let data = this.data;
    let el = this.el;
    AFRAME.log('updating url to '+ data.url)

    // remove old elements
    // while (el.firstChild) {
    //   el.removeChild(el.firstChild);
    // }
    // let load = document.createTextNode('Loading…')
    // el.appendChild(load)

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const el = document.getElementById('htmlElement')
        // remove old elements
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }

        const head = this.responseXML.head
        const content = this.responseXML.body
        if (data.showBgd) {
          el.appendChild(head)
        }
        el.appendChild(content)
    }
    xhr.open("GET", "/" + data.url);
    xhr.responseType = "document";
    xhr.send();  
  }
});


