$(document).ready(function(){
				 		
	$("body").fadeIn(600);
	
	document.addEventListener("deviceready", onDeviceReady, false);
   

    function onDeviceReady() {

        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    function onBackKeyDown() {
		navigator.app.exitApp();
    }
	
											
	$('#m1').hide().show(300);
	$('#m2').hide().show(300);
	$('#m3').hide().show(300);
	$('#m4').hide().show(300);
	$('#m5').hide().show(300);
	$('#m6').hide().show(300);
	$('#m7').hide().show(300);
	$('#m8').hide().show(300);
	$('#m9').hide().show(300);
	
	$('#menu1, #menu2, #menu3, #menu4, #menu5, #menu6, #menu7, #menu8, #menu9, #menu10').hide();
	$('.menu_off').hide();
	
	$('.menu_on').click(function(){
		$('#menu1').delay(100).show(200);
		$('#menu2').delay(200).show(200);
		$('#menu3').delay(300).show(200);
		$('#menu4').delay(400).show(200);
		$('#menu5').delay(500).show(200);
		$('#menu6').delay(600).show(200);
		$('#menu7').delay(700).show(200);
		$('#menu8').delay(800).show(200);
		$('#menu9').delay(900).show(200);
		$('#menu10').delay(1000).show(200);		
		$('.menu_on').hide();
		$('.menu_off').show();
	});
	
	$('.menu_off').click(function(){
		$('#menu1').delay(1000).hide(200);
		$('#menu2').delay(900).hide(200);
		$('#menu3').delay(800).hide(200);
		$('#menu4').delay(700).hide(200);
		$('#menu5').delay(600).hide(200);
		$('#menu6').delay(500).hide(200);
		$('#menu7').delay(400).hide(200);
		$('#menu8').delay(300).hide(200);
		$('#menu9').delay(200).hide(200);
		$('#menu10').delay(100).hide(200);	 	
		$('.menu_on').show();
		$('.menu_off').hide();
		
	});	

			
});