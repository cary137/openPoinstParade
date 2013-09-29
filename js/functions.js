//GLOBAL VARIABLES
var thumbs = null;

//LAUNCH
////////////////////////////////////////////////////////////////////////////////////////////////
function launchFuncs(){
	//Load logo
	var logos = [
	"hank_frank_logo_purp.png",
	"hank_frank_logo_blue.png"
	];
	var rn = Math.floor(Math.random()*(logos.length));
	$('#logo').css("background-image", "url(assets/images/logo/"+logos[rn]+")");

	//Loads Random Image
	$(document).ready( function(){
		// thumbs = $("#art_thumbs li a img");
		thumbs = $("#art_thumbs .traditional img");	
		var rn = Math.floor(Math.random()*(thumbs.length - 1));		
		var image_URL = thumbs[rn].src;
	    $('#image').html('<div id="image_full" style="display:none;"><img class="full_item" src="'+image_URL+'"/></div>');
	    $(".full_item").load(function(){
	    	resizeFull();
	    })
	    $('#image_full').fadeIn(750);	
	});
}


//FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////////
function filterThumbs(set){
	$("#art_thumbs li").hide();
	if (set == "all"){
		$("#art_thumbs li").fadeIn();
		return;
	}
	else{
		//expecting "paint", "pencil_ink", or "digital"
		var thumbs = $("#art_thumbs li");
		$(thumbs).each(function(i){ 
			if ($(thumbs[i]).hasClass(set)){
				$(thumbs[i]).fadeIn();
			} 
		});	
	}	
}



//HANDLERS
////////////////////////////////////////////////////////////////////////////////////////////////
// displays large version
$(document).ready( function(){
	$('.item').click(function(){
	    var image_URL = $(this).attr('src');  
	    $('#image').html('<div id="image_full" style="display:none;"><img class="full_item" src="'+image_URL+'"/></div>');	    
	    $('#image_full').fadeIn(750);
	    $(".full_item").load(function(){
	    	resizeFull();
	    })
	});	
});

function resizeFull(){
	console.log("height");
	console.log($(".full_item").height());
	console.log("width");
	console.log($(".full_item").width());

	var iWidth = $(".full_item").width();
	var iHeight = $(".full_item").height();


	//landscape
    if ( iWidth > iHeight){
    	if ( iHeight > 456 ){
    		$(".full_item").width(456);	
    	}
    	else{
    		$(".full_item").width(540);
		}
    }

    //portrait
    if ( $(".full_item").height() > $(".full_item").width()){
    	$(".full_item").height(400);
    }
}

