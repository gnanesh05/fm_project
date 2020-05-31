var express= require("express");
var app=express();
var bodyparser=require("body-parser");
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("home1");
});

app.post("/result1", function(req,res){
	
	
	
	
	var calculate = {};
	var member={};
	
	 calculate.pipe = req.body.pipe;
	calculate.ptype = req.body.ptype;
	calculate.dis1 = req.body.dis1; 
	calculate.dis2 = req.body.dis2;
	calculate.pre1 = req.body.pre1;
	calculate.pre2 = req.body.pre2;
	calculate.fluid = req.body.fluid;
	calculate.flow_rate = req.body.flow_rate;
	calculate.pump_eff = req.body.pump_eff;
	calculate.pump_work = req.body.pump_work;
	calculate.dia1 = req.body.dia1;
	calculate.dia2 = req.body.dia2;
	calculate.fittings = req.body.fittings;
	calculate.eps = req.body.eps;
	calculate.len = req.body.len;
	calculate.d1  = req.body.d1;
	calculate.d2  = req.body.d2;
	calculate.d3  = req.body.d3;
	calculate.d4  = req.body.d4;
	member = req.body.member;
	
	res.render("calculate1", {calculate:calculate ,member:member });
	
});

app.post("/result2", function(req,res){
	
	
	
	
	var calculate = {};
	var member1={};
	
	 calculate.pdiff = req.body.prediff;
	calculate.ptype = req.body.ptype; 
    calculate.eps = req.body.eps;
	calculate.len = req.body.len;
	calculate.fluid = req.body.fluid;
	calculate.flow_rate = req.body.flow_rate;
	calculate.fittings = req.body.fittings;
	calculate.dia1 = req.body.dia1;
	calculate.dia2 = req.body.dia2;
	calculate.d1  = req.body.d1;
	calculate.d2  = req.body.d2;
	member1 = req.body.member1;
	
	res.render("calculate2", {calculate:calculate ,member1:member1 });
	
});


var port = process.env.PORT || 6000;
app.listen(port, function () {
  console.log("Server Has Started!");
});