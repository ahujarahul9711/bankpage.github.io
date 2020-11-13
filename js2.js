var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.responseType = 'json';
xhr.send();
let data;
xhr.onload = function(){
    //console.log(xhr.response.data);
    if(xhr.status == 200)
    {
    	data = xhr.response.data;
    	// console.log(xhr.response.data);
    	adddata();
    }

};

var adddata = function(){
	let x = "";
	for(let r of data)
	{
		x+= `<div class="slds-col slds-medium-size_1-of-3 slds-large-size_1-of-1">
				<div class="slds-grid grid-relative">
							<div class="slds-col">
								<div class="slds-grid slds-wrap">
									<div class="slds-align_absolute-center">
										<img class="image-section" alt="Headshot" src = ${r.avatar} title="Person" />
									</div>
									<div class="slds-align_absolute-center slds-order_3">
										<img class ="image-3dot" src="Images/threedots.png" alt="options"/>
									</div>
									<div class="slds-col slds-size_1-of-1 slds-align_absolute-center slds-large-size_4-of-12 padding-content-left">
										<span class="font-primary">${r.first_name}</span>
									</div>
									<div class="slds-col slds-size_1-of-1 slds-align_absolute-center slds-m-bottom_medium slds-large-size_2-of-12 remove-margin_bottom padding-content-left">
										<span class="font-secondary mobile-only">${r.email}</span>
										<span class="font-primary desktop-only">$ 821,213</span>
									</div>
									<div class="slds-col slds-size_1-of-1 slds-align_absolute-center slds-large-size_2-of-12 padding-content-left">
										<span class="font-secondary mobile-only">Total Contributions</span>
										<span class="font-primary desktop-only">$ 821,213</span>
									</div>
									<div class="slds-col slds-size_1-of-1 slds-align_absolute-center slds-large-size_2-of-12 padding-content-left">
										<span class="font-primary">$ 821,213</span>
									</div>
									<div class="slds-col slds-size_1-of-1 slds-large-size_1-of-12 slds-align_absolute-center padding-content-left">
										<button class="slds-button button_bottom mobile-only">
											View Details
										</button>
										<button class="slds-button desktop-only">
											<img class ="image-3dot" src="Images/view.png" alt="options" />View</button>
										</div>
									</div>
								</div>
							</div>
							</div>`;
	}
	document.getElementById('contentgrid').innerHTML = x;
 }
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

