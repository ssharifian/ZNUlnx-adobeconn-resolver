
var
    addressUrl = document.getElementById('urlbar');
    url = document.URL
    returl = url.replace('system/get-player?urlPath=/','');
    finalurl = returl.concat("?html-view=true")

window.location.replace(finalurl);

