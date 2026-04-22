// ── Project Controller ──
app.controller('projectController', ['$scope', function ($scope) {
  $scope.projects = [
    {
      name: 'Kund Enterprise',
      description: 'Responsive e-commerce website for an imitation jewellery business to showcase and sell products online. Features dynamic routing for seamless navigation between product categories and pages.',
      tags: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      icon: '💎'
    },
    {
      name: 'Intrakart',
      description: 'AI & AR Interior Design SPA integrating AI-based recommendation logic and an AR visualization module. Features dynamic routing, reusable components, REST API integration, personalized design suggestions, and real-time furniture placement using WebAR concepts.',
      tags: ['AngularJS', 'AI', 'AR', 'REST API'],
      icon: '🏠'
    },
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio built with AngularJS and routing.',
      tags: ['AngularJS', 'HTML', 'CSS'],
      icon: '🌐'
    },
    {
      name: 'AI Chatbot',
      description: 'Python-based chatbot leveraging Generative AI APIs.',
      tags: ['Python', 'GenAI', 'API'],
      icon: '🤖'
    },
    {
      name: 'Web App UI',
      description: 'Business-focused web application interface with modern design.',
      tags: ['HTML', 'CSS', 'JS'],
      icon: '💼'
    }
  ];
}]);
