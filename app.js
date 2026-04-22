// ── Angular Module Definition ──
var app = angular.module('portfolioApp', ['ngRoute']);

// ── Run Block — Active Link Helper ──
app.run(['$rootScope', '$location', function ($rootScope, $location) {
  $rootScope.isActive = function (path) {
    return $location.path() === path;
  };

  // Close mobile menu on route change
  $rootScope.$on('$routeChangeSuccess', function () {
    $rootScope.menuOpen = false;
  });
}]);
