
// turbo simple ajax call, just getting everything
$(document).ready(function(){

	$.ajax({
	  'url': 'http://54.213.135.210:8983/solr/collection1/select',
	  'data': {'wt':'json', 'q':'*'},
	  'success': function(data) {
	   	console.log("Solr responses below, under response.docs:");
	   	console.log(data);
	   },
	  'dataType': 'jsonp',
	  'jsonp': 'json.wrf'
	});

});