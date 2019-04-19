const obj2gltf = require("obj2gltf");
const fs = require("fs");
const data_dir = 'D:/suncg/';
const house_id = 'b6ef8e1b68ff811454eda42d81ce2c62';
const house_config = JSON.parse(fs.readFileSync( data_dir + 'house/' + house_id + '/house.json'));
const dir = './scenes/' + house_id + '/';
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
var obj_to_gltf = function(obj_path, gltf_path){
    obj_path = obj_path + '.obj';
    gltf_path = gltf_path + '.gltf';
    if(!fs.existsSync(obj_path)){
        console.log(obj_path + ': does not exist! ');
        return
    }
    obj2gltf(obj_path)
        .then(function(gltf) {
            const data = Buffer.from(JSON.stringify(gltf));
            fs.writeFileSync(gltf_path, data);
        });
};
house_config.levels.forEach(function(level){
   let nodes = level.nodes;
   nodes.forEach(function(node){
       console.log(node.modelId);
       if(node.type === 'Room'){
           let fname = node.modelId + 'c';
           obj_to_gltf(data_dir + 'room/' + house_id + '/' + fname, dir + fname);
           fname = node.modelId + 'f';
           obj_to_gltf(data_dir + 'room/' + house_id + '/' + fname, dir + fname);
           fname = node.modelId + 'w';
           obj_to_gltf(data_dir + 'room/' + house_id + '/' + fname, dir + fname);
       }else if(node.type === 'Object'){
           let fname = node.modelId;
           obj_to_gltf(data_dir + 'object/' + fname + '/' + fname, dir + fname);
       }else if(node.type === 'Ground'){
           let fname = node.modelId + 'f';
           obj_to_gltf(data_dir + 'room/' + house_id + '/' + fname, dir + fname);
       }
   })
});
fs.readFile(data_dir + 'house/' + house_id + '/house.json', function (err, data) {
    if (err){
        throw err;
    }
    fs.writeFile(dir + 'house.json', data, function (err) {
        if (err){
            throw err;
        }
        console.log("House.json file was saved! ");
    })
});
