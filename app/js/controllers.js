'use strict'; 

/* Controllers */

function HomeCtrl($scope, $http)
{
}
function bkCtrl($scope, $http)
{
}
function buCtrl($scope, $http)
{
}
function ncCtrl($scope, $http)
{
}
function doCtrl($scope, $http)
{
}
function tyCtrl($scope, $http)
{
}
function yyCtrl($scope, $http)
{
}
function nCtrl($scope, $http)
{
}
function rCtrl($scope, $http)
{
}
//-----------------------------------------------mobile Controller
function MobileHeaderCtrl(){

	var openButton = angular.element('header #menuButton'),
		mobileMenu = angular.element('header ul.navMenu'),
		lcl = angular.element('header ul.languageContainer li.localtion'),
		lcld = angular.element('header ul.sub'),
		lclc =true;

		openButton.click(function(){
			mobileMenu.addClass('show');
		});
		mobileMenu.click(function(){
			mobileMenu.removeClass('show');
		});



	var a = $(window).width(),
		b = $(window).height();	

	if (a < b){
		angular.element('#rotateWarning').fadeOut(0);
	};
		
	$( window ).resize(function() {
		a = $(window).width();
		b = $(window).height();
  		if (a > b){
			angular.element('#rotateWarning').fadeIn(0);
		}else{
			angular.element('#rotateWarning').fadeOut(1000);
		}
	});

	lcl.click(function(){
		if (lclc) {
			lcld.fadeIn(600);
			lcl.addClass('open');
			lclc = false;
		}else{
			lcld.fadeOut(600);
			lcl.removeClass('open');
			lclc = true;
		}
		
	})

}
function MobileCommunicationCtrl($scope, $http)
{
}
function MobileHomeCtrl($scope, $http)
{
	var sliderIndex = 2,
	elemen1 = angular.element('.centerContainer.home .containerContent ul.homeSlider > li'),
	elemen2 = angular.element('.centerContainer.home .containerContent ul.homeFooter > li');

	$scope.interval = setInterval(function(){
		if (sliderIndex <= 3) {
			elemen1.removeClass('show');
			elemen2.removeClass('show');
			angular.element('.centerContainer.home .containerContent ul.homeSlider > li.slider'+sliderIndex).addClass('show');
			angular.element('.centerContainer.home .containerContent ul.homeFooter > li.slider'+sliderIndex).addClass('show');
			sliderIndex ++;
		}else{
			sliderIndex = 2;
			elemen1.removeClass('show');
			elemen2.removeClass('show');
			angular.element('.centerContainer.home .containerContent ul.homeSlider > li.slider1').addClass('show');
			angular.element('.centerContainer.home .containerContent ul.homeFooter > li.slider1').addClass('show');
		}console.log(sliderIndex)
	}, 7000);
}
function MobileplplCtrl($scope, $http)
{


}
function MobileyfCtrl($scope, $http)
{

}

