function checkLink(link) {

	var link_pairs = [];
	link_pairs['https://learning.zoom.us/learn'] = 'https://zoom.us/saml2/idp/auth/zoomlearning';
	link_pairs['https://learning.zoom.us'] = 'https://zoom.us/saml2/idp/auth/zoomlearning';
	link_pairs['https://community.zoom.com/'] = 'https://zoom.us/community/sso?referer=https%3A%2F%2Fcommunity.zoom.com%2F';

	if (link_pairs[link] != null) { return link_pairs[link]; }
	else { return link; }

}