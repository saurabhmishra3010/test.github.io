(function() {
	angular.module('app').service('PersDetailSrvc',PersDetailSrvc);
	
	PersDetailSrvc.$inject = ['$http'];
	
	function PersDetailSrvc($http){
		this.callService = function(){
			return $http({url:"http://localhost:8080/HSBC_Comms/JSON/rtrvCustPrsnDetl.json",method:"GET"});
		};	
	}
})();
