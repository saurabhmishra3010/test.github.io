(function() {
	angular.module('app').service('updtComDetailSrvc',updtComDetailSrvc);
	
	updtComDetailSrvc.$inject = ['$http'];
	
	function updtComDetailSrvc($http){
		this.callService = function(){
			return $http({url:"http://localhost:8080/HSBC_Comms/JSON/updtCustComnDetl.json",method:"POST"});
		};	
	}
})();
