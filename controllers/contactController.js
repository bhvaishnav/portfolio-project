// ── Contact Controller ──
app.controller('contactController', ['$scope', function ($scope) {
  $scope.formData = {
    name: '',
    email: '',
    message: ''
  };
  $scope.submitted = false;

  $scope.sendMessage = function () {
    if ($scope.formData.name && $scope.formData.email && $scope.formData.message) {
      $scope.submitted = true;
    }
  };
}]);
