angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page33', {
    url: '/page33',
    templateUrl: 'templates/page33.html',
    controller: 'page33Ctrl'
  })

  .state('page13', {
    url: '/page13',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page18', {
    url: '/page18',
    templateUrl: 'templates/page18.html',
    controller: 'page18Ctrl'
  })

  .state('page22', {
    url: '/page22',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page24', {
    url: '/page24',
    templateUrl: 'templates/page24.html',
    controller: 'page24Ctrl'
  })

  .state('page27', {
    url: '/page27',
    templateUrl: 'templates/page27.html',
    controller: 'page27Ctrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

  .state('1', {
    url: '/page15',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('12', {
    url: '/page21',
    templateUrl: 'templates/12.html',
    controller: '12Ctrl'
  })

  .state('13', {
    url: '/page17',
    templateUrl: 'templates/13.html',
    controller: '13Ctrl'
  })

  .state('14', {
    url: '/page25',
    templateUrl: 'templates/14.html',
    controller: '14Ctrl'
  })

  .state('15', {
    url: '/page28',
    templateUrl: 'templates/15.html',
    controller: '15Ctrl'
  })

  .state('16', {
    url: '/page32',
    templateUrl: 'templates/16.html',
    controller: '16Ctrl'
  })

  .state('2', {
    url: '/page19',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('22', {
    url: '/page20',
    templateUrl: 'templates/22.html',
    controller: '22Ctrl'
  })

  .state('23', {
    url: '/page23',
    templateUrl: 'templates/23.html',
    controller: '23Ctrl'
  })

  .state('24', {
    url: '/page26',
    templateUrl: 'templates/24.html',
    controller: '24Ctrl'
  })

  .state('25', {
    url: '/page29',
    templateUrl: 'templates/25.html',
    controller: '25Ctrl'
  })

  .state('26', {
    url: '/page31',
    templateUrl: 'templates/26.html',
    controller: '26Ctrl'
  })

  .state('page34', {
    url: '/page34',
    templateUrl: 'templates/page34.html',
    controller: 'page34Ctrl'
  })

  .state('27', {
    url: '/page35',
    templateUrl: 'templates/27.html',
    controller: '27Ctrl'
  })

  .state('17', {
    url: '/page36',
    templateUrl: 'templates/17.html',
    controller: '17Ctrl'
  })

  .state('page37', {
    url: '/page37',
    templateUrl: 'templates/page37.html',
    controller: 'page37Ctrl'
  })

  .state('page38', {
    url: '/page38',
    templateUrl: 'templates/page38.html',
    controller: 'page38Ctrl'
  })

$urlRouterProvider.otherwise('/page12')


});