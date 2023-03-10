import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    text-decoration: none;
}
*{
    box-sizing: border-box;
}
@font-face {
	font-family: 'proxima_nova_rgregular';
	src: url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/proximanova-regular-webfont.svg#proxima_nova_rgregular') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'proxima_nova_rgbold';
	src: url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/proximanova-bold-webfont.svg#proxima_nova_rgbold') format('svg');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'adelle_rgregular';
	src: url('https://litmus.com/fonts/Emails/adelle_reg-webfont.eot');
	src: url('https://litmus.com/fonts/Emails/adelle_reg-webfont.eot?#iefix') format('embedded-opentype'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.woff') format('woff'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.ttf') format('truetype'),
		 url('https://litmus.com/fonts/Emails/adelle_reg-webfont.svg#adelle_rgregular') format('svg');
	font-weight: normal;
	font-style: normal;
}
body{
	font-family: 'proxima_nova_rgregular', sans-serif, Arial, sans-serif;
}
`;
