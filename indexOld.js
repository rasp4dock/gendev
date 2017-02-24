var express = require("express");
//view engine setup(express-handlebars)

var app = express();
var handlebars  = require('express-handlebars')
        .create({defaultLayout: 'main'});
            
  app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set("port", process.env.PORT || 8080);

app.use(express.static(__dirname = "/public"));
var theySay = [
    "Whenever possible, keep it simple.",
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"We The People are the Universe and the change."

];



app.get("/", function(req, res){
    res.render("home");
    //res.type("text/plain");
 // res.send("Travel Austria and explore the Nature");  
    
});

app.get('/about', function(req,res){
	var wiseSayings = 
		theySay[Math.floor(Math.random() * theySay.length)];
	res.render('about', { theySay: wiseSayings})
	
});


//custom 404 catch all handler (middleware)
app.use(function(req, res, next){
    res.status(404);
    res.render("404");
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(app.get("port"), function(){
    console.log("Express started on https://workspace-ikam.c9users.io:" +
    app.get("port") +';press Ctrl-C to terminate');
})