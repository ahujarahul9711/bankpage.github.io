// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://reqres.in/api/products/3", true);
// xhr.onload = function(){
//     console.log(xhr.responseText);
// };
// xhr.send();
window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload();
});
var expand = function(id)
{
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if(width < 1020){
	var cla = document.getElementById(id).classList
	if(cla.contains('slds-is-open'))
	{
			cla.remove('slds-is-open')
	}
	else
	{
			cla.add('slds-is-open')
	}
}
}
var showSideBar = function ()
{
	document.getElementById('sidebarid').style.display="inline";
	document.getElementById('sidebarid').style.width="15rem";
}
var closeSideBar = function ()
{
	document.getElementById('sidebarid').style.display="none";
	document.getElementById('sidebarid').style.width="0";
}
var resetLayout = function()
{
	 window.location.reload(); 
}
var changeLayout = function()
{
	var mod2 = document.getElementById("tableheading");
	mod2.classList.remove('desktop-only');
	mod2.classList.add('desktop-card-view');

	var i;
	var mod = document.getElementById("maincontent")
	var mod1 = mod.querySelectorAll(".slds-large-size_1-of-1");
	for(i=0; i<mod1.length; i++)
	{
		mod1[i].classList.remove('slds-large-size_1-of-1');
		mod1[i].classList.add('slds-large-size_1-of-4');
	}
	var mod2 = mod.querySelectorAll(".grid-relative");
	for(i=0; i<mod2.length; i++)
	{
		mod2[i].classList.remove('grid-relative');
		mod2[i].classList.add('grid-desktop-card');
	}
	var mod3 = mod.querySelectorAll(".image-section");
	for(i=0; i<mod3.length; i++)
	{
		mod3[i].classList.remove('image-section');
		mod3[i].classList.add('image-desktop-card');
	}
	var mod4 = mod.querySelectorAll(".image-3dot");
	for(i=0; i<mod4.length; i++)
	{
		mod4[i].classList.remove('image-3dot');
		mod4[i].classList.add('image-3desktop-card');
	}
	var mod5 = mod.querySelectorAll(".slds-large-size_4-of-12");
	for(i=0; i<mod5.length; i++)
	{
		mod5[i].classList.remove('slds-large-size_4-of-12');
		mod5[i].classList.remove('padding-content-left');
		mod5[i].classList.add('slds-large-size_1-of-1');
	}
	var mod6 = mod.querySelectorAll(".slds-large-size_2-of-12");
	for(i=0; i<mod6.length; i++)
	{
		mod6[i].classList.remove('slds-large-size_2-of-12');
		mod6[i].classList.remove('padding-content-left');
		mod6[i].classList.add('slds-large-size_1-of-1');
	}
	var mod7 = mod.querySelectorAll(".slds-large-size_1-of-12");
	for(i=0; i<mod7.length; i++)
	{
		mod7[i].classList.remove('slds-large-size_1-of-12');
		mod7[i].classList.remove('padding-content-left');
		mod7[i].classList.add('slds-large-size_1-of-1');
	}
	var mod8 = document.getElementsByClassName("slds-button button_bottom mobile-only");
	for(i=0;i<mod8.length;i++)
	{
		mod8[i].style.display="inline";
		mod8[i].style.borderTop="1px solid rgba(151, 151, 151, 0.15)";
		mod8[i].style.width= "100%";
	}
	var mod9 = document.getElementsByClassName("slds-button desktop-only");
	for(i=0;i<mod9.length;i++)
	{
		mod9[i].style.display="none";
	}
	var mod10 = document.getElementsByClassName("font-secondary mobile-only");
	for(i=0;i<mod10.length;i++)
	{
		mod10[i].style.display="inline";
	}
	var mod11 = document.getElementsByClassName("font-primary desktop-only");
	for(i=0;i<mod11.length;i++)
	{
		mod11[i].style.display="none";
	}
}

