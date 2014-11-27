

$(document).ready(function(){

	//Configuration variables
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

	//Image loop
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

	//Method that stops the slider loop
	function stopSlider(){
		clearInterval(interval);
	}

	//if its last slide go to position 1 (0px)
	$slideContainer.on("mouseenter", stopSlider).on("mouseleave", startSlider);


	//PAUSE BUTTON
	$btn2.on("click", function(){
		stopSlider();		
	});


	// a method that slides one slide either to the left or right
	function buttonSlide(operator){
		stopSlider();
		$slideContainer.animate(
		{"margin-left":  operator+width},
			animationSpeed,
			edgeOfSlides);
	}

	//Left button
	$btn1.on("click", function(){
		console.log("current slide is: " + currentSlide);
		
		if(currentSlide === 1){

			$slideContainer.css("margin-left", lastSlide);
			currentSlide = $slides.length;
		}else{
			buttonSlide("+=");
		}
		console.log("current slide is: " + currentSlide);
		currentSlide--;
	});

	//Right button
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


	startSlider();
	

});

