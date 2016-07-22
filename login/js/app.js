// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('myIonicApp', ['ionic','btford.socket-io'])
// .controller('myIonicHome', function($scope)){

// })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'mainController'
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html",
          controller: 'questionsController'
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html",
          controller: 'tableController'
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

});


// .config(function($stateProvider, $urlRouterProvider) {

//   $stateProvider
//     .state('tab', {
//       url: "/tab",
//       abstract: true,
//       templateUrl: "templates/tabs.html"
//     })
//     .state('tab.selectQuestion', {
//       url: "/selectQuestion",
//       views: {
//         'tab-selectQuestion': {
//           templateUrl: "templates/selectQuestion.html",
//           controller: 'mainController'
//         }
//       }
//     })
//     .state('tab.showQuestion', {
//       url: "/showQuestion",
//       views: {
//         'about-tab': {
//           templateUrl: "templates/showQuestion.html",
//           controller: 'mainController'
//         }
//       }
//     })
//     .state('tab.contact', {
//       url: "/contact",
//       views: {
//         'contact-tab': {
//           templateUrl: "templates/contact.html"
//         }
//       }
//     })

//     $urlRouterProvider.otherwise('/tab/showQuestion');

// });