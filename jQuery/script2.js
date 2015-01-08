

$(document).ready(function(){

	//Configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;


	//cache DOM
	var $slider = $("#container");
	var $slideContainer = $slider.find(".slides");
	var $slides = $slideContainer.find(".slide");


	var lastSlide = $slides.length * width;

	//Buttons
	var $buttons = $("#buttons");
	var $btn1 = $buttons.find(".btn1");
	var $btn2 = $buttons.find(".btn2");
	var $btn3 = $buttons.find(".btn3");

	var interval;

	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function(){
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css("margin-left", "0px");
				}	
			});	
		}, pause);
	}

	function stopSlider(){
		clearInterval(interval);
	}

	//if its last slide go to position 1 (0px)
	$slideContainer.on("mouseenter", stopSlider).on("mouseleave", startSlider);


	//PAUSE BUTTON
	$btn2.on("click", function(){
		stopSlider();		
	});



	function buttonSlide(operator){
		stopSlider();
		$slideContainer.animate(
		{"margin-left":  operator+width},
			animationSpeed,
			edgeOfSlides);
	}

	function edgeOfSlides(){
		if(currentSlide === $slides.length){
			currentSlide = 1;
			$slideContainer.css("margin-left", "0px");
		}else if(currentSlide === 1){
			currentSlide = $slides.length;
			$slideContainer.css("margin-left", "-5040px");
		}
	}


	$btn1.on("click", function(){
		
		console.log("current slide is: " + currentSlide);
		
		if(currentSlide === 1){

			$slideContainer.css("margin-left", "-4320px");
			currentSlide = $slides.length;
		}else{
			buttonSlide("+=");
		}
		console.log("current slide is: " + currentSlide);
		currentSlide--;
	});

	$btn3.on("click", function(){
		
		
		if(currentSlide > $slides.length){
			$slideContainer.css("margin-left", "0px");
			currentSlide = 1;
		
		}else{

			buttonSlide("-=");
				
		}
		console.log("current slide is: " + currentSlide);
		currentSlide++;
	});

	//startSlider();
	

});

