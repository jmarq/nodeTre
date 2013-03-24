var express=require("express"),
    util   =require('util'),
    tweetGet=require('./tweetGet');

var app=express();//create  erver

//there will be a folder that is for static files to serve
app.use("/httpdoc/", express.static(__dirname+"/httpdoc/"));//http://projecturlblahblahblah.com/httpdoc/ will result in static stuff served from httpdoc folder

//app.use("/", express.static(__dirname+"/testFolder/")); //http://projecturlblahblahblah.com/ will result in static stuff served from testFolder

app.use("/dynamic/", function(req,res){//http://projecturlblahblahblah.com/dynamic/ will result in  stuff served from this function
    res.send("hi");
});

var numResults=5;
app.use("/",function(req,res){
    console.log("got a request! deal with it.");
    tweetGet.getTweets("#cookies",numResults,function(tweetJSON){

        res.send(tweetJSON);
    }); //tweetJSON.results[0].text --> first tweet, text from it (there are only 5 results)
});
    
    
app.listen(process.env.PORT);

//I think this should work? 
//it does.