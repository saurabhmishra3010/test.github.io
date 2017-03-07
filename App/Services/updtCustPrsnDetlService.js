(function() {
	angular.module('app').service('updtPersDetailSrvc',updtComDetailSrvc);
	
	updtComDetailSrvc.$inject = ['$http'];
	
	function updtComDetailSrvc($http){
		this.callService = function(persDetails){
			return $http({url:"http://localhost:8080/HSBC_Comms/JSON/updtCustPrsnDetl.json",method:"POST",data:persDetails});
		};	
	}
})();
