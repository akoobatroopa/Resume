var navs = document.getElementsByClassName("directory");
var navs2 = document.getElementsByClassName("directory2");
var sections = document.getElementsByClassName("sections");

var navbar=document.getElementById("navbar-norm");
var collapse=document.getElementById("myNavbar");

window.addEventListener("scroll",function () {
	location_check();
	scrollbar_active(navbar,collapse);
});
window.addEventListener("load",function () {
	location_check();
	scrollbar_active(navbar,collapse);
	timeOfDay();
});


window.addEventListener("resize", function () {

  	scrollbar_active(navbar,collapse);
}, false);	

function scrollbar_active(navbar, collapse) {
	if(document.body.clientWidth < 920) {
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
}

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

function timeOfDay() {
	var timeOfDay = new Date();
	var timeOfDay = timeOfDay.getHours();
	if (timeOfDay >= 6 && timeOfDay<= 17) {
		var abo = document.getElementById("About");
		var git = document.getElementById("github");
		var pro = document.getElementById("Projects");
		var exp = document.getElementById("Experience");
		document.body.backgroundColor="#c1b08b";		
		exp.style.marginTop="-5px";
		exp.style.color="white"
		exp.style.backgroundColor="#333";
		pro.style.color="#303030";
		pro.style.backgroundColor="#b7b7b7";
		git.style.fill="black";
		abo.style.color="#303030";
		abo.style.backgroundColor="#b7b7b7"
		var cap = document.getElementById("capstone-pic");
		cap.src = "pics/capstone2.png"
	}
}