/* @license
 * MyFonts Webfont Build ID 2290930, 2012-05-12T19:42:40-0400
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the URLs below.
 * 
 * Webfont: Novecento Wide Bold by Synthview
 * URL: http://www.myfonts.com/fonts/synthview/novecento/wide-bold/
 * Licensed pageviews: unlimited
 * 
 * Webfont: Novecento Wide Light by Synthview
 * URL: http://www.myfonts.com/fonts/synthview/novecento/wide-light/
 * Licensed pageviews: unspecified
 * 
 * Webfont: Novecento Wide DemiBold by Synthview
 * URL: http://www.myfonts.com/fonts/synthview/novecento/wide-demibold/
 * Licensed pageviews: unspecified
 * 
 * Webfont: Novecento Wide Book by Synthview
 * URL: http://www.myfonts.com/fonts/synthview/novecento/wide-book/
 * Licensed pageviews: unspecified
 * 
 * Webfont: Novecento Wide Normal by Synthview
 * URL: http://www.myfonts.com/fonts/synthview/novecento/wide-normal/
 * Licensed pageviews: unspecified
 * 
 * Webfont: Novecento Wide Medium by Synthview
 * URL: http://www.myfonts.com/fonts/synthview/novecento/wide-medium/
 * Licensed pageviews: unspecified
 * 
 * 
 * License: http://www.myfonts.com/viewlicense?type=web&buildid=2290930
 * Webfonts copyright: Copyright &#x00A9; 2011 by Jan Tonellato. All rights reserved.
 * 
 * © 2012 Bitstream Inc
*/


// safari 3.1: ttf
// safari 5.1: woff
// firefox 3.6+: woff
// firefox 3.5+: ttf
// chrome 4+: ttf
// chrome 6+: woff
// IE 5+: eot
// IE 9: woff
// opera 10.1+: ttf
// mobile safari 4.2+: ttf
// mobile safari: svg
// android: ttf

var browserName, browserVersion, webfontType;
 
if (typeof(customPath) == 'undefined')
	var customPath = false;


if (typeof(woffEnabled) == 'undefined')
	var woffEnabled = true;


if (/myfonts_test=on/.test(window.location.search))
	var myfonts_webfont_test = true;

else if (typeof(myfonts_webfont_test) == 'undefined')
	var myfonts_webfont_test = false;


if (customPath)
	var path = customPath;

else
{
	var scripts = document.getElementsByTagName("SCRIPT");
	var script = scripts[scripts.length-1].src;

	if (!script.match("://") && script.charAt(0) != '/')
		script = "./"+script;
		
	var path = script.replace(/\\/g,'/').replace(/\/[^\/]*\/?$/, '');
}


var wfpath = path + "/webfonts/";


if (myfonts_webfont_test)
	document.write('<script type="text/javascript" src="' + path + '/wedding_fonts_test.js"></script>');


var haveWOFF = 1;
var haveTTF = 1;

if (/(Macintosh|Android)/.test(navigator.userAgent))
	var suffix = "_unhinted";
		
else
	var suffix = "";


if (/webfont=(woff|ttf|eot)/.test(window.location.search))
	webfontType = RegExp.$1;

else if (/MSIE (\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'MSIE';
	browserVersion = new Number(RegExp.$1);
	if (haveWOFF && browserVersion >= 9.0 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 5.0)
		webfontType = 'eot';
}
else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Firefox';
	browserVersion = new Number(RegExp.$1);
	if (haveWOFF && browserVersion >= 3.6 && woffEnabled)
		webfontType = 'woff';
	else if (browserVersion >= 3.5)
		webfontType = 'ttf';
}
else if (/Chrome\/(\d+\.\d+)/.test(navigator.userAgent)) // must check before safari
{
	browserName = 'Chrome';
	browserVersion = new Number(RegExp.$1);

	if (haveWOFF && browserVersion >= 6.0 && woffEnabled)
		webfontType = 'woff';

	else if (browserVersion >= 4.0)
		webfontType = 'ttf';
		
}
else if (/Mozilla.*(iPhone|iPad).* OS (\d+)_(\d+).* AppleWebKit.*Safari/.test(navigator.userAgent))
{
	browserName = 'MobileSafari';
	browserVersion = new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)
	suffix = "_unhinted";
	
	if(browserVersion >= 4.2 && (haveTTF || haveData))
		webfontType = 'ttf';

	else
		webfontType = 'svg';
}
else if (/Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari/.test(navigator.userAgent))
{
	browserName = 'MobileSafari';
	webfontType = 'svg';
}
else if (/Safari\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Safari';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		if (browserVersion >= 5.1 && haveWOFF)
			webfontType = 'woff';
		else if (browserVersion >= 3.1)
			webfontType = 'ttf';
	}
}
else if (/Opera\/(\d+\.\d+)/.test(navigator.userAgent))
{
	browserName = 'Opera';
	if (/Version\/(\d+\.\d+)/.test(navigator.userAgent))
	{
		browserVersion = new Number(RegExp.$1);
		
		if (haveWOFF && browserVersion >= 11.1 && woffEnabled)
			webfontType = 'woff';
		else if (browserVersion >= 10.1)
			webfontType = 'ttf';
	}
}

switch (webfontType)
{
		case 'eot':
				document.write("<style>\n");
							document.write("@font-face{font-family: 'Novecentowide-Bold';src:url(\"" + wfpath + "22F4F2_0_0.eot\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Light';src:url(\"" + wfpath + "22F4F2_1_0.eot\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-DemiBold';src:url(\"" + wfpath + "22F4F2_2_0.eot\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Book';src:url(\"" + wfpath + "22F4F2_3_0.eot\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Normal';src:url(\"" + wfpath + "22F4F2_4_0.eot\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Medium';src:url(\"" + wfpath + "22F4F2_5_0.eot\");font-weight:'normal';font-style:'normal';}\n");
						document.write("</style>");
		break;
		
		case 'woff':
				document.write("<style>\n");
							document.write("@font-face{font-family: 'Novecentowide-Bold';src:url(\"" + wfpath + "22F4F2_0" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Light';src:url(\"" + wfpath + "22F4F2_1" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-DemiBold';src:url(\"" + wfpath + "22F4F2_2" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Book';src:url(\"" + wfpath + "22F4F2_3" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Normal';src:url(\"" + wfpath + "22F4F2_4" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
									document.write("@font-face{font-family: 'Novecentowide-Medium';src:url(\"" + wfpath + "22F4F2_5" + suffix + "_0.woff\") format(\"woff\");font-weight:'normal';font-style:'normal';}\n");
						document.write("</style>");
		break;
	
		case 'ttf':
				var data_fn = suffix == "_unhinted" ? "22F4F2_data_unhinted.css" : "22F4F2_data.css";
				document.write("<link rel='stylesheet' type='text/css' href='" + wfpath + data_fn + "'>");
		break;
		

		
	default:
		break;
}