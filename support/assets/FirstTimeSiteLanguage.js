console.log("in firsttime sitelang");

var langGA = new GlideAjax('SiteLanguage');
langGA.addParam('sysparm_name','checkSiteLang');
//langGA.getXML(handle);

function handle(response) {
	var answer = response.responseXML.documentElement.getAttribute('answer');

	var jsonAnswer = JSON.parse(answer);
	console.log(jsonAnswer);

	var browserLang = jsonAnswer.isoLanguage;
	var currentLang = jsonAnswer.currentLang;
	
	// Check to see if we need to change the language
	if (jsonAnswer.isNewSession == true) {
		console.log(currentLang, browserLang);
		if (currentLang != browserLang) {
			$location.state({addSPA: true})
			var path = $location.path();
			if (path.indexOf('/'+currentLang+'/') > -1) {
				path = path.replace('/'+currentLang+'/', '/'+browserLang+'/');
			}
			else if (path.indexOf('/'+currentLang) > -1) {
				path = path.replace('/'+currentLang, '/'+browserLang);
			}
			else if (path.indexOf('/hc/') > -1) {
				path = path.replace('/hc/', '/hc/'+browserLang);
			}
			else if (path.indexOf('/hc') > -1) {
				path = path.replace('/hc', '/hc/'+browserLang);
			}
			if (path.indexOf("/article") > -1) { $location.search('sysparm_language',browserLang); }
			$location.path(path);
			console.log($location);
			//$location.search('lang',browserLang);
			$location.replace();
			//$window.location = $window.location.origin + "/hc/"+browserLang + $window.location.search + $window.location.hash;
		}
	}
}