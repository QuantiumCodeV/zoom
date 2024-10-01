document.addEventListener('DOMContentLoaded', function(e) {
	//call this function on page load
	accordionToggle();
});

function accordionToggle() {
		
	$('body').on('click', '.accordion-btn', function(e) {
		$control = $(this);

		// Get ID of div that this controls from the ID of this
		// ie. #accordion-control-div1 controls #div1
		accordionContentID = $(this).attr('id').replace("accordion-control-","#");
		accordionContent = $(accordionContentID);

		if ($(accordionContent).hasClass('open')) {
			$(accordionContent).attr('aria-hidden', 'false'); 
			$(this).attr('aria-expanded','true');
		}
		if ($(accordionContent).hasClass('closed')) {
			$(accordionContent).attr('aria-hidden', 'true'); 
			$(this).attr('aria-expanded','false');
		}

		isAriaExp = $control.attr('aria-expanded');
		newAriaExp = (isAriaExp == "false") ? "true" : "false";
		$control.attr('aria-expanded', newAriaExp);
		isAriaHid = $(accordionContent).attr('aria-hidden');

		// If the accordion is closed then we need to open it
		// 1. First add the 'open' class so that it is visible
		// 2. Use jQuery animation to take the max-height from 0px to 500px.
		// * Note : at the end of the animation we will set the max-height to be the outerHeight so that the closing animation is smoother
		if (isAriaHid == "true") {
			$(accordionContent).addClass('open');
			$(accordionContent).removeClass('closed');
			$(accordionContent).attr('aria-hidden', "false");
			$(accordionContent).animate(
				{maxHeight:"1000px"}, 400, function() {
					// Once the animation is done set max-height to 100% so that if the div changes sizes it is not limited
					$(accordionContent).css('max-height','100%');
				});
		} else {
			// Convert max-height 100% to a pixel value that we can use 
			$(accordionContent).css('max-height', $(accordionContent).prop('scrollHeight'));
			var h = parseInt($(accordionContent).css('max-height'));
			// Calculate speed of closure
			// ms = accordionContent height in px * modifier (higher = faster, lower = slower)
			var ms = h * 1.5;
			// min 400ms and max 1000s for small/large accordions
			if (ms < 400) { ms = 400; }
			if (ms > 800) { ms = 800; }
			$(accordionContent).animate(
				{maxHeight:"0px"}, ms, function() {
					$(accordionContent).removeClass('open');
					$(accordionContent).addClass('closed');
					$(accordionContent).attr('aria-hidden', "true");
				});
		}
	});
};
