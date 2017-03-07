(function() {
	angular.module('app', [ 'ngRoute', 'ngResource', 'ngCookies' ]).config(RouteConfig)
			.run(RunConfig);

	function RouteConfig($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl : 'home.html'
		}).when('/pers', {
			templateUrl : 'personaldetails.html',
			controller : 'PersonalDetailsCtrl',
			controllerAs : 'vm'
		}).when('/cont', {
			templateUrl : 'contactdetails.html',
			controller : 'ContactDetailsCtrl',
			controllerAs : 'vm'
		}).when('/contactus', {
			templateUrl : 'contactus.html'
		}).when('/persdetform', {
			templateUrl : 'personalDetailsForm.html'
		}).otherwise({
			redirectTo : '/home'
		});
	}

	function RunConfig($rootScope) {
		
	}
})();
