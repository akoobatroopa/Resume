var navs = document.getElementsByClassName("directory");
var navs2 = document.getElementsByClassName("directory2");
var sections = document.getElementsByClassName("sections");



window.addEventListener("scroll",function () {
	location_check();
});
window.addEventListener("load",function () {
	location_check();
});


window.addEventListener("resize", function () {
	var navbar=document.getElementById("navbar-norm");
  	var collapse=document.getElementById("myNavbar");
	if(document.body.clientWidth < 868) {
	  	navbar.classList.add("hidden-nav");
  		navbar.classList.remove("visible-nav");
  		collapse.classList.add("visible");
  		collapse.classList.remove("hidden");
  	}
  	else {
  		navbar.classList.add("visible-nav");
  		navbar.classList.remove("hidden-nav");
  		collapse.classList.add("hidden");
  		collapse.classList.remove("visible");
  	}
}, false);	

function location_check () {
	if (window.scrollY < getOffset(sections[0].id).top - 250) {
		changeActive(5);
	}	
	else if (window.scrollY < getOffset(sections[1].id).top - 250) {
		changeActive(4);
	}
	else if (window.scrollY < getOffset(sections[2].id).top - 250) {
		changeActive(3);
	}	
	else if (window.scrollY < getOffset(sections[3].id).top - 250) {
		changeActive(2);
	}
	else {
		changeActive(1);
	}	
}

function changeActive(active) {
	var i = 1;
	for (i;i<=5;i++){
		if (active == i) {
			navs[i].style.color="#3366cc";
			navs2[5-i].style.color="black";

		}
		else {
			navs[i].style.color="white";
			navs2[5-i].style.color="white";

		}
	}

}
