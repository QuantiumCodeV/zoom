// Format is X:Y
// Both X,Y are strings
// X = The URL you want to redirect off of
// Y = The URL you want to redirect to if the current url == X
var base_url = window.location.origin;
var redirects = {
	"/hc/requests/new":"/hc?id=new_request&sys_id=cb06ab4b8702255089a37408dabb3555",
	"/hc/requests/new/":"/hc?id=new_request&sys_id=cb06ab4b8702255089a37408dabb3555",
	"/hc/requests":"/hc?id=request_list",
	"/hc/requests/":"/hc?id=request_list"
};

var current_path = window.location.pathname;
if (redirects[current_path] != undefined) {
	window.location.replace(base_url+redirects[current_path]);
}