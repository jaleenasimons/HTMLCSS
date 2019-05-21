var autoeen = document.querySelector('#autoeen');

var animate = function () {
	autoeen.classList.toggle('animate');

}

autoeen.addEventListener('click', animate);




var autotwee = document.querySelector('#autotwee');

var animatetwee = function () {
	autotwee.classList.toggle('animatetwee');

}

autotwee.addEventListener('click', animatetwee);






// Desktop auto een rijden animatie pijl naar rechts


var desktopautoeen = document.querySelector('#autoeen');
console.log("jaaaaaa");


function pressKeystwee(key) {
	if (key.keyCode == "37") {
		desktopautoeen.classList.toggle('animatiedesktopeen')
		console.log("neeee");

	}
}

window.addEventListener("keydown", pressKeystwee, false);


// Desktop auto twee rijden animatie pijl naar links



var desktopautotwee = document.querySelector('#autotwee');
console.log("jaaaaaa");


function pressKeys(key) {
	if (key.keyCode == "39") {
		desktopautotwee.classList.toggle('animatiedesktoptwee')
		console.log("neeee");
	}
}

window.addEventListener("keydown", pressKeys, false);




// Armen


var armeen = document.querySelector('#arm_een');

var armpjeeen = function () {
	armeen.classList.toggle('armpjeeen');

}

armeen.addEventListener('click', armpjeeen);






var armtwee = document.querySelector('#arm_twee');

var armpjetwee = function () {
	armtwee.classList.toggle('armpjetwee');




}

armtwee.addEventListener('click', armpjetwee);




var armdrie = document.querySelector('#arm_drie');

var armpjedrie = function () {
	armdrie.classList.toggle('armpjedrie');




}

armdrie.addEventListener('click', armpjedrie);



// Blokje


var blokeen = document.querySelector('#blok_een');

var blokjeeen = function () {
	blokeen.classList.toggle('blok_eent');




}

blokeen.addEventListener('click', blokjeeen);



// Titel


var footer = document.querySelector('#footer');

var footertje = function () {
	footer.classList.toggle('footeranimatie');


}

footer.addEventListener('click', footertje);





// Wissen van hover

(function () {
	'use strict';

	if (!('addEventListener' in window)) {
		return;
	}

	var htmlElement = document.querySelector('.blokker_een');

	function touchStart() {
		htmlElement.classList.remove('blokker_eeen');

		htmlElement.removeEventListener('touchstart', touchStart);
	}

	htmlElement.addEventListener('touchstart', touchStart);
}());




(function () {
	'use strict';

	if (!('addEventListener' in window)) {
		return;
	}

	var htmlElement = document.querySelector('.footer');

	function touchStart() {
		htmlElement.classList.remove('foooter');

		htmlElement.removeEventListener('touchstart', touchStart);
	}

	htmlElement.addEventListener('touchstart', touchStart);
}());
