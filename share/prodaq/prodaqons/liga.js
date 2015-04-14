/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'mountain': '&#x1f4c8;',
			'candlestick': '&#x1f570;',
			'highlow': '&#x1f503;',
			'line': '&#x23bb;',
			'drawline': '&#x23bb;',
			'linearrow': '&#x2197;',
			'drawarrow': '&#x2197;',
			'drawcircle': '&#x2b2d;',
			'drawrectangle': '&#x25ad;',
			'addcalendar': '&#x1f56f;',
			'addlist': '&#x2630;',
			'calendar': '&#x1f4c5;',
			'contactcard': '&#x1f4b3;',
			'dividends': '&#x24b9;',
			'donut': '&#x2b58;',
			'stocksplit': '&#x24c8;',
			'transcript': '&#x1f5e9;',
			'arrowdownright': '&#x21aa;',
			'history': '&#x27f2;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());