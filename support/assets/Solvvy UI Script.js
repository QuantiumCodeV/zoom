(function() {

    /*var top = document.querySelector('head'); // reach out to the parent window and get the head element

    var script = document.createElement('script'); //create a new script element

    script.src = 'https://cdn.solvvy.com/deflect/customization/zoom/lazy-solvvy.js'; //sets the src attribute

    script.type = 'text/javascript'; //sets the type attribute

	script.charset = 'UTF-8';

    script.id = 'solvvy-script';

    top.appendChild(script); // appends the newly created script element at the end of the top window head element*/

	/*var top = document.querySelector('head');
	var sdkconfigScript = document.createElement("script");
    sdkconfigScript.innerHTML = 'window.zoomCampaignSdkConfig = {\n      lazyInvitationStyle: "{\\"name\\":\\"Support\\",\\"borderWidth\\":0,\\"borderRadius\\":35,\\"buttonSize\\":56,\\"fontFamily\\":\\"Inter\\",\\"text\\":\\"Lazy Dev\\",\\"btnBgColor\\":\\"#0ADE2A\\",\\"fontColor\\":\\"#FFFFFF\\",\\"selected\\":false,\\"position\\":{\\"x\\":2,\\"y\\":2},\\"type\\":\\"sticky\\",\\"id\\":\\"WESKXZv4TjmzPZGVWGPY8g\\"}"\n    }'
    top.appendChild(sdkconfigScript);
    var previewZVAScript = document.createElement("script");
    previewZVAScript.type = "text/javascript";
    previewZVAScript.src = " https://goccistatic.zoom.us/gocci/web-sdk/zcc-sdk.js";
    previewZVAScript.setAttribute("data-env", "go");
    previewZVAScript.setAttribute("data-apikey", "lAmeX_SSRbak4PZVniJxAg");
    previewZVAScript.setAttribute("data-lazy-load-campaign-url", "_blank");
    top.appendChild(previewZVAScript);*/

	/*var top = document.querySelector('head');
	var sdkconfigScript = document.createElement("script");
    sdkconfigScript.innerHTML = 'window.zoomCampaignSdkConfig = {\n      lazyInvitationStyle: "{\\"name\\":\\"default invitation\\",\\"borderWidth\\":0,\\"borderRadius\\":28,\\"buttonSize\\":56,\\"fontFamily\\":\\"Inter\\",\\"text\\":\\"\\",\\"btnBgColor\\":\\"#4488FF\\",\\"fontColor\\":\\"#FFFFFF\\",\\"selected\\":false,\\"position\\":{\\"x\\":2,\\"y\\":2}}"\n }'
    top.appendChild(sdkconfigScript);

    var ZVAScript = document.createElement("script");
    ZVAScript.type = "text/javascript";
    ZVAScript.src = "https://us01ccistatic.zoom.us/us01cci/web-sdk/chat-client.js";
    //ZVAScript.setAttribute("data-env", "us01");
    ZVAScript.setAttribute("data-apikey", "AM_FKF55QOG_vdWum455Vg");
    ZVAScript.setAttribute("data-lazy-load-campaign-url", "_blank")
    top.appendChild(ZVAScript);*/

})();