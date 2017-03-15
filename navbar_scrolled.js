$(document).ready(function(){
	var scrollTop;
	var navbar=$(".navbar-norm");
	var collapse=$(".collapse-bar");
	var drpbtn=$(".dropbtn");

	$(window).scroll(function(){
	scrollTop = $(window).scrollTop();
    if (scrollTop >= 10) {
      navbar.addClass("scrolled-nav");
      collapse.addClass("collapse-bar-scrolled");
      drpbtn.addClass("collapse-drpbtn-scrolled");
    } else if (scrollTop < 10) {
      navbar.removeClass("scrolled-nav");
      collapse.removeClass("collapse-bar-scrolled");
      drpbtn.removeClass("collapse-drpbtn-scrolled");      
    } 
  }); 

});
