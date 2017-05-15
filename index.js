const express = require("express");
const app = express();

let env = process.env.NODE_ENV =  process.env.NODE_ENV || "development";

let config =  require("./server/config/config")[env];


require("./server/config/express")(app,config);
require("./server/config/routes")(app,config);
