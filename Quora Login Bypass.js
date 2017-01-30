var currentlocation = window.location.href;
var str = "?share=1";
if(currentlocation.indexOf(str)==-1 && currentlocation!="https://www.quora.com/"){
window.location.href = currentlocation + str;
}