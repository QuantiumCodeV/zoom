function ready() {
	var params = getQueryParams (document.location.search);

	if (params.onlycontent=='1') {
		$('html').addClass('contentonly');
	}
	else {
		params.onlycontent='0';
	}

	if (params.nohyperlink=='1') {
		$('html').addClass('nohyperlink');
		$('.kb-article-content a').each(function(e) {
			console.log(e);
			/***
				Cases where we just replace the parameters for the link :
				- support.zoom.us is found in the link
				- /articles/ is found in the link
				- /requests is not found in the link
			***/
			if ($(this).attr('href').indexOf('support.zoom.us') > -1  && $(this).attr('href').indexOf('/articles/') > -1 && $(this).attr('href').indexOf('/requests') == -1) {
				var tmp = $(this).attr('href');	
				if ($(this).attr('href').indexOf('#') > -1) {	
					var url_split = tmp.split("#");	
					var new_url = url_split[0] + '?onlycontent='+params.onlycontent+'&nohyperlink='+params.nohyperlink + '#' + url_split[1];	
					$(this).attr('href', new_url);	
				}	
				else {	
					$(this).attr('href', tmp + '?onlycontent='+params.onlycontent+'&nohyperlink='+params.nohyperlink);	
				}
			}
			/***
				Cases where we do nothing with the link (either): 
				- the data-toggle property = collapse (accordion link)
				- the first character of the link is a # and https is not found (anchor link)
			***/
			else if ($(this).data('toggle') == 'collapse' || ($(this).attr('href').charAt(0) == "#" && $(this).attr('href').indexOf('https:') == -1)) {
				//do nothing
			}
			// All other links we just remove
			else {
				$(this).addClass('dead-link');
				$(this).removeAttr("href");
			}
		});
  }
	
}

// Loads a script and then runs the callback function
function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  // only required for IE <9
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}

function getQueryParams (queryString)
{
	queryString = queryString.split ('+').join (' ');

	var params = {};
	var tokens;
	var regex = /[?&]?([^=]+)=([^&]*)/g;

	while (tokens = regex.exec (queryString))
	{
	params[decodeURIComponent (tokens[1])] = decodeURIComponent (tokens[2]);
	}

	return params;
}

document.addEventListener("DOMContentLoaded", ready);