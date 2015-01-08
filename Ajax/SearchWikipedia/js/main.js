
//function for capitalizing a string
String.prototype.capitalize = function(){
	return this.charAt(0).toUpperCase() + this.slice(1);
}


function loadData(){


	var searchQuery = $("#searchWiki").val();
	var $wikiBody = $(".article-wrapper");

	//clear old data
	$wikiBody.text("");

	//key new york times
	var key = "d6773745696348ed0998cade68ceb08e:6:70696704";;

	//this url sends a request to Wikipedias web service API for the content specified
	 var wikiURL = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery;


    $.ajax({
        url: wikiURL,
        dataType: 'jsonp', 
        success: function(response){
            console.log(response);

            var articleTitle = response[1]; //title and link of article
            var articleText = response[2]; //summary text

            //if else so that the header isn't printed out if there isnt any results
            if(articleText.length > 0){
            	$wikiBody.append("<h1>Results for " + searchQuery.capitalize() + "</h1>"); //the title
            }else{
            	$wikiBody.append("<h2>No results - try again</h2>");
            }
            //iterates the response
            for(var i=0; i < articleText.length; i++){

            	articleHead = articleTitle[i]; 
            	articleStr = articleText[i];
            	var url = "http://en.wikipedia.org/wiki/" + articleHead;
            	//string that will be printed out on the page
            	$wikiBody.append("<h4><a href='"+ url + "'>" + articleHead + "</a></h4><p>" + articleStr + "</p><br>");
            }
        }

    });
	
	return false;

};




$(".form-horizontal").submit(loadData);