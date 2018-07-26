/* script for jQuery mia musician webpage*/

$(document).ready(function(){

	$(".specialYout").hover(
		function(){
			$(this).attr("src", "pictures/social-yout-white.png");
		}, function() {
			$(this).attr("src", "pictures/social-yout.png");
		}
	);
	
	$(".specialSpot").hover(
		function(){
			$(this).attr("src", "pictures/social-spot-white.png");
		}, function() {
			$(this).attr("src", "pictures/social-spot.png");
		}
	);
	
	$(".specialInsta").hover(
		function(){
			$(this).attr("src", "pictures/social-insta-white.png");
		}, function() {
			$(this).attr("src", "pictures/social-insta.png");
		}
	);
	
	$(".speciallogo").hover(
		function(){
			$(this).attr("src", "pictures/mia-logo-2.jpg");
		}, function() {
			$(this).attr("src", "pictures/mia-logo-1.jpg");
		}
	);
	
	$(".albumBorderOne").hover(
		function(){
			$(this).attr("src", "pictures/mia-1.gif");
		}, function() {
			$(this).attr("src", "pictures/mia-2005.jpg");
		}
	);
	
	$(".albumBorderTwo").hover(
		function(){
			$(this).attr("src", "pictures/mia-2.gif");
		}, function() {
			$(this).attr("src", "pictures/mia-2007.jpg");
		}
	);
	
	$(".albumBorderThree").hover(
		function(){
			$(this).attr("src", "pictures/mia-3.gif");
		}, function() {
			$(this).attr("src", "pictures/mia-2010-1.jpg");
		}
	);

	$(".albumBorderFour").hover(
		function(){
			$(this).attr("src", "pictures/mia-4.gif");
		}, function() {
			$(this).attr("src", "pictures/mia-2010-2.jpg");
		}
	);

	$(".albumBorderFive").hover(
		function(){
			$(this).attr("src", "pictures/mia-5.gif");
		}, function() {
			$(this).attr("src", "pictures/mia-2013.jpg");
		}
	);
	
	$(".albumBorderSix").hover(
		function(){
			$(this).attr("src", "pictures/mia-6.gif");
		}, function() {
			$(this).attr("src", "pictures/mia-2016.jpg");
		}
	);
	
	$(".clickme1").hover(
		function(){
			$(this).attr("src", "pictures/clickme1.jpg");
		}, function() {
			$(this).attr("src", "pictures/unite-1.jpg");
		}
	);
	
	$(".clickme2").hover(
		function(){
			$(this).attr("src", "pictures/clickme2.jpg");
		}, function() {
			$(this).attr("src", "pictures/unite-2.jpg");
		}
	);
		
	let people= 1;
	$("#imgButton").click(
		function(){
			if (people <11){
				$(".imageIncrease").append("<img src='pictures/merch-"+people+".jpg'>");
				people++;
			}
	});
	
	let person= 1;
	$("#imgButtonTwo").click(
		function(){
			if (person <2){
				$(".imageIncreaseTwo").append("<img src='pictures/merch-0-1.jpg'>");
				person++;
			}
	});
	
})
	

