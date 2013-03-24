var http=require('http'),
    queryString=require("querystring");

var baseURL="http://search.twitter.com/search.json?";

var parseTweet = function(tweetJSON, result_count) {
    // parse and modify text
    var tweet_index=Math.floor(Math.random()*result_count);
    try {
        var tweet = tweetJSON.results[tweet_index];
        var tweet_txt = tweet.text;
        var tweet_hash = tweet.entities.hashtags;
    
        // remove hashtags
        var tweet_text = tweet_txt.replace(/#|@.+\s|http:\/\/.+/g, "");
    
        return tweet_text;
    } catch(err) {
        
    }
};

var getTweets=function(searchTerm,perPage,callbacko){//callbacko function should take twitter search result json object as argument.
    var dt="";//twitter data
    var options={q:searchTerm,rpp:perPage,include_entities:true, result_type:"mixed"};
    var optionString=queryString.stringify(options);
    var totalURL=baseURL+optionString;

    http.get(totalURL, function(res) {
        //console.log("Got twitter response! Gonna Read It!");
        res.on('data', function (chunk) {
            dt+=chunk;
        }).on("end",function(){//got the data, return it
                var parsed_data = parseTweet(JSON.parse(dt), perPage);
                
                callbacko(parsed_data);
                
        });
    }).on('error', function(e) {
                console.log("Wooooow. Got error: " + e.message);
        });


};

exports.getTweets=getTweets;//this will be the only thing exported
