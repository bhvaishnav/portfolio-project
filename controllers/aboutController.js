// ── About Controller ──
app.controller('aboutController', ['$scope', function ($scope) {
  $scope.bio = 'Engineering student specializing in web development as well as python developer with a focused interest in artificial intelligence. Driven to innovate, learn, and build solutions that make a difference.';

  $scope.hobbies = ['Singing', 'Sports', 'Creative Media'];

  $scope.skills = [
    { name: 'Python',           percent: 80 },
    { name: 'Generative AI',    percent: 70 },
    { name: 'Web Development',  percent: 75 },
    { name: 'AngularJS',        percent: 65 },
    { name: 'HTML & CSS',       percent: 85 }
  ];
}]);
