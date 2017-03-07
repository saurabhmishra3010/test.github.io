(function() {
	angular.module('app').service('CacheDataSrvc',CacheDataSrvc);
	
	function CacheDataSrvc(){
		var contactDetails = null;
		var personalDetails = null;
		this.setPersonalDetails = function(obj){
			personalDetails = obj;
		};
		this.setContactDetails = function(obj){
			contactDetails = obj;
		};
		this.getPersonalDetails = function(){
			return personalDetails;
		};
		this.getContactDetails = function(){
			return contactDetails;
		};
	}
})();
