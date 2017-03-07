(function() {
	angular.module('app').controller('ParentCtrl', ParentCtrl);

	ParentCtrl.$inject = [ 'TranslationSrvc', '$rootScope', '$scope'];

	function ParentCtrl(TranslationSrvc, $rootScope, $scope) {
		var vm = this;
		vm.translatedData;
		vm.initialize = initialize;
		vm.selectLang = selectLang;

		function selectLang(lang) {
			TranslationSrvc.setLanguage(lang);
			TranslationSrvc.getTranslation(vm);
			$rootScope.$broadcast('langChanged',TranslationSrvc.getLanguage());
			console.log("language changed");
		}
		
		function initialize(){
			TranslationSrvc.getTranslation(vm);
		}

	}
})();
