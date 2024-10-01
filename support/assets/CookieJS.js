var targeting_enabled = false;
setTargetingVariable();
var activeCookies = checkCookie("OptanonConsent");
// need to add OneTrust to get accurate results here

//Set a Cookie
function setCookie(cName, cValue, expDays) {
	//console.log("Setting cookie "+cName+" to "+cValue+" for "+expDays+" days");
	var date = new Date();
	date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Check a Cookie Value
function checkCookie(name) {
	//console.log("Checking cookie "+name);
	var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	if (match) { return match[2]; }
	else { return null; }
}

// Creates an empty cookie based on the number of sections/cards on this page
function createStructure() {

	var structure = {};
	var number_of_sections = $('.gs-card-section .cards-container').length;	
	for (var x=0; x<number_of_sections; x++) {
		
		var cards_container = $('.gs-card-section .cards-container')[x];
		var number_of_cards = $(cards_container).find('.gs-card').length;
		
		structure[x] = new Array(number_of_cards).fill(0);
		
	}

	return JSON.stringify(structure);
}

// For the Getting Started Pages - removes the Unread tag from all tiles. Used when someone disables cookies
function removeUnread() {
	$('.gs-cards .unread').removeClass('unread');
}

/** Disable / Enable Coveo Analytics based on cookie preferences **/
function coveoAnalytics() {
	activeCookies = checkCookie("OptanonConsent");
	//console.log("activeCookies analytics = ", activeCookies);
	var root = document.querySelector('.CoveoSearchInterface');
	// Check to see if targeting cookies are enabled
	if (activeCookies == null) { 
		Coveo.disableAnalytics(root);
	}
	else if (activeCookies.indexOf('C0004%3A1') > -1 || activeCookies.indexOf('C0004:1') > -1) { 
		//console.log("Enabling Coveo Analytics");
		Coveo.enableAnalytics(root);
	}
	else {
		//console.log("Disabling Coveo Analytics");
		Coveo.disableAnalytics(root);
	} 
}

function setTargetingVariable() {
  activeCookies = checkCookie("OptanonConsent");
  //console.log("activeCookies targeting = ", activeCookies);

  if (activeCookies == null) { 
	  targeting_enabled = false; 
  }
  else if (activeCookies.indexOf('C0004%3A1') > -1 || activeCookies.indexOf('C0004:1') > -1) { 
	//console.log("Setting Targeting Enabled = True");
    targeting_enabled = true;
    if (window.location.href.indexOf('_guide') > -1) {
      	var event = new Event("cookie_update");
		var elem = document.querySelector('head');
		elem.dispatchEvent(event);
    }

  }
  else {
	  //console.log("Setting Targeting Enabled = False");
    targeting_enabled = false;
    if (window.location.href.indexOf('_guide') > -1) {
      removeUnread();
    }
  }

}

/*function checkUnread() {
	//new Array(len).fill(0);
	console.log("checking unread");
	
	var cookie_name = '';
	if (window.location.href.indexOf('zoom_phone_guide') > -1) { cookie_name = 'gszp'; }
	if (window.location.href.indexOf('zoom_meetings_guide') > -1) { cookie_name = 'gszm'; }
	if (window.location.href.indexOf('zoom_phone_guide') > -1) { cookie_name = 'gszp'; }
	if (window.location.href.indexOf('zoom_phone_guide') > -1) { cookie_name = 'gszp'; }
	if (window.location.href.indexOf('zoom_phone_guide') > -1) { cookie_name = 'gszp'; }
	if (window.location.href.indexOf('zoom_phone_guide') > -1) { cookie_name = 'gszp'; }

    console.log(cookie_name);
	var cookie = checkCookie(cookie_name);
	console.log(cookie);
	
	// If cookie has not been created then we need to create it
	if (cookie == null || cookie == "open") {
		var structure = createStructure();
		setCookie(cookie_name, structure, 30);
		$('.gs-card').addClass('unread');
	}
	else {
		
		var currentCookies = JSON.parse(cookie);
		console.log(currentCookies);
	var counter = 0;
	Object.values(currentCookies).forEach(function(val) {
		var tab = $('.gs-card-section').find('.cards-container')[counter];
		var counter2 = 0;
		val.forEach(function(cardVal) {
			if (cardVal == 0) {
				var card = $(tab).find('.gs-card')[counter2];
				$(card).addClass('unread');
			}
			counter2++;
		});
		counter++;	
	})
		
	}
	
	
}*/