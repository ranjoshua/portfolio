/* check whether the sidebar is open or close in order to know if we should open it or close it*/

let toggelNavStatus = false;

let toggleNav = function(){
	let getSideBar = document.querySelector(".nav-sidebar");
	let getSideBarUL = document.querySelector(".nav-sidebar ul");
	let getSideBarLinks = document.querySelectorAll(".nav-sidebar ul li a");
	
	if (toggelNavStatus === false){
		getSideBarUL.style.visibility = "visible";
		getSideBar.style.width = "272px";
		for (let i = 0; i<getSideBarLinks.length; i++){
			getSideBarLinks[i].style.opacity = "1";
		}
		toggelNavStatus = true;
	}
	
	else if (toggelNavStatus === true){
		getSideBar.style.width = "50px";
		for (let i = 0; i<getSideBarLinks.length; i++){
			getSideBarLinks[i].style.opacity = "0";
		}
		getSideBarUL.style.visibility = "hidden";
		toggelNavStatus = false;
	}
}