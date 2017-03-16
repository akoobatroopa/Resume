function hashredirect(loc) {
	var el = getOffset(loc);
	var yloc = window.scrollY
	$('html,body').animate({ scrollTop: el.top-85 }, 500);
	

	//window.scrollTo(el.left,el.top - 90 );
	history.replaceState(undefined,undefined,'');

}
function getOffset(el) {
  el = document.getElementById(el).getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

function openMenu() {
	var x = document.getElementsByClassName("menu");
	var y = document.getElementById("myNavbar");
	var z = document.getElementsByClassName("dropbtn");	
	addC(z[0],"gray");
	addC(z[1],"gray");
	addC(y,"gray");
	addC(x[0],"gray");
	addC(x[1],"gray");
	x[0].style="display:none;";
	x[1].style="display:block;";
}
function closeMenu() {
	var x = document.getElementsByClassName("menu");
	var y = document.getElementById("myNavbar");
	var z = document.getElementsByClassName("dropbtn");	
	removeC(z[0],"gray");
	removeC(y,"gray");
	removeC(x[0],"gray");
	removeC(x[1],"gray");
	x[0].style="display:block;";
	x[1].style="display:none;";
}

function addC(classy , thing) {
	classy.classList.add(thing);
}

function removeC(classy, thing) {
	classy.classList.remove(thing);
}

