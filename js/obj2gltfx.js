const obj2gltf = require("obj2gltf");
const fs = require('fs');
obj2gltf('./obj/74.obj')
    .then(function(gltf) {
        const data = Buffer.from(JSON.stringify(gltf));
        fs.writeFileSync('model.gltf', data);
    });