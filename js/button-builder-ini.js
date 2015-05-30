// The build system won't allow me to import these scripts and all I got was this
// lousy file. I'm using Dojo to load the scripts from CDN.

dojo.ready(function() {
    var head = document.getElementsByTagName('head')[0];
    var findDojo = dojo.query("script[src$='/dojo/_base.js']")[0];
    dojo.create("script", { type: "text/javascript", src: "//cdnjs.cloudflare.com/ajax/libs/string.js/3.1.1/string.min.js"}, findDojo, "after");
    dojo.create("script", { type: "text/javascript", src: "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"}, findDojo, "after");
    dojo.create("script", { type: "text/javascript", src: "//cdnjs.cloudflare.com/ajax/libs/prism/0.0.1/prism.min.js"}, findDojo, "after"); 
});