(function() {
	angular.module('app').directive('contactDetails',contactDetails);
	
	function contactDetails(){
		return {
			restrict : 'E',
			scope : {},
			bindToController : {
				details : '=contactdetails'
			},
			transclude : true,
			templateUrl : 'App/Directives/contactDetailsDirective.html',
			controller : function($scope,updtComDetailSrvc,TranslationSrvc,$location){
				var vm = this;
				vm.translatedData;
				vm.initialize = function(lang){
					TranslationSrvc.getTranslation(vm);
				};
				
				vm.updateDetails = function() {
					updtComDetailSrvc.callService(vm.sample).then(successCallBack,failureCallBack);
				};
				
				function successCallBack(response){
					alert("Contact Details Updated!!");
					$location.path('/cont');
				};
				
				function failureCallBack(error){
					console.log('error');
				};
				
				$scope.$on('langChanged',function(){
					vm.initialize();
				});
			},
			controllerAs : 'vm'
		};
	}
})();
