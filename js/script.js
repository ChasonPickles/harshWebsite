/*jslint browser: true*/
/*global $, jQuery, alert*/

var main = function () { 
    $("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	 $('#slideshow > div:first')
	    .fadeOut(1000).promise().done(function(){ 
	    this.next().fadeIn(1000).end().appendTo('#slideshow');
		})}, 5000);

  $('.arrow-next').click(function (){
  	var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

  	if(nextSlide.length === 0) {}
  	else{
    // if(nextSlide.length === 0) {
    //   nextSlide = $('.slide').first();
    //   nextDot = $('.dot').first();
    // }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    }
  });


  $('.arrow-prev').click(function(){
  	var currentSlide = $('.active-slide');
	  var prevSlide = currentSlide.prev();

	  var currentDot = $('.active-dot');
	
  	if(prevSlide.length === 0) {}
  	else{
  		var prevDot = currentDot.prev();
	    // if(prevSlide.length === 0) {
	    //   prevSlide = $('.slide').last();
	    //   prevDot = $('.dot').last();
	    // }
	    prevDot.addClass('active-dot'); 
       
	    currentSlide.fadeOut(600).removeClass('active-slide')
      .promise().done(function(){
      prevSlide.fadeIn(600).addClass('active-slide');  
      });
	    
       
	    
    }
   });

  // $('contact-info').mouseover(function(){
  // 	(this)
  // })
    $(".contact-info").mouseover(function(){
      $(this).css("background-color", "black");
});
	$(".contact-info").mouseleave(function() {
      $(this).css("background-color", "transparent");
});

   $(".a1").click(function() {
     $('html,body').animate({
         scrollTop: $("#slideshow").offset().top -100},
         'slow')})
   $(".a2").click(function() {
     $('html,body').animate({
         scrollTop: $(".sep1").offset().top},
         'slow')})
   $(".a3").click(function() {
     $('html,body').animate({
         scrollTop: $(".projects").offset().top},
         'slow')})
   $(".a4").click(function() {
     $('html,body').animate({
         scrollTop: $(".playful").offset().top + 40},
         'slow')})
   $(".a5").click(function() {
     $('html,body').animate({
         scrollTop: $(".hackathon").offset().top},
         'slow')})
   $(".a6").click(function() {
     $('html,body').animate({
         scrollTop: $(".letsConnect").offset().top},
         'slow')})
   $(".a7").click(function() {
     $('html,body').animate({
         scrollTop: $(".letsConnect").offset().top},
         'slow')})

}

$(document).ready(main);