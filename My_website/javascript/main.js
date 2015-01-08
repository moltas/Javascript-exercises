

$(document).ready(function(){

	//will smooth scroll to the page when nav-menu links are clicked
	$(".nav-menu a").click(function(){
	  var pageId = $(this).attr("href");
	  //scrolls from the top based on the pageid offset
	  $("body").animate({scrollTop: $(pageId).offset().top - 85}, "slow");
	  //return false to stop browser from following the link
	  return false;

	});

	//animates the page to the top when the logo is clicked
	$(".logo a").click(function(){
		$("body").animate({scrollTop: 0}, "slow");
	})

	var pages = $("section");
	var header = $("header");
	var header_height = header.height();

	//Get the current color from links in header
	var currentColor = $("header a").css("background-color");

	//print stuff to the h1 logo
	// var display = $(".logo");


	$(window).scroll(function(){
		var scrollPos = $(this).scrollTop();

		//iterates each page and runs this function
		pages.each(function(){
			//top = how far it is to the top from current page
			var top = $(this).offset().top - header_height;
			//bottom of current page
			var bottom = top + $(this).height();

			if(scrollPos >= top && scrollPos <= (bottom - 10)){
				header.find("a").removeClass("active");
				pages.removeClass("active");


				$(this).addClass("active");
				header.find('.nav-menu a[href="#' + $(this).attr('id') + '"]').addClass('active');

				
			}
			//since the last page isn't as high as the other pages, I had to make a quick fix
			else if($(window).scrollTop() + $(window).height() == $(document).height()){
				header.find('.nav-menu a[href="#page3"]').removeClass('active');
				header.find('.nav-menu a[href="#page4"]').addClass('active');		
			}


		});


		if(scrollPos >= 930){
			$("header").addClass("scrollDisplay");
			$("header a").css( {color: "#000" } );
			$(".active").css( {"border-color": "#000"} );
			// $("header a:hover").css( {"border-bottom": "2px solid #000"} );
		}
		else if(scrollPos < 950){
			$("header").removeClass("scrollDisplay");
			$("header a").css( {color: "#fff" } );
			$(".active").css( {"border-color": "#fff"} );
		}

		//Imorgon, fixa så contact bordern funkar

	});
		
		


});