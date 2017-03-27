function nav_bar() {
  var navbar=document.getElementById('navbar-norm');
	var collapse=document.getElementById('myNavbar');
	if(document.body.clientWidth <920) {
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
nav_bar();