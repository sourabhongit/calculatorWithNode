const express = require("express");

const app = express();

const bodyParser = require("body-parser");
// to use body parser & its allows to get data from form
    app.use(bodyParser.urlencoded({extended: true}
));

app.listen(3000, function() {
    console.log("Server Started");
});

app.get("/", function(req, res) {
    // use "res.sendFile" to send a file as a responce
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    // sending result back
    res.send("Result is " + result);
});

// For BMI Calculator
app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res){
    var weightBMI = parseFloat(req.body.weight);
    var heightBMI = parseFloat(req.body.height);
    var result = weightBMI / (heightBMI * heightBMI);
    res.send("Your BMI is " + result);
});

// use "npm install body-parser" to allow pass of value from index.html form
// and we have to require body-parser above

