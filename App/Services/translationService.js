(function() {
	angular.module('app').service('TranslationSrvc', TranslationSrvc);

	TranslationSrvc.$inject = [ '$resource','$cookies' ];

	function TranslationSrvc($resource,$cookies) {
		var language = 'en';
		this.getLanguage = function(){
			language = $cookies.get('language');
			return language;
		};
		this.setLanguage = function(lang) {
			$cookies.put('language',lang);
		};
		this.getTranslation = function(scope) {
			var translationFilePath = "App/Translations/translation_"
					+ language + ".json";
			$resource(translationFilePath).get(function(data) {
				scope.translatedData = data;
			});
		};
	}
})();
