(function(){
	var blognav = document.getElementsByTagName("nav");
	var blogspan = blognav[0].getElementsByTagName("span");
	var itemactive = document.getElementById(blogspan[0].className);
	var classe = itemactive.className + " active";
	itemactive.className = classe;
})();