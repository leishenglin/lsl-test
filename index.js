import antd from 'antd';
console.log(antd)

console.log(
    "%cAltering the text color",
    "color: fuchsia"
);

console.log(
    "%cAltering the text experience",
    "background-color: fuchsia ; color: white ; font-weight: bold ; " +
    "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
    "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
);

// NOTE: In this demo, inline-block isn't needed in Chrome; but, it is needed in
// Firefox or the block properties, like padding, don't work. Trying to use
// "block" will work in Chrome; but, will go full-width in Firefox.
console.log(
    "%cAltering the box display",
    "display: inline-block ; border: 3px solid red ; border-radius: 7px ; " +
    "padding: 10px ; margin: 20px ;"
);

// NOTE: Background-images work in Chrome, but not in Firefox. Also, at least
// locally, only fully qualified URLs seems to work (but that may have been
// something I was messing up).
// --
// Also, it doesn't look like width/height work on box-model. As such, I am using
// padding to push-out the box size.
console.log(
    "%cBackground image",
    "display: inline-block ; background-image: url( 'https://bennadel.github.io/JavaScript-Demos/demos/console-log-css/rock.png' ) ; " +
    "background-size: cover ; padding: 10px 175px 158px 10px ; " +
    "border: 2px solid black ; font-size: 11px ; line-height: 11px ; " +
    "font-family: monospace ;"
);

// The same CSS styling can be used with many of the other console methods, like
// the .group() method.
console.group(
    "%cGrouped Output",
    "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
);
console.log("Groups are cool for grouped stuff.");
console.log("Totes magotes");
console.groupEnd()