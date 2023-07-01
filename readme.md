# Commands
- npx gltfjsx chair.glb  -i -T -S -R 256
- npx gltfjsx edit.glb  -T -R 256 -S --error .0001
  - used with the canyon, without the error flag it will have holes in it
- ctrl + alt + \ = hide controls

# Cool drei things
- MeshReflectorMaterial (medium)
- MeshRefractionMaterial (hard)
  - could be used for water
- MeshDistortMaterail (medium)
- Trail (hard)
- Positional Audio (Simple)
  - vanilla = webaudio_orientation
- [spotlight](https://threejs.org/examples/#webgl_lights_spotlight)
- shadows
- sparkles
- decals (hard)
- [instanced grass](https://codesandbox.io/s/grass-shader-5xho4?file=%2Fsrc%2FGrass.js)

# vanilla
- light hemisphere
- [rectarealight](https://threejs.org/examples/#webgl_lights_rectarealight)
- lines
- points / sprites 
- shaders / ocean
- playground
- points (fire)
- postprocessing effects (should switch to FXAA or SMAA since MSAA doesn't do great with PP)
- toon material

# questions 
how does shadowmap work?
- renderer.shadowMap.enabled = true
- [shadowmap example](https://github.com/mrdoob/three.js/blob/dev/examples/webgl_shadowmap_pointlight.html)

what is shadowMaterial?
how do lightmaps work?
is baking shadows worth it?
Can I use render order for creating a seamless flow?

# Links
- poly.pizza
- [three examples](https://github.com/mrdoob/three.js/blob/dev/examples)
- [viewer 1](https://gltf.report)
- [viewer 2](https://modelviewer.dev/editor)
- [viewer 3](https://sandbox.babylonjs.com)
- [ship, link and indicate changes made](https://sketchfab.com/3d-models/pirate-viva-34f6cb31cf264b79b8f023f769057fd0)
- [water, must include license](https://github.com/JMBeresford/lab/blob/main/LICENSE)
- [sword, must include license](https://sketchfab.com/3d-models/low-poly-pirate-sword-89bb2ffcd83043a29c5886d920497086)
- [how to create a theater sheet](https://tympanus.net/codrops/2023/02/14/animate-a-camera-fly-through-on-scroll-using-theatre-js-and-react-three-fiber)

# Examples
- [particle effect, can be used for under water](https://codepen.io/tr13ze/pen/pbjWwg?editors=0110)
- [ocean waves cartoony](https://github.com/JMBeresford/lab/tree/main/src/components/canvas/experiments/OceanicHorizon)

# Info
## Mobile
- window.devicePixelRatio 
  - if above 1 consider disabling AA
- set Far prop lower on mobile
- try setting max pixel ratio
## Materials
- basic is fastest but no shadowing
- lambert is next, then phong
- standard for quality
- textures should be power of 2 in size

## Other
- disable alpha buffer
- light.visible = false || light.intensiy = 0 instead of removing lights
- object.visible = false || material.opacity = 0 instead of removing object
- use CameraHelper to view frustum, the smaller this can be the better
- make shadow texture as low as possible
- object.matrixAutoUpdate = false for static object or rarely moved
- alphatest is faster than transparent obj
- bake lighting and shadows 
- use LOD object and only do cheap position/animation changes
- can use layers if changing visibility of several objects

## Stats
```
console.log("Scene polycount:", renderer.info.render.triangles)
console.log("Active Drawcalls:", renderer.info.render.calls)
console.log("Textures in Memory", renderer.info.memory.textures)
console.log("Geometries in Memory", renderer.info.memory.geometries)
```



- ocean = https://www.liquid.fish/current/threejs
- example = https://github.com/mrdoob/three.js/blob/master/examples/webgl_shaders_ocean.html