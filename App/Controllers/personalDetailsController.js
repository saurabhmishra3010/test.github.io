(function() {
	angular.module('app')
			.controller('PersonalDetailsCtrl', PersonalDetailsCtrl);

	PersonalDetailsCtrl.$inject = [ 'PersDetailSrvc', 'CacheDataSrvc' ];

	function PersonalDetailsCtrl(PersDetailSrvc, CacheDataSrvc) {
		var vm = this;
		vm.initialize = function() {
			PersDetailSrvc.callService().then(successCallBack, failureCallBack);
		};

		function successCallBack(response) {
			vm.personalDetails = response.data;
			CacheDataSrvc.setPersonalDetails(vm.personalDetails);
		}

		function failureCallBack(error) {
			console.log("error");
		}
	}
})();
