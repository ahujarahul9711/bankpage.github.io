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
var checkSideBar = function()
{
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if(width >= 1020)
	{
		document.getElementById('sidebarid').style.display="inline";
		document.getElementById('sidebarid').style.width="15rem";
	}
	else
	{
		document.getElementById('sidebarid').style.display="none";
		document.getElementById('sidebarid').style.width="0";
	}
}
var changeLayout = function()
{
	var mod1 = document.getElementById("options");
	mod1.classList.remove('desktop-only');
	mod1.classList.add('table-view-only');

	var mod2 = document.getElementById("tableheading");
	mod2.classList.remove('desktop-only');
	mod2.classList.add('table-view-only');

	var ele = document.getElementsByClassName("slds-large-size_1-of-1");
	var i;
	for(i=0; i < ele.length; i++)
	{
		ele[i].classList.add('slds-large-size_1-of-3');
		ele[i].classList.remove('slds-large-size_1-of-1');
	}
}

