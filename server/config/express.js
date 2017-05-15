const express = require('express');
const path = require("path");

module.exports = (app,config)=> {
    app.use(express.static('public'));

    app.listen(config.port, function (err) {
        if(err){
            console.log(err);
        }
        else{
            console.log('running server on port ' + config.port);
        }
    });

}
