var app = angular.module('myApp', [], function($interpolateProvider) {
	// for use only with jekyll to not interfere with handlebars
	// instead of {{ foo }}, do [[ foo ]]
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});