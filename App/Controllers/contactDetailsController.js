(function() {
	angular.module('app').controller('ContactDetailsCtrl',ContactDetailsCtrl);
	
	ContactDetailsCtrl.$inject = ['ComDetailSrvc'];
	
	function ContactDetailsCtrl(ComDetailSrvc){
		var vm = this;
		vm.initialize = function(){
			ComDetailSrvc.callService().then(successCallBack,failureCallBack);
		};
		
		function successCallBack(response){
			vm.contactDetails = response.data;
		}
		
		function failureCallBack(error){
			console.log("error");
		}
	}
})();
