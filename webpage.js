async function getPage (url) {
  
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
      const el = document.getElementById('htmlElement')
      const head = this.responseXML.head
      const content = this.responseXML.body
      el.appendChild(head)
      el.appendChild(content)
  }
  xhr.open("GET", "/" + url);
  xhr.responseType = "document";
  xhr.send();  
}

AFRAME.registerComponent('webpage', {
  schema: {
    width: {type: 'number', default: 20},
    height: {type: 'number', default: 20},
    color: {type: 'color', default: '#AAA'},
    url: {type: 'string', default: 'http://example.com'}
  },

  /**
   * Initial creation and setting of the mesh.
   */
  init: async function () {
    var data = this.data;
    var el = this.el;

    getPage(data.url)  

    // Create geometry.
    // this.geometry = new THREE.PlaneGeometry(data.width, data.height);
    
    // var para = document.createElement("p");
    // var node = document.createTextNode("This is new.");
    // para.appendChild(node);
    // const canvas = await html2canvas(null)

    // Create mesh.
    // const texture = new THREE.TextureLoader().load( 'https://cdn.glitch.com/d558c128-2ed0-4284-a0da-4d18b9163ad6%2FGeneric_Celestia_asteroid_texture.jpg?1541189998715' );
    // this.material = new THREE.MeshBasicMaterial( { map: texture } );
    // this.mesh = new THREE.Mesh(this.geometry, this.material);

    // Set mesh on entity.
    // el.setObject3D('mesh', this.mesh);
  }
});
