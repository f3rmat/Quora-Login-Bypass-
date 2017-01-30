// Quora have themselves published this to share without restriction
// https://blog.quora.com/Making-Sharing-Better

var currentlocation = window.location.href;
var str = "?share=1";
var flag = 1;


if(currentlocation.indexOf("www.quora.com")!=-1){
	//if already logged in, do nothing
	var generatedSource = new XMLSerializer().serializeToString(document);
	var str2 = '<span class="expanded">Notifications';



	if(generatedSource.indexOf(str2)!=-1){
	flag = 0;
	}

	//if not logged in then add "?share=1" at the end of the current address
	else if(flag && currentlocation.indexOf(str)==-1 && currentlocation!="https://www.quora.com/"){
	window.location.href = currentlocation + str;
	}

	//If you open "https://www.quora.com/", then it will redirect to this random page. Now you 
	//can search and browse without logging in. 
	else if(flag && currentlocation=="https://www.quora.com/"){
	window.location.href = "https://www.quora.com/search?q=quora+is+awesome&type=question%3Fshare%3D1%3Fshare%3D1?share=1"
	}	
}

