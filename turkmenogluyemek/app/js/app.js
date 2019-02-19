 'use strict';

/* App Module */

var app;
if (!isMobile){
    $('#page').show()

app = angular.module('mag', ['mag.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider. 
      when('/Biz_Kimiz', {templateUrl: '/app/partials/Biz_Kimiz.html',   controller: bkCtrl}).
      when('/Bize_Ulasin', {templateUrl: '/app/partials/Bize_Ulasin.html',   controller: buCtrl}).
      when('/Nasil_Calisiriz', {templateUrl: '/app/partials/Nasil_Calisiriz.html',   controller: ncCtrl}).
      when('/Dugun_Organizasyon', {templateUrl: '/app/partials/Dugun_Organizasyon.html',   controller: doCtrl}).
      when('/Tasima_Yemek', {templateUrl: '/app/partials/Tasima_Yemek.html',   controller: tyCtrl}).
      when('/Yerinde_Yemek', {templateUrl: '/app/partials/Yerinde_Yemek.html',   controller: yyCtrl}).
      when('/Neredeyiz', {templateUrl: '/app/partials/Neredeyiz.html',   controller: nCtrl}).
      when('/Referanslar', {templateUrl: '/app/partials/Referanslar.html',   controller: rCtrl}).
      
      when('/', {templateUrl: '/app/partials/home.html', controller: HomeCtrl}).
      otherwise({redirectTo: '/'} );
}])
}
else{
    $('#mobile-page').show()

app = angular.module('mag', ['mag.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider. 
      when('/biz-kimiz-nasil-calisiriz', {templateUrl: '/app/partials/mobile/biz-kimiz-nasil-calisiriz.html',   controller: MobileCommunicationCtrl}).
      when('/bize-ulasin', {templateUrl: '/app/partials/mobile/communication.html',   controller: MobileCommunicationCtrl}).
      when('/hizmetler', {templateUrl: '/app/partials/mobile/hizmetler.html',   controller: MobileCommunicationCtrl}).
      when('/referanslar', {templateUrl: '/app/partials/mobile/referanslar.html',   controller: MobileCommunicationCtrl}).
      when('/pilav-pilav', {templateUrl: '/app/partials/mobile/pilav-pilav.html',   controller: MobileplplCtrl}).
      when('/yemek-fabrikasi', {templateUrl: '/app/partials/mobile/yemek-fabrikasi.html',   controller: MobileyfCtrl}).

      when('/', {templateUrl: '/app/partials/mobile/home.html', controller: MobileHomeCtrl}).
      otherwise({redirectTo: '/'} );
      
}]);
};