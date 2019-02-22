WebVR Starter Kit: Make Your Own Deep Space Planetarium
=================
It's still a solar system, it's just not *our* solar system. This planetarium is a deep space planetarium. Procedural means it uses code to generate elements, so each time you refresh you get a new look to your system. 

A-Frame is an easy way to build your own WebVR (Web Virtual Reality) scenes. You don't need to install anything and scenes can be made with simple HTML. Our starter kits have code that can be easily [remixed](https://glitch.com/help/remix/) to create their own scenes. 

This is the fourth of four projects in our [WebVR starter kit](https://glitch.com/@glitch/web-vr-starter-kit). The other projects include:
1. 🌎[starter-aframe](https://glitch.com/~starter-aframe): Get started with your first A-Frame scene
2. ✨[starter-aframe-fancy](https://glitch.com/~starter-aframe-fancy): Add textures, models, and learn more about A-Frame's magic!
3. 💞[starter-aframe-animated](https://glitch.com/~starter-aframe-animated): Add animations and lighting

## 🔑 Key Tool: The A-Frame Inspector
We recommend you use the [A-Frame inspector](https://aframe.io/docs/0.8.0/introduction/visual-inspector-and-dev-tools.html), a powerful tool that comes with A-Frame and allows you to explore and modify the code of your scene visually. Open it by going to your scene and pressing `<ctrl> + <alt> + i` on Windows or `<ctrl> + <option> + i` on Mac.

![the A-Frame inspector](https://cdn.glitch.com/77ecffe2-9e20-4c26-b5d7-fd6c9e4a0d6e%2Faframe-inspector.png?1541721410592)

## 🚀 Exploring The Scene
The major difference here between this and the previous project is we use a cursor, which is in pink though you can change the color. In the browser you can click and drag to rotate your view of the scene and change the position of the cursor. Once the cursor is on a target you can click to click it. 

You can use your arrow keys to move left, right, backwards, and forwards. On a mobile device you can tilt the screen to rotate and drag to use the cursor. Tapping should click the cursor. 

In VR mode moving your head should change the view of the scene and control the cursor. 

We've added a [cursor](https://aframe.io/docs/0.8.0/components/cursor.html) so the buttons are actually usable in VR. In Google Cardboard for example just look at the buttons to place your cursor on them. Press the Cardboard's 
"input" (the physical button, usually at the top) when your cursor is over the button to press.

![how to use the cursor](https://cdn.glitch.com/6729b309-d357-422a-a949-678a843861a9%2Fcontrols-planet.gif?1541794103911)

## 📓 Our Project/Code
* README.md - a file with product instructions
* index.html - this is our scene, click "Show" to see it
* assets - a folder of goodies like models (3D shapes like asteroids) and images. [Check this out to learn how it works.](https://glitch.com/help/how-do-i/)
* restart-button.js - a demo of using a seperate file for custom components

## 💻 What the code does
### 🌚 🌝 Custom Shaders
These textures look pretty fancy, but they actually aren't images. They are from [**shaders**](https://aframe.io/docs/0.8.0/components/material.html#example-glsl-and-shaders). [Shaders](https://thebookofshaders.com/) basically use math to draw on the screen. They are a lot faster to load than images. 

We import the shader code like we did when we added components. Then to use our new shaders we just reference them by name. Like here we use `gas-giant-shader`

```
<a-sphere id="gas-giant" position="0 0 30" radius="2.5" mixin="rotation" gas-giant-shader></a-sphere>
```

Some of these shaders have optional attributes. Like `metallic-planet-shader` has an attribute that can be used to make the planet volcanic. If `metallic-planet-shader="volcanism: 0;"` it's not volcanic. If it's `metallic-planet-shader="volcanism: 1;"` it is.

The shaders here are taken from Three.js which are easily added to A-Frame since A-Frame [is also based on Three.js](https://aframe.io/docs/0.8.0/introduction/developing-with-threejs.html). The gradiant shader is from [Planet Generator on Glitch](https://glitch.com/~planet-generator) and the rest are from [Procedural Planetary Systems](https://github.com/everKalle/ProceduralPlanetarySystems).

The shaders are also Glitch projects, try remixing them yourself:
* [rocky-planet](https://glitch.com/~rocky-planet-shader)
* [star](https://glitch.com/~star-shader)
* [gradient](https://glitch.com/~gradient-planet-shader)
* [metallic](https://glitch.com/~metallic-planet-shader)
* [gas giant](https://glitch.com/~gas-giant-shader)

Also check out these other example shaders on Glitch:
* [Simple Shader](https://glitch.com/~aframe-simple-shader)
* [Displacement Shader](https://glitch.com/~aframe-displacement-registershader)


Want to learn more? Check these out:
* [Campfire VR](https://medium.com/@dirkk/campfire-vr-fa654d15e92a)
* [Converting shaders](https://hackernoon.com/converting-shaders-from-shadertoy-to-threejs-fe17480ed5c6)
* [Procedural planet](https://blogg.bekk.no/procedural-planet-in-webgl-and-three-js-part-2-33d99bbb2256)
* [Extending three.js materials with GLSL](https://medium.com/@pailhead011/extending-three-js-materials-with-glsl-78ea7bbb9270)
* [Book of Shaders](https://thebookofshaders.com/)

### 💥 Write Your Own Custom Components
The other starter kits brought in custom components from elsewhere to extend A-Frame. Here we make our own. There are two ways to add them. Our first is `pause-button` which we added directly inside a `<script>` tag in the `<head>` tag. 

The second is `restart-button` which is in a seperate file **restart-button.js** that we include using ` <script src="/restart-button.js"></script>`. This way of including a custom component is common because it's a way to keep your code organized and reuse the same code on many pages.

Most A-Frame projects use [Javascript to control the scenes](https://aframe.io/docs/0.8.0/introduction/javascript-events-dom-apis.html). You can also use frameworks like [React](https://www.npmjs.com/package/aframe-react).

* First we "register" our component with `AFRAME.registerComponent('component-name', { });`
* We define what the component acts on with Javascript variables
* Add event listeners to define what events the component should utilize 
* Within the event we use Javascript to define what happens
* Want to use the component? Add `component-name` to the thing you want to use it on. 

Like here we turn this `<a-entity>` into the `pause-button`:
```
<a-entity pause-button position="0 10 0" geometry="primitive: plane; width: 10; height: auto" material="color: #580B95; "></a-entity>
```


Basically though, the possibilities are as endless as Javascript itself! In our bonus [volcano kit](https://glitch.com/~a-volcano) a custom component is applied to the entire scene which adds dead trees to it in random places.


## 💫 Remix me!

[Remix](https://glitch.com/edit/#!/remix/starter-aframe-fancy) this to make your own planetarium. Some fun ideas:
* Remove the volcanism from the volcano planet (hint you change the value to 0)
* Add new planets with the custom shaders
* Add another star to create a binary star system
* Create custom controls to add new planets
* Use Javascript to create the planets themselves and generate them randomly upon refresh
* [Add more advanced controls for other VR headsets like Vive and Oculus](https://aframe.io/docs/0.8.0/introduction/interactions-and-controllers.html)
* Try adding `pause-button` to its own js file. 


## Credits
* [Planet Generator on Glitch](https://glitch.com/~planet-generator)
* [Procedural Planetary Systems](https://github.com/everKalle/ProceduralPlanetarySystems).