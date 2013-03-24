var async=require('async');

async.parallel([//an array of things you want to run asynchronously.  wrap them in functions that finish by calling a special callback function
//the callback takes an error and the results you want to return
      
    function(specialAsyncCallback){
     setTimeout(function(){specialAsyncCallback(null,1)},2000);//this will take 2 seconds
        
    },
    
    function(specialAsyncCallback){//this will be nearly immediate
      specialAsyncCallback(null,"suck it");
    }
    
],
// optional callback
function(err, results){//this will be called when every function in the array is done
    //results will hold an array of results that corresponds to the array of functions.
    if(err){console.log(err);}
    console.log("both finished!");
    console.log(results[0]);//will log "1"
    console.log(results[1]);//will log "suck it"
    
});