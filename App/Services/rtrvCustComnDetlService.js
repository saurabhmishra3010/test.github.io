(function() {
	angular.module('app').service('ComDetailSrvc',ComDetailSrvc);
	
	ComDetailSrvc.$inject = ['$http'];
	
	function ComDetailSrvc($http){
		this.callService = function(){
			return $http({url:"http://localhost:8080/HSBC_Comms/JSON/rtrvCustComnDetl.json",method:"GET"});
		};	
	}
})();
