var currentlocation = window.location.href;
var str = "?share=1";

// Quora have themselves published this to share without restriction
// https://blog.quora.com/Making-Sharing-Better

if(currentlocation.indexOf(str)==-1 && currentlocation!="https://www.quora.com/"){
window.location.href = currentlocation + str;
}

//If you open "https://www.quora.com/", then it will redirect to this random page. Now you 
//can search and browse without loggin in. 
else if(currentlocation=="https://www.quora.com/"){
window.location.href = "https://www.quora.com/search?q=quora+is+awesome&type=question%3Fshare%3D1%3Fshare%3D1?share=1"
}
