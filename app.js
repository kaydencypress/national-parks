const express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  session = require("express-session"),
	  methodOverride = require("method-override"),
	  mongoose = require("mongoose"),
	  request = require("request"),
	  indexRoutes = require("./routes/index"),
	  flash = require("connect-flash");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(session({
	secret: "Apple pie and pancake picnic",
	resave: false,
	saveUninitialized: false
}));
app.use(flash());
app.locals.moment = require("moment");

app.use(indexRoutes);

app.listen(3000,()=>{
	console.log("Server started");
})