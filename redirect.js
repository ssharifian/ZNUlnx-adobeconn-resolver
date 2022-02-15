
platform  = navigator.platform
//window.alert(platform);

if (platform == 'Linux x86_64')
{
var
    url = document.URL
    tmpurl = url.replace('system/get-player?urlPath=/','');
    finalurl = tmpurl.concat("?html-view=true")

    window.location.replace(finalurl);
}





