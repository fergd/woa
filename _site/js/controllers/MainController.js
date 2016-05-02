app.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'Resource Manager';

	$scope.resources = 
    [
        { 
          title: 'The Book of Trees', 
          type: 'Podcast', 
          pubdate: new Date('2014', '03', '08'), 
          location: '#',
          tag: 'web design '
        },
        { 
          title: 'Poddish cast', 
          type: 'Podcast', 
          pubdate: new Date('2014', '03', '08'), 
          location: '#' ,
          tag: 'podcast'
        },
    ]
}]);