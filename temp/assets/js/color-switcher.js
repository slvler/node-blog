/*
Template: Jura
Author: Designs Ninja
Version: 1.0
Designed and Development by: https://themeforest.net/user/designsninja
*/

/* Styles Switcher
------------------------------------------------------------------------ */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"
	
	$("ul.colors .color1" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style.css" );
		return false;
	});

	$("ul.colors .color2" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-dark.css" );
		return false;
	});

	$("ul.colors .color3" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-orange.css" );
		return false;
	});

	$("ul.colors .color4" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-pink.css" );
		return false;
	});

	$("ul.colors .color5" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-blue.css" );
		return false;
	});

	$("ul.colors .color6" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-green.css" );
		return false;
	});

	$("ul.colors .color7" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-grey.css" );
		return false;
	});
	$("ul.colors .color8" ).click(function(){
		$("#colors" ).attr("href", "assets/css/style-red.css" );
		return false;
	});

	$("#color-style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#color-style-switcher");
		if (div.css("left") === "-189px") {
			$("#color-style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#color-style-switcher").animate({
				left: "-189px"
			});
		}
	})

	$("ul.colors li a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find("a").removeClass("active");
		$(this).addClass("active");
	})
	
});



//Inject Necessary Styles and HTML
//jQuery('head').append('<link rel="stylesheet" id="colors" href="css/color1.css" type="text/css" />');
jQuery('head').append('<link rel="stylesheet" href="lib/switcher/css/color-switcher.css" type="text/css" />'); 

jQuery('body').append('' + 
	'<div id="color-style-switcher">' +
		'<div>' + 
			'<h3>Color Palette</h3>' +
			'<!--div class="color-picker">color 1 : <input id="color1" class="jscolor" value="5b5efa" onchange="update(this.jscolor)"></div>'+
			'<div class="color-picker">color 2 : <input id="color2" class="jscolor" value="fff21e" onchange="update(this.jscolor)"></div>'+
			'<div class="color-picker">color 3 : <input id="color3" class="jscolor" value="ff4d57" onchange="update(this.jscolor)"></div-->'+
			'<ul class="colors">' +
				'<li><a class="color1 active" href="#"></a></li>' +
				'<li><a class="color2" href="#"></a></li>' +
				'<li><a class="color3" href="#"></a></li>' +
				'<li><a class="color4" href="#"></a></li>' +
				'<li><a class="color5" href="#"></a></li>' +
				'<li><a class="color6" href="#"></a></li>' +
				'<li><a class="color7" href="#"></a></li>' +
				'<li><a class="color8" href="#"></a></li>' +
			'</ul>' +
		'</div>' +
		'<div class="bottom"> <a href="#" class="settings"><i class="icofont icofont-paint"></i></a> </div>' +
	'</div>' +
'');
