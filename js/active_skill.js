function active_skill(a_skill, a_button) {
	var skills = document.getElementsByClassName('skill-item');
	var skil = document.getElementsByClassName('skill-content');;
	for (var i = 0;i<skills.length;	i++) {
		if (skills[i].id === a_button) {
			skills[i].classList.add("active");
			skil[i].classList.add("active-skill");
		}
		else {
			skills[i].classList.remove("active");
			skil[i].classList.remove("active-skill")
		}
	}
}