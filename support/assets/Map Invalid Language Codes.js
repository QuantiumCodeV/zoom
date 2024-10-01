(function() {

    var mainTag = document.getElementsByTagName('html')[0];

    try {

        if(mainTag.getAttribute("lang") == "pb") {
            mainTag.setAttribute("lang", "pt-BR");
        }
		if(mainTag.getAttribute("lang") == "zh") {
			mainTag.setAttribute("lang","zh-CN");
		}
		if (mainTag.getAttribute("lang") == "zt") {
			mainTag.setAttribute("lang","zh-TW");
		}

    }

    catch(e) {

        console.error(e.message);

    }

})();