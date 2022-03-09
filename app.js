const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index")
});

app.get("/residential", function(req, res){
    res.render("residential")
});

app.get("/commercial", function(req, res){
    res.render("commercial")
});

app.get("/office", function(req, res){
    res.render("office")
});

app.get("/intro", function(req, res){
    res.render("intro")
});

app.get("/goal", function(req, res){
    res.render("goal")
});

app.get("/services", function(req, res){
    res.render("services")
});


app.listen(process.env.PORT || 3000);