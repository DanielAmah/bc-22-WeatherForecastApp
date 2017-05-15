const path = require("path");
const rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development:{
        rootPath:rootPath,
        port:process.env.PORT||8080
    }
};