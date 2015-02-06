jQuery.get('http://assets.magicjudges.org/judge-banner/judge-banner.html', function (data) {
	jQuery().ready(function () {

		jQuery('body').prepend(data);
		var hostname = window.location.hostname;
		var elem;
		if (hostname.indexOf('apps') != -1) {
			elem = jQuery('#nav-apps');
		} else if (hostname.indexOf('wiki') != -1) {
			elem = jQuery('#nav-wiki');
		} else if (hostname.indexOf('blogs') != -1) {
			jQuery('#nav-blogs').addClass('current');
		} else if (hostname.indexOf('chat') != -1) {
			elem = jQuery('#nav-irc');
		}

		if (elem) {
			elem.addClass('current');
			text = elem.text();
			elem.find('a').remove();
			elem.html(text);
		}
	});
});