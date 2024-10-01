(function() {

    var top = document.querySelector('head'); // reach out to the parent window and get the head element

    var script = document.createElement('script'); //create a new script element

    script.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js'; //sets the src attribute

    script.type = 'text/javascript'; //sets the type attribute

	script.charset = 'UTF-8';

	if (window.location.href.indexOf('zoomusdev') > -1) { 
		script.setAttribute('data-domain-script', 'aba09413-cfa0-4804-93ab-728d23c230df'); }
	else if (window.location.href.indexOf('zoomustest') >-1) {
		script.setAttribute('data-domain-script', 'e7e20584-b074-4102-83e9-77e06e202287');
	}
	else {
		script.setAttribute('data-domain-script', '61de368a-854f-472f-8e5a-2c073666dd98');
	}

    script.id = 'onetrust-script';

	// console.log("appending onetrust script");

    top.appendChild(script); // appends the newly created script element at the end of the top window head element

})();