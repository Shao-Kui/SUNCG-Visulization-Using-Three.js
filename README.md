# SUNCG Visulization 
This is a light-weight tool of visualizing [SUNCG][SUNCGGITHUB] dataset, based on [three.js][threejs]. 

![FirstGlance](./scenes/example.png)

# Dependencies

# To Use
This tool can be used as easy as a single click! Just be careful of the following: 
## Preparing GLTF Models
SUNCG is originally based on .ojb/.mtl format. However, there are some problems of using the OBJLoader of three.js, so currently we should use a script to transform models into gltf-based ones. I would be really grateful if anyone figures out how to correctly use OBJLoader, and the details of the problem is specified [here][objloader]. 
## Specifying IDs
## Avoiding CORS
Since no server is required i.e.,only a single html file is needed to configurate and open, common issues could occur especially [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). Note to disable web security and allow files access: 
```
chrome.exe --disable-web-security --allow-file-access-from-files
```
I have merely tested it on chrome, so please tell me if other browsers encounter issues. 

# Still Under Working... ... ...
A demo is uploaded, a first glance of this tool is available. 

# Copyright
This tool is for research ONLY, which is NOT for any commercial usage! The skybox is from [http://www.custommapmakers.org][skybox]. 

[threejs]:https://threejs.org
[skybox]:http://www.custommapmakers.org/skyboxes.php
[SUNCGGITHUB]:https://github.com/shurans/SUNCGtoolbox
[objloader]:https://stackoverflow.com/questions/54906697/three-js-can-not-load-texture-for-mtl-obj-files-parts-with-image-textures-are
