
module.exports = (app,config) =>{
    app.get("/", function (req,res) {
        res.sendFile(config.rootPath+"\public\\"+"\index.html");
    });

    app.get("/quiet.html", function (req,res) {
        res.sendFile(config.rootPath+"\public\\"+"\quiet.html");
    });

    app.get("/games.html", function (req,res) {
        res.sendFile(config.rootPath+"\public\\"+"\games.html");
    });

    app.get("/meet.html", function (req,res) {
        res.sendFile(config.rootPath+"\public\\"+"\meet.html");
    });

    app.get("/work.html", function (req,res) {
        res.sendFile(config.rootPath+"\public\\"+"\work.html");
    });
    app.get("/learn.html", function (req,res) {
        res.sendFile(config.rootPath+"\public\\"+"\work.html");
    });


};