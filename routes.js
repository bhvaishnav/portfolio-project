// ── Route Configuration ──
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutController'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'projectController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
