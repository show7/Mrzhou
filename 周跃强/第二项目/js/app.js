var app = angular.module('myApp',['ionic','ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state(
			'home',{
				url:'/home',
				templateUrl:'templete/home.html',
				controller:'homeController'
			}
		)
	.state('detail',{
		url:'/detail/:name/:city/:country/:age',
		templateUrl:'templete/detail.html',
		controller:'detailController'
	})
});