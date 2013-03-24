var express=require('express'),
    engines=require('consolidate');//consolidate is a utility library that wraps up all the templating engines you have installed. 
    
var app=express();


app.engine("mustache", engines.hogan);//for .mustache files use the hogan engine
app.set("view engine", "mustache"); //when looking for a view, by default look for .mustache files
app.set("views", __dirname+"/views/");//when looking for views, look in /views by default

app.get("/", function(req,res){
    console.log("got request. gonna try to render response");
    var filler={texto:"blah blah blah"};//this object is gonna be used to fill up the template;
    res.render("templateTry", filler);//this sends a response based on the template n filler, things inside {{}} will be replaced by corresponding variables from filler. 
                                        //in this case, {{texto}} in /views/templateTry.mustache will be replaced by "blah blah blah"
    console.log("has it been rendered?");
    
    
    });
    
    
app.listen(process.env.PORT);