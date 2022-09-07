//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const greeting = "Hello there";
const title = "Here's who I am and what I do";
const bio = `I am Pulindu de Silva a product of University of Moratuwa. I have a bachelors degree in 
Electrical Engineering. Soon after graduating I worked as an Energy Engineer. But I wanted to change 
my field to web development because it was my passion since childhood. Since I am an eager to learn 
individual, I've earned a professional certificate on Google Automation with python from Coursera,and 
I have already enrolled for "The Complete 2022 Web Development Bootcamp" offered by Udemy and 
"Meta Front-End Developer Professional Certificate" offered by Coursera to strengthen my knowledge 
on Web development. To start my journey as a front-end/ full stack web developer I know these skills 
will come in handy.`

const formData = ["First Name", "Last Name", "E-mail","Subject", "Message"];

app.get("/", function (req, res) {
    res.render("about", { bioContent: bio, greeting: greeting, title: title });
});

app.get("/contact", function (req, res) {
    res.render("contact", { firstName: formData[0], lastName: formData[1], email: formData[2], subject: formData[3], message: formData[4] });
});

app.get("/:target", function (req, res) {
    const target = _.lowerCase(req.params.target);
    if (target !== "") {
        res.render("notFound");
        app.post("/notFound", function (req, res) {
            res.redirect("/");
        });
    }
});


let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
    console.log("Network Up and Running on port 3000");

});