(function() {
	angular.module('app').directive('personalDetailsForm', personalDetailsForm);

	personalDetailsForm.$inject = [ 'TranslationSrvc' ];

	function personalDetailsForm(TranslationSrvc) {
		return {
			restrict : 'E',
			templateUrl : 'App/Directives/personalDetailsFormDirective.html',
			scope : {},
			bindToController : {},
			transclude : true,
			controller : function($scope, TranslationSrvc, updtPersDetailSrvc,CacheDataSrvc,$location) {
				var vm = this;
				vm.translatedData;
				vm.sample = {
					name : "Saurabh"
				};
				vm.initialize = initialize;
				vm.updateDetails = updateDetails;
				function initialize() {
					if(!CacheDataSrvc.getPersonalDetails()){
						$location.path('/pers');
						console.log("empty");
					}
					else{
						vm.details = CacheDataSrvc.getPersonalDetails();
						TranslationSrvc.getTranslation(vm);
					}
				};
				function updateDetails() {
					updtPersDetailSrvc.callService(vm.sample).then(
							successCallBack, failureCallBack);
				};
				function successCallBack(response) {
					alert("Personal Details Updated!!");
					$location.path('/pers');
				};
				function failureCallBack(error) {
					console.log('error');
				};
				$scope.$on('langChanged', function() {
					vm.initialize();
					console.log("initialized due to lang change");
				});
			},
			controllerAs : 'vm'
		};
	}
})();