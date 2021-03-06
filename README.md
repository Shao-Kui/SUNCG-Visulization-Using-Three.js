# SUNCG Visulization 
This is a light-weight tool of visualizing [SUNCG][SUNCGGITHUB] dataset, based on [three.js][threejs]. With a single .html file and several easy configurations, users can explore rooms in first-person view, i.e., W/A/S/D/C/Space. 

![FirstGlance](./scenes/example.png)

# To Use
This tool can be used as easy as a single click! Just be careful of the following. 
## First-Person Navigation
The following keys are available for you to control:  
  
**W**: Move forward with respect to camera.  
**S**: Move backward with respect to camera.  
**A**: Move left with respect to camera.  
**D**: Move right with respect to camera.  
**C**: Go down with respect to the world coordinate (specifically, the y-axis).  
**Space**: Go up with respect to the world coordinate.  
**Mouse**: Navigate the view.  
**ESC**: Exit the first-person mode and get back the control of mouse cursor.  
## Preparing GLTF Models
SUNCG is originally based on .ojb/.mtl format. However, there are some problems of using the OBJLoader of three.js, so currently we should use a script to transform models into gltf-based ones. **I would be really grateful if anyone figures out how to correctly use OBJLoader, and the details of the problem is specified [here][objloader]**. 

To use [OBJ2GLTF][objgltf], node.js is required to install firstly. Then install the package: 
```
npm install -g obj2gltf
```

There are two lines of code we should modify before transforming:
```
const data_dir = 'D:/suncg/';
const house_id = 'b6ef8e1b68ff811454eda42d81ce2c62';
```
The first line is the root directory of suncg dataset, which is expected to be organized exactly same as the released suncg dataset. The second line is the id of house, which is one of the list in .../suncg/house/. The results are saved with the same directory of the script. See the current [demo](https://github.com/Shao-Kui/SUNCG-Visulization-Using-Three.js/tree/master/scenes). 
## Specifying IDs
Fortunately, there is only one line of code that we just need specify the house id in main.html after transforming the models. 
```
const house_id = '00e2eed27fb6b5c911624902888039ee';
```
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

***
If you find this tool useful, please cite our work with the following bibtex:
```
@article{asurveyof3didss,
author = {Song-Hai Zhang, Shao-Kui Zhang, Yuan Liang, Peter Hall},
title = {A Survey of 3D Indoor Scene Synthesis},
publisher = {Journal of Computer Science and Technology},
year = {2019},
journal = {Journal of Computer Science and Technology},
volume = {34},
number = {3},
eid = {594},
numpages = {14},
pages = {594},
url = {http://jcst.ict.ac.cn/EN/abstract/article_2532.shtml},
doi = {10.1007/s11390-019-1929-5}
}    
```

[threejs]:https://threejs.org
[skybox]:http://www.custommapmakers.org/skyboxes.php
[SUNCGGITHUB]:https://github.com/shurans/SUNCGtoolbox
[objgltf]:https://github.com/AnalyticalGraphicsInc/obj2gltf
[objloader]:https://stackoverflow.com/questions/54906697/three-js-can-not-load-texture-for-mtl-obj-files-parts-with-image-textures-are
