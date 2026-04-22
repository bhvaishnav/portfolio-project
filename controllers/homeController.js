// ── Home Controller ──
app.controller('homeController', ['$scope', '$interval', function ($scope, $interval) {
  $scope.greeting = "Hello, I'm";
  $scope.name = 'Bhavesh Vaishnav';
  $scope.tagline = 'Information Technology Student';
  $scope.description = 'Enthusiastic about Python & Generative AI';

  // Rotating roles
  $scope.roles = [
    'Python Developer',
    'AI Enthusiast',
    'Web Developer',
    'IT Engineering Student'
  ];
  $scope.currentRoleIndex = 0;
  $scope.currentRole = $scope.roles[0];

  var roleInterval = $interval(function () {
    $scope.currentRoleIndex = ($scope.currentRoleIndex + 1) % $scope.roles.length;
    $scope.currentRole = $scope.roles[$scope.currentRoleIndex];
  }, 2000);

  // Cleanup on destroy
  $scope.$on('$destroy', function () {
    $interval.cancel(roleInterval);
  });
}]);
