(function() {
	angular.module('app').directive('personalDetails', personalDetails);

	function personalDetails() {
		return {
			restrict : 'E',
			scope : {},
			bindToController : {
				details : '=personaldetails'
			},
			transclude : true,
			templateUrl : 'App/Directives/personalDetailsDirective.html',
			controller : function($scope,updtPersDetailSrvc,TranslationSrvc) {
				var vm = this;
				vm.translatedData;
				vm.initialize = initialize;
				
				function initialize(){
					TranslationSrvc.getTranslation(vm);
				};
				
				$scope.$on('langChanged',function(){
					vm.initialize();
				});
			},
			controllerAs : 'vm'
		};
	}
})();
