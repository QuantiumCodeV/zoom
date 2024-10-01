/*** GLOBAL VARIABLES FOR SCRIPT.JS ***/
var w = '',
    h = '',
    c = 0,
    timeout = false, // holder for timeout id
    delay = 100, // delay after event is "complete" to run callback
    calls = 0;
old_width = 0;
old_height = 0;

var onload_function_init = false;

/* Qualtrics Variables */
var qualtrics_locale = "";
var isOAC = "";
var user_name = "";
var user_email = "";
var user_role = "";
var article_id = "";
var userAccData = "notset";

/*** WINDOW.RESIZE EVENT LISTENER ***/
window.addEventListener('resize', function() {
    // clear the timeout
    clearTimeout(timeout);
    // start timing for event "completion"
    timeout = setTimeout(onResize, delay);
});

function scrollUp() {
	if (window.location.href.indexOf('#') == -1) {
		//console.log("scroll up");
		$('html').animate({ scrollTop: $('html').offset().top}, 0);
	}
}

function onResize() {

    w = window.innerWidth;
    h = window.innerHeight;
    calls += 1;
    c = calls;
    //console.log("width: " + w, "height: " + h);

	if (old_width < 768 && window.innerWidth >= 768 && ($('#support-nav-checkbox').prop('checked') == true)) {
		$('#support-nav-checkbox').click();
	}

    // Code goes here
    // If window goes from monitor size to tablet size we hide any dropdowns that were open on the monitor window and we remove the slider functionality from video tutorials
    if (window.innerWidth < 1024 && old_width >= 1024) {
        if ($('.video-box').length > 0) {
            $('.youtube-player').empty();
            initYouTubeVideos();
            $('.video-box').slick('unslick');
        }

    }
    // If window goes from tablet size to monitor size and we are on the homepage then we restore the video tutorials slider functionality
    else if (window.innerWidth >= 1024 && $('#video-box').hasClass('slick-initialized') == false) {
        if ($('.video-box').length > 0) {
            $('.youtube-player').empty();
            initYouTubeVideos();
            $('#video-box').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                adaptiveHeight: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: "unslick"
                }]
            });
        }
    }

    // Set top padding
    var headerHeight = '114px';
    try {
        headerHeight = document.querySelectorAll('#header-main-container')[0].offsetHeight + 'px';
        footerHeight = document.querySelectorAll('.footer')[0].offsetHeight;
    } catch (error) {}
    document.querySelectorAll('body')[0].style.paddingTop = headerHeight;

    //
    old_width = w;
    old_height = h;

	formatTopPadding();

	if (window.innerWidth > old_width) {
		checkMainBarWidth(false, true, false);
		checkSupportBarWidth(false, true);
	} else if (window.innerWidth < old_width) {
		checkMainBarWidth(true, false, false);
		checkSupportBarWidth(true, false);
	} else {
		checkMainBarWidth(false, false, true);
		checkSupportBarWidth(false, false);
	}
	
	// If we're on tablet size move Contact Us into the Support dropdown
	if (window.innerWidth <= 768 && $('#header-support-ul').children().length < 4) {
		$('#contact-support-li').appendTo($('#header-support-ul'));
	}

	changeResourcesText();

	old_width = window.innerWidth;
}

/* Formatting functions for resizing the header
 * formatTopPadding()
 * changeResourcesText()
 * checkSupportBarWidth()
 * checkMainBarWidth()
 */
function formatTopPadding() {
    // Reset header min-height
    $('.header').css('min-height', 'initial');

    $('body').css('padding-top', $('.header').height());
    //$('.header').css('min-height', $('.header').height());
    $('html').css('scroll-padding-top', $('.header').height() + 10);
}

function changeResourcesText() {
    if (window.innerWidth > 768) {
        $('#resources-dropdown .dropdown-footer-inner .inner1 .inner-txt a').text("Download Center");
        $('#resources-dropdown .dropdown-footer-inner .inner2 .inner-txt a').text("Browse Backgrounds");
    } else {
        $('#resources-dropdown .dropdown-footer-inner .inner1 .inner-txt a').text("Download Zoom Client");
        $('#resources-dropdown .dropdown-footer-inner .inner2 .inner-txt a').text("Zoom Virtual Backgrounds");
    }
}

var tabletBreakpoint = 1400;
var tabletBreakpointSet = false;
var mobileBreakpoint = 481;
var mobileBreakpointSet = false;
var recursiveCalls = 0;
var supportRecursiveCalls = 0;
var contactSupportWidth = 140;

// Function that hides/shows navbar elements based on remaining width. Runs on page load and whenever the page is resized. 
function checkSupportBarWidth() {
	//console.log("Checking Support Bar width - Recursive Call "+supportRecursiveCalls);
    if (window.innerWidth > 768) {
        contactSupportWidth = $('#header-support-ul').children().last().width();
    }

    // Prevent this function from running more than twice in a row.
    if (supportRecursiveCalls > 1) {
        supportRecursiveCalls = 0;
        return;
    }

    // The difference in width between the UL that holds our links + the Coveo Search component and the width of the overall bar. 
	var supportBarWidth = 0;
	$('#header-support-ul').children().each(function(e) {
		supportBarWidth += $(this).width();
	});
	var totalBarWidth = $('#header-support > .header-container').width();
	var searchContainerWidth = $('.header-search-container').width();

    var widthDiff = totalBarWidth - (supportBarWidth + searchContainerWidth);
	//console.log(totalBarWidth, searchContainerWidth, widthDiff);

    // If there is negative width left (overlapping) then we find the last li that does not have the .invisible class and we add the .invisible class. 
    // Then, rerun the function to check whether or not we are still overlapping.
    if (widthDiff <= 120) {
        //$('#header-support-ul').find('li:not(.invisible):last').addClass('invisible');
        //supportRecursiveCalls++;
        //checkSupportBarWidth();
        $('#contact-support-li').appendTo($('#more-support-dropdown'));
    } else {
		$('#contact-support-li').appendTo($('#header-support-ul'));
		//supportRecursiveCalls++;
        //checkSupportBarWidth();
	}
}

// Function that checks the main bar's width in the nav and switches to hamburger menu when applicable
function checkMainBarWidth(shrinking, widening, onload) {
	//console.log(shrinking, widening, onload, recursiveCalls);

    // Return if we're already on mobile and we're shrinking or we're already on desktop and we're widening. 
    if ($('#header-mainbar').hasClass('smaller-mobile-size') && shrinking == true) {
        return;
    }
    if (!$('#header-mainbar').hasClass('mobile-size') && widening == true) {
        return;
    }

    // Prevent this function from running more than twice in a row.
    if (recursiveCalls > 1) {
        recursiveCalls = 0;
        return;
    }

    // TABLET CHECK
    // Dont run this code if we are already on mobile - no point
    if (!$('#header-mainbar').hasClass('smaller-mobile-size')) {

        var widthDiff = $('#header-mainbar').width() - ($('#main-menubar').outerWidth(true) + $('#join-host-bar').outerWidth(false) + $('#header-logo-a').outerWidth(true) + 120);
		//console.log(widthDiff, !$('#header-mainbar').hasClass('mobile-size'));

        if (widthDiff >= 0 && !$('#header-mainbar').hasClass('mobile-size') && tabletBreakpointSet == false) {
            tabletBreakpoint = $('#main-menubar').outerWidth(true) + $('#join-host-bar').outerWidth(false) + $('#header-logo-a').outerWidth(true) + 120;
			if (tabletBreakpoint <= 1023) { tabletBreakpoint = 1024; }
            tabletBreakpointSet = true;
			//console.log("Setting tablet breakpoint to " + tabletBreakpoint);
        }
        if (((widthDiff <= 0) && !$('#header-mainbar').hasClass('mobile-size')) || 
		(window.innerWidth < tabletBreakpoint && !$('#header-mainbar').hasClass('mobile-size'))) {
			//console.log("adding mobile-size");
            $('#header-mainbar').addClass('mobile-size');
			$('#header-support').addClass('mobile-sub');
            $('.header .active-dropdown').removeClass('active-dropdown');
            $('#my-account-li').appendTo('#main-menubar');
			//console.log($('#my-account-li'), $('#main-menubar'));
            $('#sign-in-li').appendTo('#main-menubar');
            $('.bottom-button > ul a').attr('tabindex', '-1');
        }

        else if (window.innerWidth > tabletBreakpoint && $('#header-mainbar').hasClass('mobile-size')) {
			//console.log(window.innerWidth, tabletBreakpoint, "removing mobile-size");
			if ($('#main-nav-checkbox').prop('checked') == true) {
				$('#main-nav-checkbox-label').click();
			}
			$('#header-support').css('visibility', 'visible');
			$('.header-search-container .FlyoutButton').css('visibility', 'visible');
			$('.body').css('visibility', 'visible');
			$('footer').css('visibility', 'visible');
            $('#header-mainbar').removeClass('mobile-size');
			$('#header-support').removeClass('mobile-sub');
            $('#my-account-li').appendTo('#join-host-bar');
            $('#sign-in-li').appendTo('#join-host-bar');
            $('.bottom-button > ul a').attr('tabindex', '0');
            $('#main-menubar').removeClass('show-dropdown');
            $('.header .active-dropdown').removeClass('active-dropdown');
        }
    }

    // MOBILE CHECK
    if ($('#header-mainbar').hasClass('mobile-size')) {
		//console.log("Mobile check");
        var mobileWidthDiff = $('#header-mainbar > .header-container').width() - ($('#header-logo-a').outerWidth(true) + $('#join-host-bar').outerWidth(false) + $('#main-nav-checkbox-label').width() + 120);

        if (mobileWidthDiff >= 0 && !$('#header-mainbar').hasClass('smaller-mobile-size') && mobileBreakpointSet == false) {
            mobileBreakpoint = $('#header-logo-a').outerWidth(true) + $('#join-host-bar').outerWidth(false) + $('#main-nav-checkbox-label').width() + 120;
            mobileBreakpointSet = true;
			if (mobileBreakpoint < 481) { mobileBreakpoint = 481; }
			//console.log("mobile breakpoint set to ", mobileBreakpoint);
        }

        if (window.innerWidth < mobileBreakpoint && !$('#header-mainbar').hasClass('smaller-mobile-size')) {
			//console.log("adding smaller-mobile-size class");
            $('#header-mainbar').addClass('smaller-mobile-size');
			$('#header-support').addClass('smaller-mobile-sub');
            $('#join-li').appendTo('#main-menubar');
            $('#host-li').appendTo('#main-menubar');
        }

        if (window.innerWidth > mobileBreakpoint && $('#header-mainbar').hasClass('smaller-mobile-size')) {
			//console.log("removing smaller-mobile-size class");
            $('#header-mainbar').removeClass('smaller-mobile-size');
			$('#header-support').removeClass('smaller-mobile-sub');
            $('#host-li').prependTo('#join-host-bar');
            $('#join-li').prependTo('#join-host-bar');

            // This is a specific case where we are jumping straight from mobile to desktop while skipping tablet. We need to rerun the function 1 time to fix the bar, otherwise it still has the 'mobile-size' class.
            if (window.innerWidth > tabletBreakpoint) {
                setTimeout(function() {
                    recursiveCalls++;
                    checkMainBarWidth(false, true, true);
                }, 500);
            }
        }
    }
}

// Code to handle Youtube lazy load
/*
 * Light YouTube Embeds by @labnol
 * Credit: https://www.labnol.org/
 */
function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute(
        'src',
        'https://www.youtube-nocookie.com/embed/' + div.dataset.id + '?autoplay=1&rel=0'
    );
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute(
        'allow',
        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    );
    div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
	//console.log("in init ytube function");
	//console.log("activecookies ytube function = ",activeCookies);
    // Check to see if functional cookies are enabled
    if (activeCookies.indexOf('C0003%3A1') > -1 || activeCookies.indexOf('C0003:1') > -1) {
    //if (activeCookies) {
		//console.log($('.youtube-player'));
        $('.youtube-player').css('height', '0');
        $('.youtube-player').css('padding-bottom', '56.25%');
        $('.slider-item').css('aspect-ratio', '16/9');
        $('.youtube-player').html('');
		$('.youtube-player').removeClass('cookie-error');
        var playerElements = document.getElementsByClassName('youtube-player');
        for (var n = 0; n < playerElements.length; n++) {
            var videoId = playerElements[n].dataset.id;
            var div = document.createElement('div');
            div.setAttribute('data-id', videoId);
            div.setAttribute('tabIndex', '0');
            var thumbNode = document.createElement('img');
            thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace(
                'ID',
                videoId
            );
            div.appendChild(thumbNode);
            var playButton = document.createElement('div');
            playButton.setAttribute('class', 'play');
            div.appendChild(playButton);
            div.onclick = function() {
                labnolIframe(this);
            };
            div.onkeypress = function(e) {
                if (e.keyCode == 13) {
                    labnolIframe(this);
                }
            };
            playerElements[n].appendChild(div);
        }
        modifySliderVideos();
    } else {
        $('.slider-item').css('aspect-ratio', 'initial');
        $('.youtube-player').css('height', 'initial');
        $('.youtube-player').css('padding-bottom', '0');
        $('.youtube-player').html('<p></p>');
		$('.youtube-player').addClass('cookie-error');
    }
}

// If on a page with a carousel then youtube videos could be embedded in a slider-item div, which also has a tabindex. We want to keep that tabindex so that the slider functions properly, but we want to add a function when the user presses Enter so that the video inside of the slider element plays. 
function modifySliderVideos() {
    if ($('.video-box').length > 0) {
        $('.slider-item .youtube-player > div').attr('tabindex', '-1');
        $('.slider-item').bind('click keypress', function(e) {
            if ((e.type == 'keypress' && e.which == 13)) {
                labnolIframe($(this).find('.youtube-player > div')[0]);
            }
        });
    }
}

// Run onResize Once
document.addEventListener('DOMContentLoaded', onDomContentLoaded, false);

function onDomContentLoaded() {

	// Hide Coveo Case Deflection if user is signed out or on the top level page
	/*var logged_in = gs.isLoggedIn();

	if (window.location.href.indexOf('id=new_request') > -1) {
		
		if (!logged_in || window.location.href.indexOf('sys_id=cb06ab4b8702255089a37408dabb3555') > -1 ) {
			console.log("should hide coveo");
			$('.coveo-case-deflection-widget').addClass('hide');
		}
	}*/

	//scrollUp()
    onResize();
	
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  return "unknown";
}

function handleArticleOnload() {
	
	/*This mutation observer can be used to action on items that may load in via widgets*/
	var bodyNode = document.getElementsByTagName('body')[0];
	var config = { attributes: false, childList:true, subtree: true };
	var callback = function(mutationList, observer) {
		//console.log("in callback");
		if ($('.youtube-player').length > 0 && $('.kb-article-wrapper').length > 0) {
			//console.log("initializing youtube video from mutationobvserver callback function");
			initYouTubeVideos();
			//QSI.run();
			observer.disconnect();
		}
		else if ($('.kb-article-wrapper').length > 0 || $('.kb-article-wrapper a').length > 0) {

			observer.disconnect();
		}

		/* Gather OS Info For Smart Sort & Auto Expand */
		var OSName="Unknown OS";
		if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
		if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
		if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
		if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
		var mobileOSName = getMobileOperatingSystem();
		if (mobileOSName == 'Android') OSName="Android";
		else if (mobileOSName == 'iOS') OSName="iOS";

		var accordions;
		if(OSName == "Windows"){
			accordions = $('.panelMacPC, .panelPC, .panelMacPCLinux, .panelPCAll');
		}
		else if(OSName == "MacOS"){
			accordions = $('.panelMacPC, .panelMac, .panelMacPCLinux');
		}
		else if(OSName == "UNIX" || OSName == "Linux"){
			accordions = $('.panelMacPCLinux, .panelLinux');
		}
		else if(OSName == "iOS"){
			accordions = $('.panelIOSAndroid, .panelIOS');
		}
		else if(OSName == "Android"){
			accordions = $('.panelIOSAndroid, .panelAndroid');
		}
		else {
			accordions = $('.kb-article-content .panel').first();
		}

		$(accordions).each(function() {
			var alink = $(this).find('.panel-heading > .panel-title a').first();
			var content = $(this).find('.panel-collapse').first();
			$(alink).removeClass('collapsed').attr('aria-expanded', true);
			$(content).addClass('in').attr('aria-expanded', true);
		});

		if (window.location.href.indexOf('#') == -1) {
			$('html').animate({ scrollTop: $('html').offset().top}, 0);
		}

	};
	// Create an observer instance linked to the callback function
	var observer = new MutationObserver(callback);

	// Start observing the target node for configured mutations
	observer.observe(bodyNode, config);
}

function handleCategoryOnload() {
	
	/*This mutation observer can be used to action on items that may load in via widgets*/
	var bodyNode = document.getElementsByTagName('body')[0];
	var config = { attributes: false, childList:true, subtree: true };
	var callback = function(mutationList, observer) {
		if ($('.youtube-player').length > 0 && $('.product-video-box').length > 0) {
			//console.log("initializing youtube video from mutationobvserver callback function");
			initYouTubeVideos();
			//QSI.run();
			observer.disconnect();
		}
		else if ($('.product-video-box').length > 0) {
			observer.disconnect();
		}
	};
	// Create an observer instance linked to the callback function
	var observer = new MutationObserver(callback);

	// Start observing the target node for configured mutations
	observer.observe(bodyNode, config);
}

function setQualtricsVariables(locale, oac, name, email, role, id) {
	qualtrics_locale = locale;
	isOAC = oac;
	user_name = name;
	user_email = email;
	user_role = role;
	article_id = id;
	//console.log("Setting variables", qualtrics_locale, isOAC, user_name, user_email, user_role, article_id);
}